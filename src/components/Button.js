import React from 'react'

const Button = ({obj, texto, setDados, setCarregando}) =>{
    
    const {firstName, lastName, cardNumber, pin} = obj

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, cardNumber, pin })
    };
    const address=`https://mocafi-tetigo.vercel.app/api/company`
 
    const handleClick = async() =>{
        try {
            setCarregando(true)
            const resp = await (await fetch(address, requestOptions))
            const data = await resp.json()
            setDados({balance:data})
            setCarregando(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
    <button onClick={handleClick} style={{margin:'0.5rem'}}>{texto}</button>
    )
}

export default Button