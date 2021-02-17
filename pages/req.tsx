import React,{useState} from 'react'
import jwt from 'jsonwebtoken'
export default function req() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const handler = async(e)=>{
        e.preventDefault()
        const res = await fetch("/api/user",{
            headers:{"Content-type":"application/json",credentials: "same-origin",Cookie:"name1='value1'"},
            method:"POST",
            body:JSON.stringify({username,password})
        }).then(respone=>(respone.json()))
        const token = res.token;
        if(token){
            const res = jwt.verify(token,"secret") as {[key:string]:string}
            setMessage(`welcome ${res.username} here`)
        }
    }
    return (
        <div>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label htmlFor="password">Username:</label>
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handler}>Submit</button>
            </form>
            <h1>{message}</h1>
        </div>
    )
}
////////////////////////////////////////////////////
// import React,{useState} from 'react'
// export default  function req() {
//     const [pic,setPic] = useState("https://wikipedia.org/static/images/project-logos/frwiki-1.5x.png")
//     const handler = async()=>{
//         const req = await fetch("https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg").then(
//             (res)=>res.blob())
//             console.log("reqlink:",req)
//         const url = URL.createObjectURL(req)
//         console.log("reqlink1:",url)
//         setPic(url)
               
//     }
//     return (
//         <div>
//             <img src={pic}/>
//             <button onClick={handler}>Click</button>
//         </div>
//     )
// }
