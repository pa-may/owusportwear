import React, { useEffect, useState, useRef } from 'react';
import '../Sass/Teams.scss';
import teams from '../Data/Teams';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Teams() {
  return (
    <motion.section className="te">
      <h1 className="te__header">Teams section</h1>

      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -500 }}
        className="teams"
      >
        {teams.map((team, idx) => {
          return (
            <article key={idx} className="teams__card">
              <img src={team.image} alt="team" className="teams__card-img" />
              <h1 className="teams__card-header">{team.title}</h1>
              <p className="teams__card-text">{team.text}</p>
              <Link to={team.url} className="teams__card-btn">
                see more
              </Link>
            </article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default Teams;
