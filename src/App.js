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
  
  const [members, setMembers] = useState([]);
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

    if(!newMember.name || !newMember.email || !newMember.role) {
      setFormError('All fields are required');
    }

    setMembers([newMember, ...members]);
    setFormError('');
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <p>Fill out the form below and click "SUBMIT' to add a member to your team</p>
      <h3 className='error-text'>{formError}</h3>

      <MemberForm
        formValues={formValues}
        updateForm={updateForm}
        submitForm={submitForm}
      />

      <p className='memberHeader'>Submission was accepted if your name appears below</p>
      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }

      <p className='activeMemberHeader'>Active Members:</p>
      {
        members.map(member => {
          return (
            <Member key={member.name} details={member} />
          )
        })
      }
    </div>
  )
}

export default App;
