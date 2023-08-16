import React from 'react'
import LoginForm from './LoginForm';
import LoginSidebar from './LoginSidebar';
function LoginPage() {
  return (
    <div className='loginpage'>
        <section className='container-fluid'>
            <div className='row'>
                <div className='col-sm-4 no-padding'>
                    <LoginSidebar/>
                </div>
                <div className='col-sm-8 no-padding'>
                    <LoginForm/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default LoginPage;