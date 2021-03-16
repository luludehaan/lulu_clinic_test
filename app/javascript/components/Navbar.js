import React from "react"

const Navbar = () => (
  <>

<nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">The Clinic</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/doctors">Doctors</a></li>
        <li><a href="/users">Users</a></li>
      </ul>
    </div>
    </nav>
   </>
)
export default Navbar;