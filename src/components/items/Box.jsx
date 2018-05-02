import React from 'react'

import styled, {keyframes} from 'styled-components'

const moveVertically = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
`
const Move = styled.g`
  animation: ${moveVertically} .5s linear;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
`
const Wait = styled.g`
`

const Box = (props) => {
  const {handleClick, x, y, width, height, isMoving} = props
  const Animation = isMoving ? Move: Wait
  return (
    <svg onClick={handleClick} version="1.1" id="gift-box" x={x} y={y} width={width} height={height}
    	 viewBox="0 0 504.124 504.124" enableBackground="new 0 0 504.124 504.124">
      <Animation>
        <path fill="#DB5449" d="M15.754,133.909l236.308,118.154L488.37,133.909v252.062L252.062,504.123L15.754,385.969V133.909z"/>
        <path fill="#C54B42" d="M15.754,157.538v73.649l235.52,115.397l237.095-115.791v-73.255L252.062,273.33L15.754,157.538z"/>
        <path fill="#D05045" d="M252.062,504.123V252.063L31.508,141.786H15.754v244.185L252.062,504.123z"/>
        <path fill="#BB483E" d="M15.754,157.538v73.649l235.52,115.397l0.788-0.394v-73.255v0.394L15.754,157.538z"/>
        <path fill="#EB6258" d="M0,125.638L252.062,0.001l252.062,125.637v16.542L252.062,267.815L0,142.573V125.638z"/>
        <path fill="#EFEFEF" d="M396.603,39.779c-8.271-14.966-25.994-24.025-46.868-24.025c-47.655,0-81.132,44.505-97.674,72.862
        	c-16.542-28.357-50.412-72.468-97.674-72.468c-30.326,0-51.988,18.511-51.988,43.717c0,44.898,49.231,74.043,148.086,74.043
        	s151.237-37.415,151.237-73.649C401.723,53.17,400.148,46.081,396.603,39.779z M164.628,88.223
        	c-11.028-7.483-14.966-15.754-14.966-21.268c0-6.695,6.302-11.815,15.36-11.815c21.268,0,38.203,27.963,47.655,47.262
        	C187.865,100.432,173.292,93.736,164.628,88.223z M339.495,88.223c-8.665,5.514-23.237,12.209-48.049,14.178
        	c9.058-19.298,25.994-47.262,47.655-47.262c9.058,0,15.36,5.12,15.36,11.815C354.462,72.469,350.523,80.739,339.495,88.223z"/>
        <path fill="#E2574C" d="M0,126.032l252.062,123.274l252.062-123.274v81.526l-252.85,123.274L0,207.558V126.032z"/>
        <path fill="#EFEFEF" d="M346.585,213.859v-9.058l-94.523-51.2l-94.523,51.2v9.058L94.524,186.29v-12.603l154.387-81.526
        	l3.151,1.575l3.151-1.575L409.6,173.293v12.603L346.585,213.859z"/>
        <path fill="#DCDCDC" d="M346.585,204.801v251.668l63.015-31.508V173.293L346.585,204.801z"/>
        <path fill="#D1D1D1" d="M94.523,425.354l63.015,31.508V205.195l-63.015-31.902C94.523,173.292,94.523,425.354,94.523,425.354
        	z"/>
        </Animation>
    </svg>
  )
}

export default Box
