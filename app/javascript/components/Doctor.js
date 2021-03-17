import React from 'react';
const Doctor = ({ doctor }) => {
  const { name, id } = doctor
  return (
    <>
      <h1>Doctor: {name}</h1>
      <hr />
      <a href={`/doctors/${id}/appointments`}>Appointments</a>
    </>
  )
}
export default Doctor;