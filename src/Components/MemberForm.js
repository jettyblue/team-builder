import React from 'react';

export default function MemberForm(props) {

    const { formValues, updateForm, submitForm } = props;

    const onChange = evt => {
        const inputName = evt.target.name;
        const inputValue = evt.target.value;

        updateForm(inputName, inputValue);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submitForm();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>

            <label>Name
                <input
                    name='name'  // this name has to be exactly the same as label name
                    type='text'
                    placeholder='Type your name here'
                    maxLength='50'
                    value={formValues.name}
                    onChange={onChange}
                />
            </label>
    
            <label>Email
                <input
                    name='email'  // this name has to be exactly the same as label name
                    type='email'
                    placeholder='Type your email here'
                    value={formValues.email}
                    onChange={onChange}
                />
            </label>
    
            <label>Role
                <select value={formValues.role} name='role' onChange={onChange}>
                    <option value=''>-- Select a Role --</option>
                    <option value='New Member'>New Member</option>
                    <option value='Current Member'>Current Member</option>
                    <option value='Other'>Other</option>
                </select>
            </label>
    
            <div className='submit'>
              <button>SUBMIT</button>
            </div>
          </div>
        </form>
    )
}
