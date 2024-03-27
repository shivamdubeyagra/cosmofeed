import React, { useState } from 'react'
import { Link,useHistory} from 'react-router-dom';


let  authEmail = "shivamdubeyagra@gmail.com";
let authPassword = '123';

const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");


    const handleSubmit = () =>{
        e.preventDefault();
        if(email === authEmail && authPassword === pass){
             history.push('/home')
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"  value={email} placeholder='email' name='email'  onChange={(e)=>setEmail(e.target.value)}/>
            <input type="type" value={pass} placeholder='password' name='password' onChange={(e)=>setPass(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
        {/* {auth ? <NavLink to={'/home'}/> : <NavLink to={'/'}/>} */}
    </div>
  )
}

export default Login