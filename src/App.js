import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import MemberForm from './Components/MemberForm';
import Member from './Components/Member';

import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  
  const [member, setMember] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  }



  return (
    <div className="App">
      {/* <h2>{error}</h2> */}

    </div>
  );
}

export default App;
