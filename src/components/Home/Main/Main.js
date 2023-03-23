import { Cards } from '../../Cards'
// import '../styles/styles.css'
export const Main=()=>{
    return(
        <section className="page-container container-xl d-flex justify-content-between">
            <section className="page__leftColumn">Left</section>
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
            <Cards/>
        </div>
            </section>
            <section className='page__righColumn'>Right </section>
        </section>
    )
}