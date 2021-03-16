import React from 'react';
const AppointmentNew = ({ doctor, appointment, users}) => {
  const { time, errors, user_id } = appointment;
  const defaultTime = time ? time : ""
  const defaultUser = user_id ? user_id : "";
  return(
    <>
      <h1>Add Appointment</h1>
      { errors && errors }
      <form action={`/doctors/${doctor.id}/appointments`} method="post">
         <input
          placeholder="Time"
          type="text"
          defaultValue={defaultTime}
          name="user[time]"
        />
        <label for="user_id">Choose a user:</label>
        <select 
          // name="appointment[user_id]" 
          // id="user_id" 
          // defaultValue={defaultUser}
        >
         {/* { users.map( (user) => (
           <option value={user.id}>
             {`${user.first_name} ${user.Last_name}`}
           </option>
         ))} */}
          <option>
            test
          </option>
           <option>
            test
          </option>
           <option>
            test
          </option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default AppointmentNew;