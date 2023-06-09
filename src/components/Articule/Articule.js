import { endpoints } from "../services/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../Home/Header/Header";
import { Footer } from "../Home/Footer/Footer";
import { CardDetail } from "../Home/Cards/CardDetail";
import { ReactComponent as Heart } from "../images/iconos/corazon.svg";
import { ReactComponent as Globito } from "../images/iconos/globito.svg";
import { ReactComponent as Rectangulo } from "../images/iconos/rectangulo.svg";

export const Articule = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletePost, setDetelePost] = useState([]);

  // leer id de la ruta
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    // Crear funcion para traer los datos del API
    const fetchData = async () => {
      try {
        const endpointURL = `${endpoints.getPost}/${id}`;
        const post = await axios.get(endpointURL);
        console.log(
          "🚀 ~ file: ProductDetails.js:20 ~ fetchData ~ product:",
          post
        );
        setPost(post.data[0]);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const onClickDeletePost = (event) => {
    event.preventDefault();
    try {
      const fetchData = async () => {
        const endpointURL = `${endpoints.dellPost}/${id}`;
        const post = await axios.delete(endpointURL);
        console.log("eliminado:", post);
        setDetelePost(post);
        alert("Eliminado correctamente");
      };
      fetchData();
    } catch (error) {
      alert(`error al eliminar post:${id}`);
    }
  };
  console.log(deletePost);

  return (
    <>
      <Header />
      <div className="main__cards">
        <div id="barra" className="container-fluid">
          <ul className="mx-5">
            <li className="nav-item d-flex align-items-center p-2">
              <Heart />
              <small className="text-muted">15</small>
            </li>
            <li className="nav-item d-flex align-items-center p-2">
              <Globito />
              <small className="text-muted">4</small>
            </li>
            <li className="nav-item d-flex align-items-center p-2">
              <Rectangulo />
              <small className="text-muted">20</small>
            </li>
            <li id="tresPuntos" className="d-flex align-items-center">
              <strong className="pb-2 fs-4">...</strong>
            </li>
          </ul>
        </div>

        <div className="cards__contenido d-flex flex-column">
          <div className="iconos d-flex p-2 justify-content-end">
            <button id="editarPost" className="btn text-dark py-0">
              <Link to={`/editpost/${id}`}>
                <a className="btn btn-light text-dark py-0" type="button">
                  Edit
                </a>
              </Link>
            </button>
            <button
              id="eliminarPost"
              className="btn text-dark"
              type="submit"
              onClick={onClickDeletePost}
            >
              Delete
            </button>
          </div>
          <div id="card container-fluid px-0">
            {isLoading ? <span>Cargando...</span> : <CardDetail post={post} />}
          </div>
          {/* <Cards/> */}
        </div>

        <div id="main__column-3" className="">
          <article id="main__article">
            <div id="column-3__card-1" className="card">
              <div className="card-body">
                <div
                  id="card__perfil"
                  className="card__user d-flex align-items-end"
                >
                  <img
                    className="rounded-circle"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--zBDBOkdO--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/251078/863c814c-ab45-46c3-9af2-0214658c1219.jpeg"
                    alt="Vicent Will"
                  />
                  <strong className="fw-bolder ps-2">Vicent Will</strong>
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100 fw-bold mt-4 mb-3"
                >
                  Follow
                </button>
                <p className="card-text">
                  A full-stack JavaScript developer and maintainer of wweb.dev
                </p>
                <small className="p-0 fw-bolder">LOCATION</small>
                <p className="card-text p-0">
                  <small className="p-0 fs-6">Berlin</small>
                </p>
                <small className="p-0 fw-bolder">WORK</small>
                <p className="card-text p-0">
                  <small className="p-0 fs-6">Fullstack developer</small>
                </p>
                <small className="p-0 fw-bolder">JOINED</small>
                <p className="card-text p-0">
                  <small className="p-0 fs-6">16 oct 2019</small>
                </p>
              </div>
            </div>
            <div id="column-3__card-2" className="card mt-3">
              <div className="card-body">
                <strong className="fs-5">More from</strong>
                <strong className="text-primary fs-5">Vicent Will</strong>
                <p className="mt-4"></p>
                <span className="">Weekly web development resources #123</span>
                <p className="card-text text-muted">
                  #weekly #webdev #beginners
                </p>
                <span className="p-0">
                  Weekly web development resources #122
                </span>
                <p className="card-text text-muted">
                  #webdev #weekly #javascript #css
                </p>
                <span className="">Next.js Web App Template</span>
                <p className="card-text text-muted">
                  #nextjs #templete #webdev #javascript
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};
