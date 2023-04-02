import * as React from 'react';
import { Box } from 'react-bootstrap-icons';
import './styles.css';
import Footer from './footer';

function OurTeam() {
  return (
    <div className="container">
      <h2 className="title">Our Team</h2>
      <div className="members">
        <div className="member">
          <img src={require('.//logos/kirtan.jpeg')} className="image" alt="Kirtan Patel" />
          <div className="details">
            <h2 className="name">Kirtan Patel</h2>
            <p className="id">SGP Project Member<br />ID no: 21DCS077</p>
          </div>
        </div>
        <div className="member">
          <img src={require('.//logos/preet.jpeg')} className="image" alt="Preet Patel" />
          <div className="details">
            <h2 className="name">Preet Patel</h2>
            <p className="id">SGP Project Member<br />ID no: 21DCS083</p>
          </div>
        </div>
        <div className="member">
          <img src={require('.//logos/shreya.jpeg')} className="image" alt="Shreya Patel" />
          <div className="details">
            <h2 className="name">Shreya Patel</h2>
            <p className="id">SGP Project Member<br />ID no: 21DCS088</p>
          </div>
        </div>
     
      </div>
      <footer className="footer">
        &copy; 2023 My Website. All rights reserved.
      </footer>
        </div>
  );
}

export default OurTeam;
