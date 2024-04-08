import React from 'react'
import notfound from '../../../public/images/notfound.png'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div style={{margin: "auto", textAlign: "center", fontFamily: "Montserrat, sans-serif", marginBottom: "100px"}}>
        <img src={notfound} alt="" style={{margin: "auto", marginTop: "100px", display: "block"}}/>
        <h1>Oops! Page Not Found</h1> <br />
        <p>The page you are looking for might have been removed or temporarily unavailable.</p><br /><br />
        <Link to="/"><button style={{cursor: "pointer", backgroundColor: "#8A33FD", color: "white", border: "none", padding: "10px 20px 10px 20px", borderRadius: "7px", fontSize: "16px"}}>Back to HomePage</button></Link>
    </div>
  )
}

export default NotFound