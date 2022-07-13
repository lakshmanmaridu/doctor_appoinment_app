import {Component} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    nameInput: '',
    genderInput: '',
    ageInput: '',
    phoneInput: '',
    emailInput: '',
    addressInput: '',
    timeInput: '',
    dateInput: '',
    isFilterActive: false,
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onFilter = () => {
    const {isFilterActive} = this.state

    this.setState({
      isFilterActive: !isFilterActive,
    })
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeGenderInput = event => {
    this.setState({genderInput: event.target.value})
  }

  onChangeAgeInput = event => {
    this.setState({ageInput: event.target.value})
  }

  onChangePhoneInput = event => {
    this.setState({phoneInput: event.target.value})
  }

  onChangeEmailInput = event => {
    this.setState({emailInput: event.target.value})
  }

  onChangeAddressInput = event => {
    this.setState({addressInput: event.target.value})
  }

  onChangeTimeInput = event => {
    this.setState({timeInput: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {
      nameInput,
      genderInput,
      ageInput,
      phoneInput,
      emailInput,
      addressInput,
      timeInput,
      dateInput,
    } = this.state
    const formattedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
      : ''
    const newAppointment = {
      id: v4(),
      name: nameInput,
      gender: genderInput,
      age: ageInput,
      phone: phoneInput,
      email: emailInput,
      address: addressInput,
      time: timeInput,
      date: formattedDate,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      nameInput: '',
      genderInput: '',
      ageInput: '',
      phoneInput: '',
      emailInput: '',
      addressInput: '',
      timeInput: '',
      dateInput: '',
    }))
  }

  getFilteredAppointmentsList = () => {
    const {appointmentsList, isFilterActive} = this.state

    if (isFilterActive) {
      return appointmentsList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return appointmentsList
  }

  render() {
    const {
      nameInput,
      genderInput,
      ageInput,
      phoneInput,
      emailInput,
      addressInput,
      timeInput,
      dateInput,
    } = this.state

    const filteredAppointmentsList = this.getFilteredAppointmentsList()

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="appointments-container">
            <div className="add-appointment-container">
              <form className="form" onSubmit={this.onAddAppointment}>
                <h1 className="add-appointment-heading">
                  Doctor Appointment Form
                </h1>
                <label htmlFor="name" className="label">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={nameInput}
                  onChange={this.onChangeNameInput}
                  className="input"
                  placeholder="Enter your name"
                />
                <label htmlFor="name" className="label">
                  GENDER
                </label>
                <div className="radio-container mb-2">
                  <label className="label">
                    <input
                      type="radio"
                      value="Male"
                      checked={genderInput === 'Male'}
                      onChange={this.onChangeGenderInput}
                    />
                    Male
                  </label>
                  <label className="label">
                    <input
                      type="radio"
                      value="Female"
                      checked={genderInput === 'Female'}
                      onChange={this.onChangeGenderInput}
                    />
                    Female
                  </label>
                  <label className="label">
                    <input
                      type="radio"
                      value="Other"
                      checked={genderInput === 'Other'}
                      onChange={this.onChangeGenderInput}
                    />
                    Other
                  </label>
                </div>

                <label htmlFor="age" className="label">
                  AGE
                </label>
                <input
                  type="text"
                  id="age"
                  value={ageInput}
                  onChange={this.onChangeAgeInput}
                  className="input"
                  placeholder="Enter your age"
                />
                <label htmlFor="phone" className="label">
                  PHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneInput}
                  onChange={this.onChangePhoneInput}
                  className="input"
                  placeholder="Enter your number"
                />
                <label htmlFor="email" className="label">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  value={emailInput}
                  onChange={this.onChangeEmailInput}
                  className="input"
                  placeholder="Enter your email"
                />
                <label htmlFor="address" className="label">
                  ADDRESS
                </label>
                <input
                  type="text"
                  id="address"
                  value={addressInput}
                  onChange={this.onChangeAddressInput}
                  className="input"
                  placeholder="Enter your address"
                />
                <label htmlFor="time" className="label">
                  TIME
                </label>
                <input
                  type="time"
                  id="time"
                  value={timeInput}
                  onChange={this.onChangeTimeInput}
                  className="input"
                  placeholder="Enter your age"
                />

                <label htmlFor="date" className="label">
                  DATE
                </label>
                <input
                  type="date"
                  id="date"
                  value={dateInput}
                  onChange={this.onChangeDateInput}
                  className="input"
                />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <hr className="hr" />
            <div className="header-with-filter-container">
              <h1 className="appointments-heading">Appointments</h1>
            </div>
            <ul className="appointments-list">
              {filteredAppointmentsList.map(eachAppointment => (
                <AppointmentItem
                  key={eachAppointment.id}
                  appointmentDetails={eachAppointment}
                  toggleIsStarred={this.toggleIsStarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
