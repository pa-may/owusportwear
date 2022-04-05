import React, { Component } from 'react';
import Slider from 'react-slick';
import '../Sass/ProductCarousel.scss';
import { Link } from 'react-router-dom';
import ProductCarouselData from '../Data/ProductCarouselData';
import { motion } from 'framer-motion';

function ProductsCarousel() {
  return (
    <motion.section className="productCarousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -600 }}
        className="productCarousel__container"
      >
        {ProductCarouselData.map((datas, idx) => {
          const { name, price, url, image } = datas;
          return (
            <motion.article key={idx} className="productCarousel__card">
              <motion.img
                src={image}
                alt="team"
                className="productCarousel__img"
              />
              <h1 className="productCarousel__header">{name}</h1>
              <p className="productCarousel__card-text">{price}</p>
              <Link to={url} className="productCarousel__card-btn"></Link>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default ProductsCarousel;
