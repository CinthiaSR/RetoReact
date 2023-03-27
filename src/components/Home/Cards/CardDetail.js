
export const CardDetail=({post})=>{
  console.log(post)
  
 return post.map((data)=>{
  const {imageURL,title, content, author}=data
    return(    
        <div className="card container-fluid px-0 ">
        <img src={imageURL} className="card-img-top" alt="Cover image for Weekly web development resources #124" />
        <div className="card-body">
          <div className="d-flex">
            <div className="card__user">
              <img className="rounded-circle" src="https://res.cloudinary.com/practicaldev/image/fetch/s--zBDBOkdO--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/251078/863c814c-ab45-46c3-9af2-0214658c1219.jpeg" alt="Vicent Will" />
            </div>
            <div className="card__user__data d-flex flex-column ps-2">
              <strong className="fw-bolder">{author.name}</strong>
              <small className="text-muted">Posted on 16 nov</small>
            </div>
          </div>
          <h1 className="card-title mb-0 pt-3 pb-3">{title}</h1>
          <div className="d-flex justify-content-start">
            <a className="p-1 me-2 text-decoration-none text-dark" href="#">#weekly</a>
            <a className="p-1 me-2 text-decoration-none text-dark" href="#">#webdev</a>
            <a className="p-1 me-2 text-decoration-none text-dark" href="#">#beginners</a>
            <a className="p-1 text-decoration-none text-dark" href="#">#javascript</a>
          </div>
          <p>{content}</p>
          {/* text content */}
        </div>
      </div>
    )
 })
}