import React from 'react';
import brian from '../images/brian.jpeg';

const AboutMe = () => {
  return (
    <div className='container py-5' id='about'>
      <div className='row py-5'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={brian} alt='brian' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-heading'>about me</h1>
          <p className='about-p'>
            Nice to meet you, my name is Brian.
            <br /> I graduated the University of West in Timisoara, with a
            degree in Computer Science and right now I'm a Front End Developer.{' '}
            <br />
            Also I'm learning every day to improve my skills in the Full-Stack
            field.
            <br id='services' /> I think that the main satisfy that push me to
            grow up ever and ever, is that to solve solutions for people
            problems with the delivered software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
