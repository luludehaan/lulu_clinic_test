import React from 'react';

const AppointmentNew = ({ doctor, appointment, users }) => {
  const { time, errors, user_id } = appointment;
  const defaultTime = time ? time : "";
  const defaultUser = user_id ? user_id : "";
  return(
    <>
      <h1>Add Appointment</h1>
      { errors && errors }
      <form action={`/doctors/${doctor.id}/appointments`} method="post">
        
        <label for="time">Choose a Time:</label>
        <select class="browser-default"
          name="appointment[time]" 
          id="time" 
          defaultValue={defaultTime}
        >
          <option value="eight">Eight</option>
          <option value="eleven">Eleven</option>
          <option value="two">Two</option>
          <option value="four">Four</option>
        </select>
        <br />
        <label for="user_id">Choose a user:</label>
        <select class="browser-default"
          name="appointment[user_id]" 
          id="user_id" 
          defaultValue={defaultUser}
        >
         { users.map((u) => (
           <option value={u.id}>
             {`${u.first_name} ${u.Last_name}`}
           </option>
         ))}
        </select>
        <br />
        <br />
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
  </button>
      </form>
    </>
  )
}

export default AppointmentNew;