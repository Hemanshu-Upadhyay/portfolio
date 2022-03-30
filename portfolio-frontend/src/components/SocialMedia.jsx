import React from 'react';
import { BsTwitter,BsGithub } from 'react-icons/bs';
import {AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/UpadhyayHari_" target="_blank">
      <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/hemanshu-upadhyay-41957b1a8/" target="_blank">
      <AiFillLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/Hemanshu-Upadhyay" target="_blank">
      <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
