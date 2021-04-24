import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import Followers from './Followers'

function Users() {
    return (
        <section className="section">
            <Wrapper className="section-center">
                <Cards />
                <Followers />
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.section`
padding-top:2rem;
display:grid;
gap:3rem 2rem;
@media(min-width:992px){
    grid-template-columns:1fr 1fr;
}
`;

export default Users
