import React from 'react';

const Users = ({ users }) => {
  return(
    <>
      <h1>Users</h1>
      <a href={`/users/new`} class="btn waves-effect waves-light">Add a new User</a>
      <hr/><br />
      <h2>{ users.length <= 0 ? "No Users in the system." : "" }</h2> 
      { users.map( (u) => (
        <div>
          <a href={`/users/${u.id}`}>{u.first_name} {u.Last_name}</a>
        </div>
      ))}
      <br/><hr/>
      <a href={`/`} class="btn waves-effect waves-light">Go Back</a>
    </>
  )
}
export default Users;