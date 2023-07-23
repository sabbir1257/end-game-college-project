import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer className="p-10 rounded footer footer-center bg-base-200 text-base-content">
  <div className="grid grid-flow-col gap-4">
    <Link to="/about" className="link link-hover">About</Link> 
    <Link to="/colleges" className="link link-hover">Colleges</Link> 
    <Link to="/admission" className="link link-hover">Admission</Link> 
    <Link to="my-college" className="link link-hover">My College</Link>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <Link><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="fill-current"><BsTwitter/></svg></Link> 
      <Link><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="fill-current"><FaGithub/></svg></Link> 
      <Link><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="fill-current"><FaFacebookF/></svg></Link>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
    );
};

export default Footer;