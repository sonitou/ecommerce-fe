import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <header style={{ padding: '1rem', background: '#eee' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  )
}
