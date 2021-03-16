import React from "react";

const User = ({ user }) => {
  const { id, first_name, Last_name } = user
  return (
    <>
      <h1>Name: {Last_name}, {first_name}</h1>
      <a href={`/users/${id}/edit`}>Edit your Info</a><br />
      {/* <a href={`/users/${id}/appointments`}>Check your Appointments</a><br /> */}
      <hr />
      <a href={`/users/${id}`} data-method="delete" class="btn waves-effect waves-light red">Delete your account</a><br />
      <a href={'/users'} class="btn waves-effect waves-light">Go Back </a>
     
    </>
  )
}
export default User;