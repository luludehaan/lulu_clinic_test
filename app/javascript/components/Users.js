import React from 'react';
const Users = ({ users }) => {
  return(
    <>
      <h1>Users</h1>
      <h2>{users.length <= 0 ? "No Users" : ""}</h2>
      <a href={"/users/new"} class="btn waves-effect waves-light">Add User</a>
      <br />
      <h5>
      { users.map( (u) => (
        <div>
          <br />
          <a href={`/users/${u.id}`}>{u.first_name} {u.Last_name}</a>
          <br />
          <br />
          <a href={`/users/${u.id}/edit`} class="btn waves-effect waves-light" >Edit User</a>
          <a href={`/users/${u.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            User delete
        </a>
          <br />
          <br />
          <hr />
        </div>
        
      ))}
        </h5>
    </>
  )
}
export default Users;