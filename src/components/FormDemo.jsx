import { useState } from "react"
import Greeting from "./Greeting"

export default function FormDemo(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const handleEmail = e => {
        setEmail(e.target.value)}
    //console.log(email)
    
    const handleForm = (e) => {
        e.preventDefault()
        alert(`Hello ${name} ${email}`)
    }

    return(
        <form onSubmit={handleForm}>
            <Greeting name={name} />
            <label htmlFor="name">
                Name 
                <input 
                    type="text" 
                    name="name" 
                    onChange={ event => setName(event.target.value)}/>
                    {/* onChange=(handleNameChange) */}
            </label>
            <label htmlFor="email"> <br/>
                Email 
                <input 
                    type="text" 
                    name="email" 
                    onChange={ handleEmail }/>
                    {/* onChange=(handleNameChange) */}
            </label>
            <label htmlFor="phone"> <br/>
                Phone 
                <input 
                    type="text" 
                    name="phone" 
                    // onChange={ setPhone(phone) }
                    />
                    {/* onChange=(handleNameChange) */}
            </label>
            <label ><br/>
                <input type="submit" value="login" />
            </label>
        </form>
    )
}
