import React from 'react';

const DoctorEdit = ({ doctor }) => {
  const defaultName = doctor.name ? doctor.name : "";
  return(
    <>
      <h1> Edit Doctor Info Below: </h1>
      <form action={`/doctors/${doctor.id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        Name: <input
        placeholder="Name"
        required
        type="text"
        defaultValue={defaultName}
        name="doctor[name]"
        />
      <button class="btn waves-effect waves-light" type="Submit">Update</button>
      </form>
    </>
  )
}

export default DoctorEdit;