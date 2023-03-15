import React from 'react'

const Input = ({method, name}) => {

    const handleChange = event => {
        method(event.target.value);
        console.log('value is:', event.target.value);
      };


    return (
        <React.Fragment>
            <input
                type="text"
                id={name}
                name={name}
                onChange={handleChange}
                placeholder={name}
                style={{margin:'0.2rem'}}
            />
            <br></br>
        </React.Fragment>
    )
}

export default Input