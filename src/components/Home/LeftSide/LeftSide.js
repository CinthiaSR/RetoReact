// import '../../styles/styles.css'
import twitter from '../../images/iconos/twitter.svg'
import facebook from '../../images/iconos/facebook.svg'
import github from '../../images/iconos/github.svg'
import instagram from '../../images/iconos/insta.svg'
import twitch from '../../images/iconos/twitch.svg'
export const Leftside=()=>{
    return(
        <div>
            <ul className="categories">
            <li>🏠<p> Home</p></li>
            <li>🗃️<p> Reading List</p></li>
            <li>📜<p> Listings</p></li>
            <li>🎙️<p> Podcasts</p></li>
            <li>📄<p> Tags</p></li>
            <li>💡<p> FAQ</p></li>
            <li>🛍️<p> Forem Shop</p></li>
            <li>💜<p> Sponsors</p></li>
            <li>📇<p> About</p></li>
            <li>🎷<p> Contact</p></li>
            <li>📖<p> Guides</p></li>
            <li>🤔<p> Software comparisons</p></li>
          </ul>
          <div className="otherCategories">
            <h2>Other</h2>
            <ul>
              <li>👍🏻<p> Code of Conduct</p></li>
              <li>🤓<p> Privacy Policy</p></li>
              <li>👀<p> Terms of use</p></li>
            </ul>
          </div>
          <div className="redesDesktop d-flex justify-content-around">
            <img src={twitter} alt="twitter"/>
            <img src={facebook} alt="facebook"/>
            <img src={github} alt="github"/>
            <img src={instagram} alt="instagram"/>
            <img src={twitch} alt="twitch"/>
          </div>
          <div className="myTags">
            <div className="myTags__title d-flex justify-content-between mt-4">
              <h2>My tags</h2>
              <img src="../Assets/iconos/gear.svg" alt="gear"/>
            </div>
            <div className="myTags__list">
              <ul>
                <li>#javascript</li>
                <li>#beginners</li>
                <li>#react</li>
                <li>#linux</li>
                <li>#git</li>
              </ul>
            </div>
            <div className="thanks py-2 px-3">
              <p>Nearly 700 developers have contributed to the Forem codebase that powers DEV and other communities. 🤯</p>
              <h2>Thank you!</h2>
              <h3>👉 Forem on GitHub 👈</h3>
            </div>
            <div className="card mt-3 foremShopCard px-3 pt-3" >
              <img src="../Assets/Imagenes/forem.png" class=" " alt="forem"/>
              <div className="card-body">
                <h5 className="card-title">The Forem Shop is Here!</h5>
                <p className="card-text"> Shop Forem, DEV, and CodeNewbie merch</p>
              </div>
            </div>
          </div>
        </div>
    )
}