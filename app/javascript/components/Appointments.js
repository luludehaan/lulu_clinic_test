import React from "react";
const Appointments = ({ doctor, users, eights, elevens, twos, fours }) => {
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
      <a href={`/doctors/${doctor.id}/appointments/new`} class="btn waves-effect waves-light">New Appointment</a>
      <br />
      <h4>Eight</h4>
      { eights.map( (eight) => (
        <div>
          <p>{displayUser(eight.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${eight.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h4>Eleven</h4>
      { elevens.map( (eleven) => (
        <div>
          <p>{displayUser(eleven.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${eleven.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h4>Two</h4>
      { twos.map( (two) => (
        <div>
          <p>{displayUser(two.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${two.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h4>Four</h4>
      { fours.map( (four) => (
        <div>
          <p>{displayUser(four.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${four.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
    </>
  )
}
export default Appointments;