import React from 'react';
const UserNew = ({ user }) => {
  const { first_name, Last_name, errors } = user
  const defaultFName = first_name ? first_name : ""
  const defaultLName = Last_name ? Last_name : ""
  return(
    <>  
      <h1>Add User</h1>
      { errors && errors }
      <form action="/users" method="post">
        <input
          placeholder="First Name"
          type="text"
          defaultValue={defaultFName}
          name="user[first_name]"
        />
        <input
          placeholder="Last Name"
          type="text"
          defaultValue={defaultLName}
          name="user[Last_name]"
        />
        <button class="btn waves-effect waves-light" type="submit" name="action">Update
  </button>
      </form>
    </>
  )
}
export default UserNew;