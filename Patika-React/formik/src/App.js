import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          gender: ''
        }}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
      
        { ({handleSubmit, handleChange, values}) => (
            <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" onChange={handleChange} />
  
            <br />
            <br />
  
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" onChange={handleChange} />
  
            <br />
            <br />
  
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} />
  
            <br />
            <br />

            <span>Male</span>            
            <input 
            type="radio" 
            name="gender" 
            value="male"
            onChange={handleChange} />

            <span>Female</span>            
            <input 
            type="radio" 
            name="gender"
            value="female" 
            onChange={handleChange} />


            <br />
            <br />
  
            <button type="submit">Submit</button>

            <br />
            <br />

            <code>{ JSON.stringify(values) }</code>
            
          </form>
          )
        }

      </Formik>
    </div>
  );
}

export default App;
