import React from "react";

const Doctors = ({ doctors }) => {
  return (
    <>
      <h1>Doctors</h1>
      <a href="/doctors/new" class="btn waves-effect waves-light">Add a new Doctor</a>
      <hr/><br />
      <h2>{ doctors.length <= 0 ? "No Doctors in the system." : "" }</h2> 
      { doctors.map((doctor) => (
        <div>
          <a href={`/doctors/${doctor.id}`}>{doctor.name}</a>
        </div>
      ))}
      <br/><hr/>
      <a href={`/`} class="btn waves-effect waves-light">Go Back</a>
    </>
  )
}

export default Doctors;