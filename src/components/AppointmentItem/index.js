import './index.css'

const AppointmentIem = props => {
  const {appointmentDetails} = props
  const {
    name,
    gender,
    age,
    phone,
    email,
    address,
    time,
    date,
  } = appointmentDetails

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="text-input">Name: {name}</p>
        <p className="text-input">Gender: {gender}</p>
        <p className="text-input">Age: {age}</p>
        <p className="text-input">Phone: {phone}</p>
        <p className="text-input">Email: {email}</p>
        <p className="text-input">Address: {address}</p>
      </div>
      <p className="date">Date: {date}</p>
      <p className="time">Time: {time}</p>
    </li>
  )
}

export default AppointmentIem
