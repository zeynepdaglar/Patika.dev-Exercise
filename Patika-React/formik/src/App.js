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
        }}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
      
        { ({handleSubmit, handleChange}) => (
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
  
            <button type="submit">Submit</button>
          </form>
          )
        }

      </Formik>
    </div>
  );
}

export default App;
