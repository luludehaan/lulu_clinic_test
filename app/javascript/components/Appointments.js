import React from "react";
const Appointments = ({ doctor, users, eights, nines, tens, elevens, ones, twos, threes, fours }) => {
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
      <h4>8:00 AM</h4>
      <p>{eights.length <= 0 ? "No Appointments" : ""}</p>
      { eights.map( (eight) => (
        <div>
          <h5>{displayUser(eight.user_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${eight.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h4>9:00 AM</h4>
      <p>{nines.length <= 0 ? "No Appointments" : ""}</p>
      { nines.map( (nine) => (
        <div>
          <h5>{displayUser(nine.user_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${nine.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
       <h4>10:00 AM</h4>
      <p>{tens.length <= 0 ? "No Appointments" : ""}</p>
      { tens.map( (ten) => (
        <div>
          <h5>{displayUser(ten.user_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${ten.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h4>11:00 AM</h4>
      <p>{elevens.length <= 0 ? "No Appointments" : ""}</p>
      { elevens.map( (eleven) => (
        <div>
          <h5>{displayUser(eleven.user_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${eleven.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
       <h4>1:00 PM</h4>
      <p>{ones.length <= 0 ? "No Appointments" : ""}</p>
      { ones.map( (one) => (
        <div>
          <h5>{displayUser(one.user_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${one.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h4>2:00 PM</h4>
      <p>{twos.length <= 0 ? "No Appointments" : ""}</p>
      { twos.map( (two) => (
        <div>
          <h5>{displayUser(two.user_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${two.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h4>3:00 PM</h4>
      <p>{threes.length <= 0 ? "No Appointments" : ""}</p>
      { threes.map( (three) => (
        <div>
          <h5>{displayUser(three.user_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${three.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
      <h4>4:00 PM</h4>
      <p>{fours.length <= 0 ? "No Appointments" : ""}</p>
      { fours.map( (four) => (
        <div>
          <h5>{displayUser(four.user_id)}</h5>
          <a href={`/doctors/${doctor.id}/appointments/${four.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            delete
          </a>
        </div>
      ))}
    </>
  )
}
export default Appointments;