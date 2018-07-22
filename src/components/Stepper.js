import React from 'react';
import {func} from 'prop-types';

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
`

const Line = styled.div`
    background: #5125db  no-repeat scroll center;
    width:124px;
    height:8px;
    margin: -2px;

`

const Stepper = ({fuelSavings, onSaveClick, onChange}) => (
  <div style={{display: 'flex', alignItems: 'center'}}>
    <Circle />
    <Line />
    <Circle />
  </div>
);

Stepper.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  fuelSavings: fuelSavings.isRequired
};

export default Stepper;
