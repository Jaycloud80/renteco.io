import React from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigatefaq = useNavigate();
  function handleClick() {
    navigatefaq("/faq");
  }
  return (
    <div className='footer'>
      <div className='footer__wrapper'>
        <div class="footer__left">
          <a href="/ecosystem" class="footer__left__link">Ecosystem</a>
          <a href="/community" class="footer__left__link">Community</a>
          <a href="/governance" class="footer__left__link">Governance</a>
          {/* <a href="/developers" class="footer__left__link">Developers</a> */}
          {/* <a href="/blog" class="footer__left__link">Blog</a> */}
          <a onClick={handleClick} class="footer__left__link">FAQ</a>
          {/* <a href="/disclaimer" class="footer__left__link">Protocol Disclaimer</a>
          <a href="/trademark" class="footer__left__link">Trademark Policy</a> */}
          {/* <div class="Type__SubTitle-sc-vlvdpz-4 Footer__MediaBlurb-sc-4d78b3-4 heHzCe bFWeEM">Media inquires for Renteco Labs - Contact <a target="_blank" rel="noopener noreferrer" href="mailto:michael.chase78@gmail.com" class="">michael.chase78@gmail.com</a></div>
      */}
        </div>
        {/* <p>FAQ  · Discord · Twitter · Instagram</p> */}
        <a class="logo-icon" href="https://github.com/Jaycloud80/renteco.io" target="_blank">
          <GitHubIcon />
        </a>
      </div>
    </div>
  )
}

export default Footer