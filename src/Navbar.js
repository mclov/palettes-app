import React, { Component } from 'react';
import Slider from 'rc-slider';
import './Navbar.css';
import 'rc-slider/assets/index.css';

export class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>reactcolorpicker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              trackStyle={{ backgroundColor: 'blue', height: 10 }}
              handleStyle={{ borderColor: 'blue', height: 20, width: 20 }}
              railStyle={{ height: 10 }}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>

        </div>
      </header>
    )
  }
}

export default Navbar
