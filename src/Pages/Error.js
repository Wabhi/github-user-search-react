import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <Wrapper>
            <div>
                <h1>404</h1>
                <h3>Sorry, the page you tried cannot be found.</h3>
                <Link to="/" className="btn">Back Home</Link>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
min-height:100vh;
display:grid;
place-items:center;
background: #ff77ff;
color:white;
text-align:center;
h1{
    font-size:10rem;
}
h3{
    color: var(--clr-grey-3);
}
`;

export default Error
