import twitter from '../../images/iconos/twitter.svg'
import facebook from '../../images/iconos/facebook.svg'
import github from '../../images/iconos/github.svg'
import instagram from '../../images/iconos/insta.svg'
import twitch from '../../images/iconos/twitch.svg'
import search from '../../images/iconos/lupita.svg'
import bell from '../../images/iconos/campana.svg'
import logo from './images/logo.png'

import '../../styles/styles.scss'
export const Header=()=>{
    return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-xxl crayons-header d-flex">
            <div className="crayons-header__logo">
              <button
                className="navbar-toggler border-0 me-1"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">
                <span className="navbar-toggler-icon "></span>
              </button>
        {/* <nav className="navbar bg-light search">
              <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                      DEV Community 👩‍💻👨‍💻
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="links_list">
                    <ul className="clista">
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">🏠 Home</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">🗃️Reading List</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">📜Listings</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">🎙️Podcasts</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">📄Tags</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">💡FAQ</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">🛍️Forem Shop</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">💜Sponsors</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">📇About</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">🎷Contact</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">📖Guides</a></li>
                      <li><a href="#" className="list-group-item list-group-item-action d-flex">🤔Software comparisons</a></li>
                    </ul>
                      <h6 className="fw-bold mt-3 ms-3">Other</h6>
                      <div className="">
                        <ul className="lista">
                          <li><a href="#" className="list-group-item list-group-item-action d-flex">👍🏻 Code of Conduct</a></li>
                          <li><a href="#" className="list-group-item list-group-item-action d-flex">🤓 Privacy Policy</a></li>
                          <li><a href="#" className="list-group-item list-group-item-action d-flex">👀 Terms of use</a></li>
                      </ul>
                      </div>    
                    <div className="container mt-4 redes">
                      <ul className="d-flex lista-horizontal">
                        <li className=""><object className="me-1" data={twitter} width="21" height="21"></object></li>
                        <li className=""><object className="me-1" data={facebook}></object></li>
                        <li className=""><object className="me-1" data={github}></object></li>
                        <li className=""><object className="me-1" data={instagram}></object></li>
                        <li className=""><object className="me-1" data={twitch}></object></li>
                      </ul>
                    </div>
                  </div>
                  <div className="dropdown mt-3">                   
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>  
                </div>
              </div>
           </nav>    */}
              {/* <!-- Termina menu desplegable --> */}
              <div className="logoContainer">
                <a href="./index.html">
                  <img src={logo} alt="logo"/>
                </a>
              </div>
              
            </div>
          
            <div className="header__search ">
              <form className="d-flex justify-content-between" role="search">
                <div className="input-group">
                  <input id="searchMain" className="form-control" type="search" placeholder="Search..." aria-label="Search"/>
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                    <img src={search} alt="lupita de busqueda"/>
                  </button>
                </div>
                  <a href="./src/crearPost.html" id="BtnCrearPost"  type="submit">Create Post</a>
              </form>
            </div>
             <div className="crayons-header__option d-flex">
              <div className="iconContainer lupita navbar-toggler me-3" >
                <img src={search} alt="lupita" />
              </div>
            <div className="crayons-header__option d-flex">
              </div>
              <div className="iconContainer mx-3">
                <img src={bell} alt="campana"/>
              </div>
              <div className="profilePicContainer">
                <a href="./src/login.html" id="BtnCrearPost" className="btn btn-outline-primary" type="submit">Create account</a>
              </div>
            </div>
  
          </div>
        </nav>
      </div>
    )
}