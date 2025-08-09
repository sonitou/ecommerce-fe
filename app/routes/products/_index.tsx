import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' }
]

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
