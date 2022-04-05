import React from 'react';
import '../Sass/Social.scss';
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';

function SocialLinks() {
  return (
    <span className="socials">
      <GrFacebookOption className="socials__icon" />
      <AiOutlineTwitter className="socials__icon" />
      <AiFillInstagram className="socials__icon" />
      <AiFillLinkedin className="socials__icon" />
    </span>
  );
}

export default SocialLinks;
