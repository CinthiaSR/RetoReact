import '../styles/_card.scss'
export const Cards=()=>{
    return(
        <article className='card m-3'>
            <img src='' className='card-img-top' alt='' />
            <div className='card-body'>
                <div className='card__userDetails'>
                   <img src='./images/vincent.webp' alt=''/>
                   <div className='d-flex flex-column'>
                     <p className='fw-bold'>Alfred</p>
                     <p className='time'>27 feb 2023</p>
                   </div>
                </div>
                <a href='#'>Articule</a>
                <h3 className='card-title ms-3'>title</h3>
                <ul className='d-flex flex-wrap p-0 ms-4'>
                    <li><a href='#'>#Webdev</a></li>
                    <li><a href='#'>#Beginners</a></li>
                </ul>
                <div className='card__buttons d-flex ms-4'>
                    
                </div>
            </div>
        </article>
    )
}