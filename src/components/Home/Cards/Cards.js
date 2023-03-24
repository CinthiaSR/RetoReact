import "../../styles/_cards.scss"; 

export const Cards = () => {
  return (
    <article className="card m-3">
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <div className="card__userDetails">
          <img src="./images/vincent.webp" alt="" />
          <div className="d-flex flex-column">
            <p className="fw-bold">Alfred</p>
            <p className="time">27 feb 2023</p>
          </div>
        </div>
        <a href="#">Articule</a>
        <h3 className="card-title ms-3">title</h3>
        <ul className="d-flex flex-wrap p-0 ms-4">
          <li>
            <a href="#">#Webdev</a>
          </li>
          <li>
            <a href="#">#Beginners</a>
          </li>
        </ul>
        <div className="card__buttons d-flex ms-4">
          {/* comienza miguel*/}
          <div className="card border-0">
            <div className="card-body">
              <p className="card-text">HOLA 2</p>
              <div className="interactions d-flex">
                <div className="reactions d-flex me-4">
                  <img src="../Assets/iconos/like.svg" alt="Like Icon" />
                  <p>2 reactions</p>
                </div>
                <div className="comments d-flex">
                  <img src="../Assets/iconos/comment.svg" alt="Comment Icon" />
                  <p>Add comment</p>
                </div>
              </div>
              <div className="tools d-flex">
                <p>HOLA MUNDO</p>
                <img src="../Assets/iconos/save.svg" alt="Save Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* aquí iba content*/}
    </article>
  );
};
