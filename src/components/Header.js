import React from 'react'
import Button from './Button'
import Example from './Example'
import Input from './Input'

const Header = ({setDados, setCarregando}) => {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [cardNumber, setCardNumber] = React.useState('')
    const [pin, setPin] = React.useState('')
    const objRequest={
        firstName,
        lastName,
        cardNumber,
        pin
    }
    return (
        <div style={{marginTop:'15.5rem', marginLeft: '15.5rem'}}>
            <Input method={setFirstName} name="firstName"/>
            <Input method={setLastName} name="lastName"/>
            <Input method={setCardNumber} name="cardNumber"/>
            <Input method={setPin} name="pin"/>
            <Button setCarregando={setCarregando} setDados={setDados} texto='Get Balance' obj={objRequest}/>
            <Example/>
        </div>
    )
}

export default Header