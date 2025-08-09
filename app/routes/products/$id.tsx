import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { id } = useParams()
  return (
    <div>
      <h1>Product Detail</h1>
      <p>Showing details for product ID: {id}</p>
    </div>
  )
}
