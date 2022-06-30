import React from "react";
import styled, { keyframes } from "styled-components";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram  } from 'react-icons/bs'
import wave from './assets/wave.png';

const App = () => {

  return (
    <Footer>
      <Waves>
        <div className="wave1"></div>
        <div className="wave2"></div>
        <div className="wave3"></div>
        <div className="wave4"></div>
      </Waves>
      <Ul>
        <Li><a href="#"><BsFacebook /></a></Li>
        <Li><a href="#"><BsTwitter /></a></Li>
        <Li><a href="#"><BsLinkedin /></a></Li>
        <Li><a href="#"><BsInstagram /></a></Li>
      </Ul>
      <Ul>
        <li className='menu'><a href="#">Home</a></li>
        <li className='menu'><a href="#">About</a></li>
        <li className='menu'><a href="#">Services</a></li>
        <li className='menu'><a href="#">Team</a></li>
        <li className='menu'><a href="#">Contact</a></li>
      </Ul>
      <p>2021 Online Tutorials | All Rights Reserved</p>
    </Footer>
  )
}

export default App;

const animateWave = keyframes`
  0% {
    background-position-x: 1000px;
  }

  100% {
    background-position-x: 0;
  }
`

const Footer = styled.footer`
  position: relative;
  width: 100%;
  background: #3586ff;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: #fff;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 1.1em;
  }
`

const Ul = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;

  li {
    list-style: none;
  }

  .menu a {
    font-size: 1.2em;
    text-decoration: none;
    color: #fff;
    display: inline-block;
    margin: 0 10px;
    opacity: .55;
    transition: .3s;

    &:hover {
      opacity: 1;
    }
  }
`

const Li = styled.li`

  a {
    font-size: 2em;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: .5s;

    &:hover {
      transform: translateY(-10px);
    }
  }
`

const Waves = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: #f00 url(${wave});
  background-size: 1000px 100px;
  
  .wave1 {
    z-index: 1000;
    opacity: 1;
    bottom: 0;
    animation-name: ${animateWave};
    animation-duration: 4s;
  }

  .wave2 {
    z-index: 999;
    opacity: .5;
    bottom: 10px;
    animation: ${animateWave} 4s linear infinite;
  }
`

const Wave = styled.div`
  
`