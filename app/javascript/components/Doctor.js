import React from 'react';
const Doctor = ({ doctor }) => {
  const { name, id } = doctor
  return (
    <>
      <h1>Doctor: {name}</h1>
      <hr />
      <a href={`/doctors/${id}/appointments`} class="btn waves-effect waves-light">View Appointments</a>
    </>
  )
}
export default Doctor;