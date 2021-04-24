import React, { useState, useEffect } from 'react'
import mockFollowers from '../Context/Data/mockFollowers'
import mockRepositary from '../Context/Data/mockRepositary'
import mockUsers from '../Context/Data/mockUsers'
import axios from 'axios'

const rootUrl = "https://api.github.com/"

const GithubContext = React.createContext()
const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUsers)
    const [repos, setRepos] = useState(mockRepositary)
    const [followers, setFollowers] = useState(mockFollowers)
    
    //request and loading..............
    const [request, setRequest] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({ show: false, mssg: '' })
    
    //serachGithubUser...................
    const serachGithubUser = async (user) => {
        //console.log(user)
        showError()
        setIsLoading(true)
        //error capturing if username not exist....
        const response = await axios(`https://api.github.com/users/${user}`).catch(err => console.log(err))
        //console.log(response)
        if (response) {
            setGithubUser(response.data)
            const { login, followers_url } = response.data
            //repos->https://api.github.com/users/${user}/repos?per_page=100
            axios(`https://api.github.com/users/${login}/repos?per_page=100`)
                .then((res) => {
                 //console.log(res)
                 setRepos(res.data)

            })
            //followers->https://api.github.com/users/${user}/followers
            axios(`${followers_url}?per_page=100`)
                .then((res) => {
                 //console.log(res)
                setFollowers(res.data)
            })
        } else {
            //showError(true,'There is no user with this name')
            //alert('user not exist.....')
            showError(true,"Sorry, There is no user with this name !")
        }
        //set loading spinner when we will fetch user detail........
        rateRequest()
        setIsLoading(false)
    }
    const rateRequest = () => {
        axios("https://api.github.com/rate_limit")
            .then(({data}) => {
                 //console.log(data)
                let { rate: { remaining } } = data
                //remaining = 0
                setRequest(remaining)
                if (remaining === 0) {
                    showError(true,"Sorry, You have exceed your hourly rate limit !")
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    function showError(show=false,mssg='') {
        setError({show,mssg})
    }
    useEffect(rateRequest,[])
    return (
        <GithubContext.Provider value={{githubUser,repos,followers,request,error,serachGithubUser,isLoading}}>
            {children}
        </GithubContext.Provider>
    )
}
export {GithubContext,GithubProvider}