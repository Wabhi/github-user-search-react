import { items } from 'fusioncharts'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { GithubContext } from '../Context/Context'
//import ExampleChart from './Charts/ExapleChart'
import Pie from './Charts/Pie'
import Doughnut from './Charts/Doughnut'
import Coulumn from './Charts/Coulumn'
import Bar from './Charts/Bar'
function Repositary() {
    const { repos } = useContext(GithubContext)
    //console.log(repos)
  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item
    if (!language) return total
    if (!total[language]) {
      total[language] = {label:language,value:1,stars: stargazers_count}
    } else {
      total[language] = {...total[language],value:total[language].value+1,stars:total[language].stars+stargazers_count}
    }
      //console.log(language)
       //console.log(item)
       //console.log(language)
       return total;
  }, {})
  //console.log(languages)
  //most used language.......
  languages = Object.values(languages).sort((a, b) => b.value - a.value).slice(0, 5);
  //console.log(languages)

  //most used starts........
  const mostStars = Object.values(languages).sort((a, b) => b.stars - a.stars).map((item) => {
   return {...item,value:item.stars} 
  }).slice(0, 5)
  
  //stars,fork...........
  let { stars, forks } = repos.reduce((total, item) => {
    const { stargazers_count, name, forks } = item;
    total.stars[stargazers_count] = { label: name, value: stargazers_count }
    total.forks[forks] = {label:name,value:forks}
    return total
  }, {
    stars:{},forks:{}
  })

  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()
    //  const chartData = [
    //     {
    //       label: "HTML",
    //       value:18
    //     },
    //     {
    //       label: "CSS",
    //       value:36
    //     },
    //     {
    //       label: "JAVASCRIPT",
    //       value:86 
    //     }
    // ]
    return (
        <section className="section">
            <Wrapper className="section-center">
               {/* <ExampleChart data={chartData}/> */}
                <Pie data={languages} />
                <Coulumn data={stars} />
            </Wrapper>
            <Wrapper1 className="section-center">
              {/* <ExampleChart data={chartData}/> */}
               <Doughnut data={mostStars} />
               <Bar data={forks}/>
            </Wrapper1>
        </section>
    )
}
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-top:40px;
  gap: 2rem;
  &::before {
    content: 'LANGUAGES';
    position: absolute;
    top: 70;
    left: 20;
    transform: translateY(-100%);
    background: #eb3437;
    color: white;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;
const Wrapper1 = styled.div`
  display: grid;
  justify-items: center;
  margin-top:60px;
  gap: 2rem;
  &::before {
    content: 'STARS';
    position: absolute;
    top: 70;
    left: 20;
    transform: translateY(-100%);
    background:#e834eb;
    color: white;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repositary
