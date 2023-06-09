import mongoHack from './images/mongoHackathon.webp'
export const RightSide=()=>{
    return(
        <div> 
        <article className="mongoHackathon">
            <img src={mongoHack} alt="mongo hackathon"/>
            <div className="mongoHackathon__body">
              <h3 className="px-3 py-4">MongoDB Atlas Hackathon 2022 (9)</h3>
              <ul className="p-0">
                <li>Introducing Odesey: Personal Journal</li>
                <li>Introducing Owen Sauce - a new way to collaborate</li>
                <li>MongoDB Atlas Hackathon 2022 on DEV</li>
                <li>Announcing the MongoDB Atlas Hackathon 2022 on DEV!</li>
                <li>MongoDB Atlas Hackathon 2022 on DEV</li>
              </ul>
              <div className="d-grid gap-2 col-11 mx-auto ">
                <button className="btn btn-project" type="button">Share your project</button>
                <button className="btn btn-posts" type="button">See all posts</button>
              </div>
            </div>
          </article>
          <article className="listings">
          <ul className="list-group">
            <li className="list-group-item title d-flex justify-content-between">Listings <a href="/listings">See all </a> </li>            
            <li className="list-group-item elemento-lista ">🆘 Help Needed for Low-code Project in Node.js <a href="#">    collabs</a></li>
            <li className="list-group-item elemento-lista"> Cloud App Developers <a href="#"> events</a></li>
            <li className="list-group-item elemento-lista"> Binance Clone Script <a href="#"> collabs </a></li>
            <li className="list-group-item elemento-lista"> (Free Credits) Build your next web project with CodeDesign <a href="#"> products</a></li>
            <li className="list-group-item elemento-lista"> Convert Website To CMS In Great Budget! <a href="#"> collabs </a></li>
            <li className="list-group-item lista-btn">  <a href="#"> Create a Listing  </a></li>
          </ul>
          </article>
          <article className="listings">
            <ul className="list-group">
              <li className="list-group-item title  d-flex justify-content-between">#discuss </li>
              
              <li className="list-group-item elemento-lista "> "Who or what are you grateful for in tech?" <a href="#"> 2 comments </a></li>
              <li className="list-group-item elemento-lista"> "Why creative AI matters more than we think " <a className="New" href="#"> New</a></li>
              <li className="list-group-item elemento-lista">  "What are your goals for the week of November 21? " <a className="New" href="#"> New  </a></li>
              <li className="list-group-item elemento-lista"> "Artificial "Intelligence" and Controversial Ideas about Future Technology "<a className="New" href="#"> New </a></li>
              <li className="list-group-item elemento-lista"> "Hello, World!"" <a className="New" href="#"> New  </a></li>
  
            </ul>
            </article>
        </div>
       
    )
}