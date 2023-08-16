import React from 'react'
import keyicon from '../../src/assets/images/Key.svg';
import login from '../../src/assets/images/login-bg.jpg';
import Image from 'next/image';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

function LoginForm() {
  return (
    <section className='_form-sec d-flex flex-column justify-content-center align-items-center'  style={{ backgroundImage: `url(${login.src})` }}>
      <div className='_f_header'>
        <h2>
          <span className='key-icon'>
            <Image className="img-responsive" src={keyicon} alt="icon"/>
          </span> 
          Login / Signup</h2>
        <p>Use the form below to login into your <b> MARNIX</b> account.</p>
      </div>
      <div className='_form-body'>
          <Form>
            <Form.Group  className="mb-5" controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email Address
              </Form.Label>
              <Form.Control type="email" placeholder="Email @domin.com" />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Form.Control type="password" placeholder="**********" />
            </Form.Group>
            <div className='grp-input d-flex flex-row justify-content-between align-items-center'> 
              <Form.Group className="mb-5" controlId="formHorizontalCheck">
                  <Form.Check label="Remember me" />
              </Form.Group>

              <Form.Group className="mb-5">
                <Button type="submit" className='cmn-button'>Sign in</Button>
              </Form.Group>
            </div>
          </Form>
          <div className='link-grp'>
            <Link href="/" className='_account'>Need An Account?</Link>
            <Link href="/" className='_forget'>Forgot Password</Link>
          </div>
      </div>
    </section>
  )
}

export default LoginForm;