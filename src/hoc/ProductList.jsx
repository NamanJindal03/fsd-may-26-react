
export default function ProductList({products}) {
  return (
    <ul>
        {products.map(product => {
            return <li key={product.id}>{product.name}</li>
        })}
    </ul>
  )
}
