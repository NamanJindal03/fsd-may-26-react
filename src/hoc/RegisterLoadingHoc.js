import UserList from './UserList' //compo
import ProductList from './ProductList' //compo
import withLoadingHOC from './withLoadingHOC'
export const UserListWithLoading= withLoadingHOC(UserList);
export const ProductListWithLoading = withLoadingHOC(ProductList);