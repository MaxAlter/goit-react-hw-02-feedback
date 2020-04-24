import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <Fragment>
      <h1 className={style.allTitle}>{title}</h1>
      {children}
    </Fragment>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
