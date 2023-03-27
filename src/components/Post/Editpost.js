import React from "react";
// import "../styles/styles.scss";
import {ReactComponent as Be} from '../images/iconos/be.svg'
import {ReactComponent as Icon2} from '../images/iconos/icon2.svg'
import {ReactComponent as Icon3} from '../images/iconos/icon3.svg'
import {ReactComponent as Icon4} from '../images/iconos/icon4.svg'
import {ReactComponent as Icon5} from '../images/iconos/icon5.svg'
import {ReactComponent as Icon6} from '../images/iconos/icon6.svg'
import {ReactComponent as Icon7} from '../images/iconos/icon7.svg'
import { Header } from "../Home/Header/Header";
import { Footer } from "../Home/Footer/Footer";
import axios from "axios";
import { useState,useEffect } from "react";
import { endpoints } from "../services/endpoints";
import { useParams } from "react-router-dom";


/*import "../images/iconos" */
// INSERTAR LOS POSTS CHECAR VIDEO DE TODO LIST

const Editpost = () => {
  const params = useParams();
  const { id } = params;
  console.log(id)

  // const [editPost, setEditPost]=useState({})
  const [editPost, setEditPost] = useState({
    imageURL: '', // mandatorio
    title: '',// mandatorio
    content: '', // mandatorio
    author: '63ffa9357217497eb9b64bd4',// mandatorio
})
  const [isLoading,setIsLoading]=useState(true)


  useEffect(() => {
    // Crear funcion para traer los datos del API
    const fetchData = async () => {
      try {
        const endpointURL = `${endpoints.getPost}/${id}`;
        const post = await axios.get(endpointURL);
        console.log(
          "🚀 ~ file: ProductDetails.js:20 ~ fetchData ~ product:",
          post.data
        );
        setEditPost(post.data);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


// const [postAll,setPostAll]=useState([])
const onFormInputChange=(event)=>{
  const inputID= event.target.id
  const inputValue=event.target.value

 setEditPost({
    ...editPost,
    [inputID]:inputValue
  })
}


const onFormSubmit=(event)=>{
  event.preventDefault();
  guardarCallback()

}

const guardarCallback=async()=>{
  try {
    console.log(editPost)
    const addPost=await axios.patch(endpoints.patchPost,editPost);
    if(addPost.status !==200){
      console.log('error al insertar')
    }else{
      const newAddPost=addPost.data;
    const newListPost=[...newAddPost,...postAll]
    setFormValues(newListPost)
    resetForm()
    console.log('save')
    }
    
  } catch (error) {
    console.log("Error in Petition");
  }
}
const resetForm = () => {
  setFormValues({
    imageURL: '', // mandatorio
    title: '',// mandatorio
    content: ''
  })
}

return editPost.map((dataEdit)=>{
  return (
  <>
  <Header/>
  <div className="main__cards mt-o d-flex w-100 vh-100">
   
    <form
      id="formPost"
      className="formPost container-fluid d-flex justify-content-center mx-0"
      onSubmit={onFormSubmit}
      // callBack={guardarCallback}
    >
      <div className="cardMainPost w-100 py-3">
        <div className="cabezera w-100">
          <div className="d-flex justify-content-start px-0">
            <p className="ps-3">
              <a
                className="btn btn-outline-secondary text-dark" type="button"
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Add a cover image
              </a>
            </p>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample1"
                >
                  <div className="card card-body px-0 py-0">
                    <input
                      name="imageURL"
                      id="imageURL"
                      value={dataEdit.imageURL}
                      onChange={onFormInputChange}
                      type="text"
                      className="form-control"
                      placeholder="URL de la imágen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-floating w-100 px-0 mb-3">
            <textarea
              id="title"
              name="title"
              value={dataEdit.title}
              onChange={onFormInputChange}
              className="form-control border-0 fs-3 fw-bold pt-5"
              style={{ height: "90px" }}
              placeholder="New post title here..."
            />
            <label htmlFor="floatingTextarea">
              <p className="fs-3 fw-bold">New post title here...</p>
            </label>
            <small className="px-3">Add up to 4 tags . . .</small>
          </div>
          {/* div que no iba */}
          <div className="bg-light">
            <ul className="list-group list-group-horizontal px-3 bg-light py-2">
              <li className="list-group-item border-0 px-0 bg-light"><Be/>
              </li>
              <li className="list-group-item border-0 bg-light"><Icon2/>
              </li>
              <li className="list-group-item border-0 px-0 bg-light"><Icon3/>
              </li>
              <li className="list-group-item border-0 bg-light"><Icon4/>
              </li>
              <li className="list-group-item border-0 px-0 bg-light"><Icon5/>
              </li>
              <li className="list-group-item border-0 bg-light w-75"><Icon6/>
              </li>
              <li className="list-group-item border-0 bg-light"><Icon7/>
              </li>
            </ul>
          </div>
          <div className="form-floating w-100 h-100 px-0 mb-3 d-flex flex-column align-content-end">
            <textarea
              id="content"
              name="content"
              value={dataEdit.content}
              onChange={onFormInputChange}
              className="form-control border-0 fs-4 pt-5"
              style={{ height: "45vh" }}
              placeholder="New post title here..."
            ></textarea>
            <input
              type="hidden"
              value="63ffa9357217497eb9b64bd4"
              name="author"
              id="author"
              className="form-control"
            />
            <div className="bg-light mt-2">
              <ul className="list-group list-group-horizontal px-3 bg-light py-2">
                <button
                  id="Publish"
                  name="Publish"
                  type="submit"
                  className="btn btn-primary fw-bold"
                >
                  Publish
                </button>
                <li className="list-group-item border-0 bg-light">
                  Save draft
                </li>
                <li className="list-group-item border-0 px-0 bg-light ps-2">
                  {/* <object
                    class="me-2"
                    data="../Assets/iconos/icon8.svg"
                  ></object> */}
                </li>
                <li className="list-group-item border-0 bg-light">
                  Revert new changes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div
      id="main__column-3P"
      className="main__column-3P d-flex flex-column justify-content-center align-items-center mx-0"
    >
      <h4 className="column-H4">Writing a Great Post Title</h4>
      <p className="column-P1 lh-sm">
        Think of your post title as a super short (but compelling!)
        description — like an overview of the actual post in one short
        sentence.
      </p>
      <p className="column-P2 lh-sm">
        Use keywords where appropriate to help ensure people can find your
        post by search.
      </p>
    </div>
  </div>
  <Footer/>
  </>
);
})

};

export default Editpost;
