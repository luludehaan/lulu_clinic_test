import React from "react";

const Doctors = ({ doctors }) => {
  return (
    <>
      <h1>Doctors</h1>
      <a href="/doctors/new" class="btn waves-effect waves-light">Add Doctor</a>
      <br />
      <h2>{doctors.length <= 0 ? "No Doctors" : ""}</h2>
      <h5>
      { doctors.map((doctor) => (
        <div>
          <br />
          <a href={`/doctors/${doctor.id}`}>{doctor.name}</a>
          <br />
          <br />
          <a href={`/doctors/${doctor.id}/edit`} class="btn waves-effect waves-light">Edit Doctor</a>
          <a href={`/doctors/${doctor.id}`} class="btn waves-effect waves-light red darken-4" data-method="delete">
            Delete Doctor
        </a>
          <br />
          <br />
          <hr />
        </div>
        
      ))}
        </h5>
    </>
  )
}

export default Doctors;