import React from 'react'
import styled from 'styled-components'
import login from '../Images/githublogin.svg'
import {useAuth0} from "@auth0/auth0-react"

function Login() {
    const { loginWithRedirect } = useAuth0()
    
    return (
        <Wrapper>
            <div className="container">
                <h2 id="wel">Welcome</h2>
                <img src={login} alt="github user" width="200px" height="200px"/>
                <h1>Github User</h1>
                <button className="btn" onClick={loginWithRedirect}>LogIn / SignUp</button>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
min-height:100vh;
display:grid;
background: #6a5acd;
color:white;
place-items:center;
 .container{
     width:90vw;
     max-width:600px;
     text-align:center;
 }
 img{
     margin-bottom:2rem;
 }
 h1{
     margin-bottom:1.5rem;
 }
 #wel{
     margin-bottom:40px;
 }
`;
export default Login
