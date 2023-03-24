import { useEffect,useState } from 'react'
import axios from 'axios'
import { endpoints } from '../../services/endpoints'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import Cards from '../Cards/Cards'
import { Leftside } from '../Leftside/LeftSide'
import { RightSide } from '../RightSide/RightSide'
import '../../styles/styles.scss'
export const Main=()=>{
    const [postAll,setPostAll]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        const fetch=async()=>{
            const result=await axios.get(endpoints.getPost)
            setPostAll(result.data)
            console.log(result.data)
            setIsLoading(false)

        }
        fetch()

    },[])

    return(
     
        <main>   <Header/>
            <section className="page-container container-xl d-flex justify-content-between">
            <section className="page__leftColumn">
                <Leftside/>
            </section>
            <section className='page__centerColumn'>
            <div className="container-lg crayons-header ps-0">
            <ul className="nav tabContainer">
                <li className="nav-item">
                    <a className="nav-link fs-5 fw-bold text-dark" aria-current="page" href="#">Relevant</a>
                </li>
                <li class="nav-item">
                     <a className="nav-link disabled fs-5" href="#">Latest</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link disabled fs-5">Top</a>
                </li>
            </ul>
        </div>
        <div id="articles" className="articles">
            {
                isLoading ? <span>Cargando...</span>: <Cards postdata={postAll}/>
            }
            
        </div>
            </section>
            <section className='page__rightColumn'>
                <RightSide/>
            </section>
        </section>
        <Footer/>
        </main>
        
        
    )
}