import { UserListWithLoading, ProductListWithLoading } from "./RegisterLoadingHoc"

export default function App() {

    const users = [
        {id: 1, name: 'ram'},
        {id: 2, name: 'sham'}
    ]
    const products = [
        {id: 1, name: 'iphone'},
        {id: 2, name: 'macbook'}
    ]
  return (
    <>
    <UserListWithLoading isLoading={false} users={users}/>
    <ProductListWithLoading isLoading={true} products={products} />
    </>
  )
}
