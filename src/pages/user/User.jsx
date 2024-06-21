import axios from '../../api/index'
import React, { useEffect, useState } from 'react'

const User = () => {
  const [users, setUsers] = useState(null)
  useEffect(()=>{
       axios
       .get("/users/search", {params: {limit: 100}})
       .then(res => setUsers(res.data.data.users))
  }, [])
  return (
    <div className='users'>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {users?.map(user => (
        <tr key={user.id}>
          <td>{user.FirstName}</td>
          <td>{user.LastName}</td>
          <td>{user.role}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default User
