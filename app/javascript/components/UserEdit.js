import React from 'react';

const UserEdit = ({ user }) => {
  const { first_name, Last_name, id } = user
  const defaultFName = first_name ? first_name : ""
  const defaultLName = Last_name ? Last_name : ""
  return(
    <>  
      <h1>Edit User</h1>
      <form action={`/users/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
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
export default UserEdit;