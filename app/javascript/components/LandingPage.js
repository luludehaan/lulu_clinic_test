import React from 'react';

const LandingPage = () => {
  return (
    <>
    <h1> Welcome to our clinic.</h1><br/>
    <h3> Please select one of the options to proceed:</h3><hr/><br /><br />
    <div align="center"><a href="/doctors" class="btn waves-effect waves-light"> Doctors</a><br /><br />
    <a href="/users" class="btn waves-effect waves-light"> Users</a><br/></div>
    </>
  )
}

export default LandingPage;