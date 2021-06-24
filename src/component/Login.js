import { useState } from 'react'
import { useHistory } from "react-router-dom";


const Login = ({getDetail}) => {
    const [user,setUser] = useState("")
    const [mail,setMail] = useState("")
    const [pass,setPass] = useState("")
    const history = useHistory();
    
    function onSub(e){
        e.preventDefault()
        if (!user){
            alert("Please Enter UserName")
            return
        }
        if (!pass){
            alert("Please Enter Password")
            return
        }
        if (mail.substring(mail.length - 4, mail.length) != '.com'){
            alert("Invalid Email")
            return
        }
        getDetail({user})
        setMail("")
        setPass("")
        history.push("/lastpage");
    }

    

    return (
        <section className="container">
            <form className="form" onSubmit={onSub}>
                <div>
                    <label>Username</label>
                    <input className="inp" type="text" placeholder="Enter username" value={user} onChange={(e) => setUser(e.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input className="inp" type="email" placeholder="Enter email" value={mail} onChange={(e) => setMail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input className="inp" type="password"  placeholder="Enter password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div>
                    <input className="btn" type="submit"/>                  
                </div>
            </form> 
        </section>    
    )
}

export default Login

