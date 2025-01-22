import React, { useState } from 'react'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email:'',
    password:'',
    password2:''
  })

  const changeInputHandler = (e) =>{
  setUserData(prevState => {
    return {...prevState, [e.target.name]: e.target.value}
  })
  }
  return (
    <section className="register">
      <div className="containe">
        <h2>Sign Up</h2>
        <form className="form register__form">
          <p className="form__error-message">This is an error message</p>
          <input type="text" placeholder='Full Name' value={userData.name} onChange={changeInputHandler} />
        </form>
      </div>
    </section>
  )
}

export default Register
