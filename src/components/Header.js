import React, { useEffect, useRef, useState } from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Snowfall from "react-snowfall";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { SlControlPlay, SlControlPause } from "react-icons/sl";
import useSound from "use-sound";
import letItSnow from "../songs/song.mp3";

const Header = () => {
  const [windowWidth] = useState(window.screen.width);

  // ---------------- ALL STUFF TO TEST ---------------

  // const [musicPlay, setMusicPlay] = useState(null);
  // const [value, setValue] = useState(0.01);
  // const [playbackRate, setPlaybackRate] = useState(5);
  // const [volume, setVolume] = useState(value);
  // const [play, { pause }] = useSound(letItSnow, { volume });

  // console.log(musicPlay);
  // useEffect(() => {
  //   setVolume(value);
  // }, [value]);

  // ---------------- ALL STUFF TO TEST ---------------

  return (
    <div className="header-wraper" id="home">
      <div>
        <Snowfall />
      </div>
      <div className="main-info">
        <h1>Design and Development Solutions</h1>
        <Typed
          className="typed-text "
          typeSpeed={40}
          backSpeed={60}
          loop
          strings={["Web Apps", "Mobile Apps", "Custom Design", "E-Commerce"]}
        />

        <Link
          className="btn-main-offer"
          duration={100}
          smooth={true}
          offset={windowWidth > 415 ? -80 : -80}
          to="contact"
        >
          Contact me
        </Link>
        {/* <div className="music-player">
          <div className="music-player-btn-box">
            {/* ---------PAUSE------- */}

        {/* <button
              disabled={!musicPlay}
              className="music-player-btn"
              onClick={() => {
                setMusicPlay(false);
                pause();
              }}
            >
              <SlControlPause className="music-icon" />
            </button>

            {/* ---------PLAY------- */}

        {/* <button
              disabled={musicPlay}
              className="music-player-btn"
              onClick={() => {
                setMusicPlay(true);
                play();
              }}
            >
              <SlControlPlay className="music-icon" />
          //   </button> */}
        {/* </div> */}

        {/* <RangeSlider
            min={0}
            max={0.3}
            step={0.01}
            tooltip="off"
            size="sm"
            variant="danger"
            value={value}
            onChange={(changeEvent) => setValue(changeEvent.target.value)}
          />
        </div>   */}
      </div>
    </div>
  );
};

export default Header;
