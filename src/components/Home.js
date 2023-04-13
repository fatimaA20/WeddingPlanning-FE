import React,{ useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      
    ];


    const handleNextClick = () => {
        setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
      };
    
      const handlePrevClick = () => {
        setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
      };
    
    return (

        <div>
   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {images.map((image, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={activeIndex === index ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
  {images.map((image, index) => (
    <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
      <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
      <div className="carousel-caption d-none d-md-block" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
        <h5>Happliy Ever After</h5>
        <p>We Make Your Dreams Come True</p>
        <div>
  <Link to="/signin">
    <button style={{ border: "none", boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }} type="button" className="btn btn-dark">Start Booking</button>
  </Link>
</div>
      </div>
    </div>
  ))}
</div>

      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={handlePrevClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={handleNextClick}>
        <span className="sr-only"></span>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
        </div>

    )
}
export default Home;
