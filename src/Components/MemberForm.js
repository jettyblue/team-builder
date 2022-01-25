import React from 'react';

export default function MemberForm(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        const { value }  = evt.target;

        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>

            <label>Member Name
                <input
                    name='name'  // this name has to be exactly the same as label name
                    type='text'
                    placeholder='Type your name here'
                    maxLength='50'
                    value={values.name}
                    onChange={onChange}
                />
            </label>
    
            <label>Email
                <input
                    name='email'  // this name has to be exactly the same as label name
                    type='email'
                    placeholder='Type your email here'
                    value={values.email}
                    onChange={onChange}
                />
            </label>
    
            <label>Role
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>-- Select a Role --</option>
                    <option value='New Member'>New Member</option>
                    <option value='Current Member'>Current Member</option>
                    <option value='Just Visiting'>Just Visiting</option>
                </select>
            </label>
    
            <div className='submit'>
              <button disabled={!values.username || !values.email || !values.role}>submit</button> {/** makes it so submit button is disabled if any of these are not filled out */}
            </div>
          </div>
        </form>
    )
}
