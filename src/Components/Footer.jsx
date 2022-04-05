import React from 'react';
import '../Sass/Footer.scss';
import { Link } from 'react-router-dom';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { HiOutlinePhone, HiOutlineMailOpen } from 'react-icons/hi';
import { GrFacebookOption } from 'react-icons/gr';
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { motion } from 'framer-motion';
import logo from '../Images/logo-white.svg';
import pstudio from '../Images/pstudio.png';
import card from '../Images/cards-payment.png';

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footer__con">
          <img src={logo} alt="owu-sportswear" className="footer__logo" />

          <div className="footer__section">
            <h2 className="footer__header">Help & Information</h2>
            <ul className="footer__link-container">
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlineArrowCircleRight className="footer__icon" />
                <Link className="footer__links" to="/">
                  Faq
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlineArrowCircleRight className="footer__icon" />
                <Link className="footer__links" to="about">
                  Privacy
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlineArrowCircleRight className="footer__icon" />
                <Link className="footer__links" to="about">
                  customer service
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlineArrowCircleRight className="footer__icon" />
                <Link className="footer__links" to="about">
                  Terms & conditions
                </Link>
              </motion.li>
            </ul>
          </div>

          <div className="footer__section">
            <h2 className="footer__header">Quick Links</h2>
            <ul className="footer__link-container">
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlineArrowCircleRight className="footer__icon" />

                <Link className="footer__links" to="/">
                  Home
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlineArrowCircleRight className="footer__icon" />
                <Link className="footer__links" to="about">
                  About
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlineArrowCircleRight className="footer__icon" />

                <Link className="footer__links" to="about">
                  Team Kit
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlineArrowCircleRight className="footer__icon" />

                <Link className="footer__links" to="about">
                  Jersey Gallery
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlineArrowCircleRight className="footer__icon" />

                <Link className="footer__links" to="about">
                  Sport Gist
                </Link>
              </motion.li>
            </ul>
          </div>
          <div className="footer__section">
            <h2 className="footer__header">Contact Info</h2>
            <ul className="footer__link-container">
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlinePhone className="footer__icon" />
                <Link className="footer__links" to="/">
                  0800 123 2584
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlinePhone className="footer__icon" />
                <Link className="footer__links" to="about">
                  +220 359 8745
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <HiOutlineMailOpen className="footer__icon" />
                <Link className="footer__links" to="about">
                  email@onusportswear.com
                </Link>
              </motion.li>
            </ul>
          </div>

          <div className="footer__section">
            <h2 className="footer__header">Follow Us</h2>
            <ul className="footer__link-container">
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <GrFacebookOption className="footer__icon" />
                <Link className="footer__links" to="/">
                  Facebook
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <AiOutlineTwitter className="footer__icon" />
                <Link className="footer__links" to="about">
                  Twitter
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <AiFillInstagram className="footer__icon" />
                <Link className="footer__links" to="about">
                  Instagram
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="footer__items"
              >
                <AiFillLinkedin className="footer__icon" />
                <Link className="footer__links" to="about">
                  LinkedIn
                </Link>
              </motion.li>
            </ul>
          </div>

          <div className="footer__section">
            <h2 className="footer__header">Payment Methods</h2>
            <img src={card} alt="cards" className="payment" />
          </div>
        </section>
        {/*} <footer className="footer__partnership">
        <img
          className="footer__partnership-logo"
          src={pstudio}
          alt="partners"
        />
        <img
          className="footer__partnership-logo"
          src={pstudio}
          alt="partners"
        />
        <img
          className="footer__partnership-logo"
          src={pstudio}
          alt="partners"
        />
  </footer>*/}
      </footer>{' '}
      <footer className="bottom-footer">
        <p>Perspective Studio 2022</p>
      </footer>
    </>
  );
}

export default Footer;
