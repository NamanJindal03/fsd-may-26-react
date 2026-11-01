
export default function UserList({users}) {
    //no loading logic -> base component
  return (
    <ul>
        {users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })}
    </ul>
  )
}
