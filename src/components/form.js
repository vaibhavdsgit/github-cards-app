import React, { useState } from 'react';
import axios from 'axios'

const Form = ({onSubmit}) =>{

    const [userName, setUserName] = useState("")

    const handleChange = (event) =>{
        setUserName(event.target.value)
    }

    const handleClick = async (event) =>{
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${userName}`)
        onSubmit(response.data)
        setUserName("")
    }

    return(
        <>
            <form onSubmit={handleClick}>
                <input type="text" placeholder="Github UserName" value={userName} onChange={handleChange}></input>
                <button>Add User</button>
            </form>
        </>
        )
}
export default Form