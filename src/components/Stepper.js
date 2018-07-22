import React from 'react';
import {func, array} from 'prop-types';

import {fuelSavings} from '../types';
import styled from 'styled-components'

const Circle = styled.div`
    border: 8px solid #5125db;
    border-radius: 50%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";
    filter: alpha(opacity=60);
    opacity: 1.0;
    width: 64px;
    height: 64px;
    z-index: 86;

    -webkit-transition: background-color .5s ease-in-out;
    -moz-transition: background-color .5s ease-in-out;
    -o-transition: background-color .5s ease-in-out;
    -ms-transition: background-color .5s ease-in-out;
    transition: background-color .5s ease-in-out;   

    display: flex;
    justify-content: center;
`

const Line = styled.div`
    background: #5125db  no-repeat scroll center;
    width:124px;
    height:8px;
    margin: -2px;
`

const Name = styled.div`
    margin-top: -24px;
`

const Stepper = ({ options }) => (
  <div style={{display: 'flex', marginTop: '48px'}}>
    {options.map(option => {
      return (
        <div key={option.id} style={{display: 'flex', alignItems: 'center'}}>
          <Circle>
            <Name>
              {option.name}
            </Name>
          </Circle>
          {options[options.length-1] != option && <Line />}
        </div>
      );
    })}
  </div>
);

Stepper.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  fuelSavings: fuelSavings.isRequired,
  options: array.isRequired
};

export default Stepper;
