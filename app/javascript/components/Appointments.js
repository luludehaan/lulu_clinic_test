import React from "react";

const Appointments = ({ doctor, users, time }) => {
   const displayUser = (id) => {
    let fullName
    users.map((u) => {
      if (u.id === id) {
        fullName = u.first_name + " " + u.Last_name
      }
    })
    return fullName
  }
  return(
    <>
      <h1>{doctor.name} Appointments</h1>
      <a href={`/doctors/${doctor.id}/appointments/new`}>Add Appointment</a>
      <br />
      <h2>Users</h2>
      { users.map( (user) => (
        <div>
          <p>{displayUser(user.id)}</p>
          <p>Time: {time} </p>
          <a href={`/doctors/${doctor.id}/appointments/${user.id}`} data-method="delete">
            delete
          </a>
        </div>
      ))}
    </>
  )
}
export default Appointments;