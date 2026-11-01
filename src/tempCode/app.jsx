import React, {useState} from 'react'

export default function app() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const response = await fetch("/api/user");
    const data = await response.json();

    setUser(data);
  }

  return (
    <button onClick={fetchUser}>
      Load Profile
    </button>
  );
}
