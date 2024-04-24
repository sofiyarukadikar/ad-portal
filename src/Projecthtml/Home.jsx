import React from 'react';
import Headers from '../Header/Headers';
import { Link } from 'react-router-dom';
import './stylehome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faLaptopMedical, faCarSide, faMotorcycle, faChair, faPaw, faBook, faUserTie, faChildReaching, faBellConcierge, faAt, faHome } from '@fortawesome/free-solid-svg-icons';


const Home = () => {


  return (
    <div>
      <Headers />
      <div className='Homediv'>
        <div className='firsthome'>

          <h1>Sell or Advertise anything online with Adsale</h1>
          <Link to="/signup">
            <button type="button" id='post'>Post Ad</button>
          </Link>



        </div>

        <div className='flexibox'>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faMobile} /></div><div>Mobiles</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faLaptopMedical} /></div><div>Electronics</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faCarSide} /></div><div>Cars</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faMotorcycle} /></div> <div>Bikes</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faChair} /></div><div>Furniture</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faPaw} /></div><div>Pets</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faBook} /></div><div>Hobbies</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faUserTie} /></div> <div>fashion</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faChildReaching} /></div><div>Kids</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faBellConcierge} /></div><div>Services</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faAt} /></div><div>Jobs</div></div></a>

          <a href="NextPage.html" className="anchr"><div className='member'><div className='member1'><FontAwesomeIcon icon={faHome} /></div><div>Real Estate</div></div></a>

        </div>
      </div>
    </div>

  );
};

export default Home;
