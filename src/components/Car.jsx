import React from 'react'

const Car = (props) => {
  const {handleClick, x, y, width, height} = props
  return (
    <svg onClick={handleClick} version="1.1" id="car" x={x} y={y} width={width} height={height}
    	 viewBox="0 0 504.124 504.124" enableBackground="new 0 0 504.124 504.124">
     <g>
      <path fill="#1E2E37" d="M378.092,378.092v27.569c0,11.028,8.665,19.692,19.298,19.692h31.902v-47.262h-51.2V378.092z
         M74.831,425.354h31.902c10.634,0,19.298-8.665,19.298-19.692v-27.569h-51.2C74.831,378.094,74.831,425.354,74.831,425.354z"/>
      <path fill="#324D5B" d="M413.538,378.092v64.197c0,14.572,11.815,26.388,25.994,26.388h14.572
        c14.572,0,25.994-11.815,25.994-26.388v-72.074C480.098,370.215,413.538,378.092,413.538,378.092z M23.631,442.289
        c0,14.572,11.815,26.388,25.994,26.388h14.572c14.572,0,25.994-11.815,25.994-26.388v-64.197l-66.56-7.877
        C23.631,370.215,23.631,442.289,23.631,442.289z"/>
      <path fill="#BF392B" d="M250.486,35.446h1.182c133.514,0,165.809,57.108,165.809,165.415H86.646
        C86.646,92.554,119.335,35.446,250.486,35.446z"/>
      <path fill="#85C6DC" d="M250.88,55.138h1.182c117.366,0,145.723,50.412,145.723,145.723H106.338
        C106.338,105.551,135.089,55.138,250.88,55.138z"/>
      <path fill="#85281E" d="M252.062,334.77c80.345,0,145.723,14.966,145.723,33.477s-65.378,33.477-145.723,33.477
        s-145.723-14.966-145.723-33.477C106.338,349.735,171.717,334.77,252.062,334.77z"/>
      <path fill="#BF392B" d="M88.222,212.677l164.234-23.631l163.446,23.631c48.837,0,88.222,39.778,88.222,89.403v19.298
        c0,14.178-6.302,25.6-25.206,25.6H25.206C6.695,346.585,0,335.163,0,320.985v-19.298C0,252.455,39.385,212.677,88.222,212.677z"/>
      <path fill="#E4E7E7" d="M20.086,342.646h463.557c6.695,0,12.209,5.12,12.209,11.815c0,12.997-11.028,23.631-24.812,23.631
        H32.689c-13.785,0-24.812-10.634-24.812-23.631C7.877,347.766,13.391,342.646,20.086,342.646L20.086,342.646z"/>
      <path fill="#E2574C" d="M422.597,200.468c0,0-45.686,18.117-69.711,98.068c0,0-13.391,44.111-44.111,44.111H195.348
        c-30.72,0-44.111-44.111-44.111-44.111c-24.025-79.951-69.317-97.28-69.317-97.28c-15.754-6.302,0-15.754,0-15.754
        c63.803-36.234,170.142-31.902,170.142-31.902s105.945-4.726,170.535,31.902C422.597,185.502,437.169,193.772,422.597,200.468z"/>
      <path fill="#BF392B" d="M168.566,293.022c1.969,6.302,12.209,29.932,25.206,29.932h34.658V173.292
        c-59.865,0-98.855,11.028-122.092,21.268C124.455,208.345,151.631,237.095,168.566,293.022z M275.692,173.292v149.662h31.114
        c13.391,0,23.237-23.631,25.206-29.932c16.542-55.138,43.323-84.283,61.44-98.462C371.003,184.32,333.194,173.686,275.692,173.292z"
        />
      <path fill="#E87970" d="M244.185,153.6h15.754v189.046h-15.754V153.6z"/>
      <path fill="#E0E3E4" d="M70.892,248.123c-19.692,0-35.446,15.754-35.446,35.446s15.754,35.446,35.446,35.446
        s35.446-15.754,35.446-35.446C106.338,263.878,90.585,248.123,70.892,248.123z M433.231,248.123
        c-19.692,0-35.446,15.754-35.446,35.446s15.754,35.446,35.446,35.446s35.446-15.754,35.446-35.446
        C468.677,263.878,452.923,248.123,433.231,248.123z"/>
      <path fill="#C0C8CB" d="M70.892,271.754c-6.695,0-11.815,5.12-11.815,11.815s5.12,11.815,11.815,11.815
        s11.815-5.12,11.815-11.815S77.194,271.754,70.892,271.754z M433.231,271.754c-6.695,0-11.815,5.12-11.815,11.815
        s5.12,11.815,11.815,11.815s11.815-5.12,11.815-11.815S439.926,271.754,433.231,271.754z"/>
      <path fill="#F4B459" d="M426.535,192.985h-7.089c-7.877,0-14.178,5.908-14.178,13.785v6.695
        c0,3.938,7.877,6.695,17.329,6.695c9.846,0,17.329-3.151,17.329-6.695v-6.695C440.714,199.286,434.412,192.985,426.535,192.985z
         M83.889,192.985H76.8c-7.877,0-14.178,5.908-14.178,13.785v6.695c0,3.938,7.877,6.695,17.329,6.695s17.329-3.151,17.329-6.695
        v-6.695C98.068,199.286,91.766,192.985,83.889,192.985z"/>
      <path fill="#92D2E8" d="M117.366,122.486c19.692-9.846,76.8-35.052,133.908-35.052c57.502,0,115.397,25.206,135.089,35.052
        c-16.542-44.505-55.138-67.348-134.302-67.348h-1.182C172.898,55.138,134.302,77.982,117.366,122.486z"/>
      <path fill="#CCD0D2" d="M433.231,256c15.36,0,27.569,12.209,27.569,27.569c0,15.36-12.209,27.569-27.569,27.569
        c-15.36,0-27.569-12.209-27.569-27.569C405.662,268.21,417.871,256,433.231,256 M70.892,256c15.36,0,27.569,12.209,27.569,27.569
        c0,15.36-12.209,27.569-27.569,27.569s-27.569-12.209-27.569-27.569C43.323,268.21,55.532,256,70.892,256 M433.231,248.123
        c-19.692,0-35.446,15.754-35.446,35.446s15.754,35.446,35.446,35.446s35.446-15.754,35.446-35.446
        C468.677,263.878,452.923,248.123,433.231,248.123z M70.892,248.123c-19.692,0-35.446,15.754-35.446,35.446
        s15.754,35.446,35.446,35.446s35.446-15.754,35.446-35.446C106.338,263.878,90.585,248.123,70.892,248.123z"/>
    </g>
    </svg>
  )
}

export default Car
