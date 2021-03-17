import React from "react";
const User = ({ user, full_name, doctors }) => {
  const { id } = user;
  return (
    <>
      <div className="user-card"> 
        <h1>{full_name}</h1>
        <a href={`/users/${id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
          Delete User
        </a>
        <hr />
        <h4>{full_name}'s Doctors:</h4>
        <ul>
          { doctors.map( (d) => (
            <li>
              <h5>- <a href={`/doctors/${d.id}`}>{d.name}</a></h5>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default User;