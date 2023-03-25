// import "../styles/_card.scss";
import like from "../../images/iconos/like.svg";
import comment from "../../images/iconos/comment.svg";
import save from "../../images/iconos/save.svg";
import { Link } from "react-router-dom";
export const Cards = ({ postdata }) => {
  return postdata.map((post) => {
    return (
      <article className="card m-3">
        <Link to={`/article/${post._id}`}>
          <img src={post.imageURL} className="card-img-top" alt="" />
        </Link>
        <div className="card-body">
          <div className="card__userDetails d-flex align-items-center mb-2">
            <a href="#"></a>
            <ul className="d-flexflex-wrap p-0 ms-4"></ul>
            <div className="d-flex flex-column">
              <img src={post.imageURL} alt="" />
              <p className="fw-bold">{post.author.name}</p>
              <p className="time">27 feb 2023</p>
            </div>
          </div>
          {/* <a href="#">Articule</a> */}
          <Link to={`/article/${post._id}`}>
             <h3 className="card-title ms-3">{post.title}</h3>
          </Link>
          <div className="card__buttons d-flex ms-4">
            {/* comienza miguel*/}
            <div className="card border-0">
              <div className="card-body">
                {/* <p className="card-text">{post.content}</p> */}
                <div className="interactions d-flex">
                  <div className="reactions d-flex me-4">
                    <img src={like} alt="Like Icon" />
                    <p>2 reactions</p>
                  </div>
                  <div className="comments d-flex">
                    <img src={comment} alt="Comment Icon" />
                    <p>Add comment</p>
                  </div>
                  <div className="tools d-flex">
                    <img src={save} alt="Save Icon" />
                    <p>tiempo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="d-flex flex-wrap p-0 ms-4">
            <li>
              <a href="#">#Webdev</a>
            </li>
            <li>
              <a href="#">#Beginners</a>
            </li>
          </ul>
        </div>
      </article>
    );
  });
};
export default Cards;
