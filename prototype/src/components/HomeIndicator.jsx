export default function HomeIndicator() {
  return (
    <div
      style={{
        height: 38,
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 8,
        position: 'relative',
        zIndex: 30,
      }}
    >
      <div style={{ width: 134, height: 5, borderRadius: 100, background: '#fff' }} />
    </div>
  )
}
