/* Splash → content hand-off.

   The loader holds for a random 1–3s, the way a real cold start does: long
   enough to read as work, short enough not to feel stuck. The two layers
   overlap for a moment — the splash is still fading while the content has
   already begun arriving — so the seam never shows as a swap. */

const SPLASH_MIN = 1000;
const SPLASH_MAX = 3000;
const OVERLAP = 220; // content starts before the splash has finished leaving

const splash = document.getElementById('splash');
const screen = document.getElementById('screen');
const replay = document.getElementById('replay');

let timers = [];
const after = (ms, fn) => timers.push(setTimeout(fn, ms));
const clearAll = () => { timers.forEach(clearTimeout); timers = []; };

function run() {
  clearAll();

  splash.classList.remove('splash--out');
  splash.style.display = '';
  screen.hidden = true;
  screen.classList.remove('screen--in');

  const hold = SPLASH_MIN + Math.random() * (SPLASH_MAX - SPLASH_MIN);

  after(hold, () => {
    splash.classList.add('splash--out');

    after(OVERLAP, () => {
      screen.hidden = false;
      // One frame on the start values, then flip — otherwise the browser
      // collapses both states into the same style recalculation and the
      // transition never plays.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => screen.classList.add('screen--in'));
      });
    });

    // Take the finished splash out of the layer tree so its blend mode
    // stops costing a composite on every frame underneath.
    after(900, () => { splash.style.display = 'none'; });
  });
}

replay.addEventListener('click', run);
run();
