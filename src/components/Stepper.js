import React from 'react';
import {number, array} from 'prop-types';

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

const Wrapper = styled.div`
    display: flex;
    margin-top: 48px;
`

const Overlay = styled.div`
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
`

const Segment = styled.div`
  display: flex;
  align-items: center;
`

const Stepper = ({ options, currentStep }) => (
  <Wrapper>
    {options.map(option => {
      return (
        option.id <= currentStep ?
        <Segment key={option.id}>
          {options[0] != option && <Line />}
          <Circle>
            <Name>
              {option.name}
            </Name>
          </Circle>
        </Segment> :
        <Overlay key={option.id}>
          <Segment>
            {options[0] != option && <Line />}
            <Circle>
              <Name>
                {option.name}
              </Name>
            </Circle>
          </Segment>
        </Overlay>
      );
    })}
  </Wrapper>
);

Stepper.propTypes = {
  options: array.isRequired,
  currentStep: number.isRequired,
};

export default Stepper;
