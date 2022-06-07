import React, { useState } from "react"
import { Link } from "react-router-dom"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const mockAccount = {
  email: "minhlee@gmail.com",
  password: "123456"
}

const Login = () => {
  const [errLogin, setErrLogin] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [recValue, setRecValue] = useState([])
  const submitForm = (e) => {
    e.preventDefault()
    const newValue = { email: email, password: password }

    if (!(email !== mockAccount.email || password !== mockAccount.password)) {
      setRecValue([...recValue, newValue])
      console.log(newValue)

      setEmail("")
      setPassword("")
    } else {
      setErrLogin(true)
    }
  }
  return (
    <>
      <HeadTitle />
      <section className='show-data'>
        {recValue.length ? recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Sign-In Successfully</h1>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
              </div>
            </>
          )
        })
          : (errLogin && (<>
            <div className='sign-box show-error'>
              <h1>Sign-In Failure: No account matched</h1>
              <h3>
                Email : <p>Email in-correct</p>
              </h3>
              <h3>
                Password : <p>Password in-correct</p>
              </h3>
            </div>
          </>))
        }
      </section>
      <section className='forms top'>
        {!email ? <div className='container'>
          <div className='sign-box'>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <span>I forgot my password</span>
                </div>
              </div>

              <button type='submit' className='primary-btn'>
                Sign In
              </button>
              <p>
                Don't have account? <Link to='/register'>Signup!</Link>
              </p>
            </form>
          </div>
        </div> :
          (
            <div className='sign-box'>
              <p>Login successful with account : {email}.</p>
              <Link to='/'>See some rooms in our hotel!</Link>
            </div>
          )
        }
      </section>
    </>
  )
}

export default Login
