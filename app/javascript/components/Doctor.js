import React from 'react';

const Doctor = ({ doctor }) => {
  const { name, id } = doctor
  return (
    <>
      <h1>Doctor: {name}</h1>
      <a href={`/doctors/${id}/edit`}>Edit your Info</a><br/>
      <a href={`/doctors/${id}/appointments`}>Check your appointments</a><br/>
      <hr />
      <a href={`/doctors/${id}`} data-method="delete" class="btn waves-effect waves-light red">Delete your account</a><br />
      <a href={`/doctors`} class="btn waves-effect waves-light">Go Back</a>
    </>
  )
}

export default Doctor;