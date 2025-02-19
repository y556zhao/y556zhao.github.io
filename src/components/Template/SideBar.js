import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/allan.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yuchi(Allan) Zhao</h2>
        <p>
          <a href="mailto:allan.zhao@utoronto.ca">allan.zhao@utoronto.ca</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Allan. I am currently a CS PhD student at the <a href="https://web.cs.toronto.edu/">University of Toronto</a>.
        My research interests are in robot manipulation and robot learning.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/projects" className="button">
              Checkout my projects
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Yuchi(Allan) Zhao <Link to="/">y556zhao.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
