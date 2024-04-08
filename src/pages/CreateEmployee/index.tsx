import { Link } from 'react-router-dom'

export default function CreateEmployee() {
  return (
    <div>
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form
        className="create-employee__form"
        action="#"
        id="create-employee__form"
      >
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" />
        <label>Date of Birth</label>
        <label>Start Date</label>
        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input id="street" type="text" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
          <label htmlFor="state">State</label>
          <select name="state" id="state">
            <option>France</option>
          </select>
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>
        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
    </div>
  )
}
