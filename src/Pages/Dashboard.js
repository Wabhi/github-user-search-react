import React, { useContext } from 'react'
import styled from 'styled-components'
import Followers from '../Components/Followers'
import Infos from '../Components/Infos'
import Navbar from '../Components/Navbar'
import Repositary from '../Components/Repositary'
import Search from '../Components/Search'
import Users from '../Components/Users'
import { GithubContext } from '../Context/Context'
import preloader from '../Images/preloaderl.gif'
//import Footer from '../Components/Footer'
function Dashboard() {
    const { isLoading } = useContext(GithubContext)
    if (isLoading) {
        return (
            <main>
                <Navbar />
                <Search />
                <img src={preloader} className="loading-img" alt="loading..."></img>
            </main>
        )
    }
    return (
        <Wrapper>
            <Navbar />
            <Search />
            <Infos />
            <Users />
            <Repositary />
            {/* <Followers /> */}
        </Wrapper>
    )
}
const Wrapper = styled.section`
min-height:100vh;
background: #ffcff1;
`;
export default Dashboard
