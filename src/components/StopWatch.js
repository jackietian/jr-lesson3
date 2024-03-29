// // import React from 'react';

// // class StopWatch extends React.Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       time: 0,
// //       isRunning: false,
// //     };
// //   }

// //   handleStart = () => {
// //     console.log('clicked start');
// //     // reset time to 0
// //     this.setState({
// //       time: 0,
// //     });

// //     // increase time by 1 every single millisecond
// //     this.timer = setInterval(() => {
// //       // increase time by one
// //       this.setState({
// //         time: this.state.time + 1,
// //         isRunning: true,
// //       });
// //     }, 1)
// //   }

// //   handleStop = () => {
// //     // stop time change
// //     clearInterval(this.timer);

// //     this.setState({
// //       isRunning: false,
// //     })
// //   }

// //   render() {
// //     return (
// //       <div>
// //         {this.state.time}
// //         <button
// //           onClick={this.handleStart}
// //           disabled={this.state.isRunning}>start</button>
// //         <button onClick={this.handleStop}>stop</button>
// //       </div>
// //     )
// //   }
// // }

// // export default StopWatch;

// // stop watch to do list
// // #1. seconds + 1
// // #2. start button
// // #3. stop button

// import React from 'react'

// class StopWatch extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       seconds: 0,
//       isRunning: false,
//     }
//     // this.start = this.start.bind(this)
//     // this.stop = this.stop.bind(this)
//   }

//   start = () => {
//     this.setState({
//       seconds: 0,
//       isRunning: true,
//     })

//     this.timer = setInterval(() => {
//       this.setState({
//         seconds: this.state.seconds + 1
//       })
//     }, 1)
//   }

//   stop = () => {
//     this.setState({
//       isRunning: false,
//     })

//     clearInterval(this.timer)
//   }

//   render() {
//     return <>
//       <h1>{this.state.seconds}</h1>
//       <button
//         disabled={this.state.isRunning}
//         onClick={this.start}>
//         start
//       </button>
//       <button onClick={this.stop}>stop</button>
//     </>
//   }
// }

// export default StopWatch

// import React from 'react'

// class StopWatch extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       time: 0,
//       isRunning: false
//     }
//   }

//   start = () => {
//     // change isRunning to true
//     this.setState({
//       time: 0,
//       isRunning: true
//     })

//     this.timer = setInterval(() => {
//       // update time
//       this.setState((prev) => ({
//         time: prev.time + 1
//       }))
//     }, 1)
//   }

//   stop = () => {
//     // reset isRunning to false
//     this.setState({
//       isRunning: false
//     })

//     clearInterval(this.timer)
//   }

//   render() {
//     const { time, isRunning } = this.state
//     return <div>
//       <h1>{time}</h1>
//       {!isRunning && <button onClick={this.start} disabled={isRunning}>start</button>}
//       <button onClick={this.stop}>stop</button>
//     </div>
//   }
// }

// export default StopWatch

import React, { useState, useRef } from "react";

// class StopWatch extends React.Component {

//   state ={
//     counter: 0,
//     isStartBtnDisabled: false,
//   }

//   start = () => {
//     console.log('start')
//     this.setState((prevState, props) => {
//       return {
//         isStartBtnDisabled: true,
//         counter: 0
//       }
//     }, () => {
//       // this.state.counter will get the latest value
//     })

//     // this.state.counter not 100% accurates

//     const cb = () => {
//       // increase counter by 1 every millisecond
//       this.setState({
//         counter: this.state.counter + 1
//       })
//     }
//     this.timer = setInterval(cb, 1)
//   }

//   stop = () => {
//     console.log('stop')
//     this.setState({
//       isStartBtnDisabled: false,
//     })
//     clearInterval(this.timer)
//   }

//   render() {
//     return (
//       <>
//         <div>{this.state.counter}</div>
//         <button
//           onClick={this.start}
//           disabled={this.state.isStartBtnDisabled}>start</button>
//         <button onClick={this.stop}>stop</button>
//       </>
//     )
//   }
// }

/**
 * timer can be defined as a global variable
 * but this will only work when singleton instance is being called.
 *
 * if we have 2 or more StopWatch, and and click start button for all watches
 * the stop button will work for the last watch, because global variable is overwritten to be the last intervalID
 *
 * so only option left here is useRef hook, it will always return the same ref object({current: refValue}) on every re-render
 */
let timer;

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  /**
   * useRef will give you the same ref object on every render.
   * https://reactjs.org/docs/hooks-reference.html#useref
   * useRef is like "box" into which you can put anything
   * { current: null }
   */
  let intervalId = useRef(null);

  /**
   * if we define a variable in function component
   * the timer is always the initial the value in stop function
   * stop function cannot capture the new intervalID which defined in start function
   */
  let timer;

  const start = () => {
    setCount(0);
    setIsRunning(true);

    intervalId.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      /**
       * the code below only increase from 0 to 1, because count is always 0
       * to get latest count, we need to use callback way to change state
       */
      // console.log("setInterval tick", count);
      // setCount(count + 1);
    }, 1);

    console.log(timer);
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalId.current);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={start} disabled={isRunning}>
        start
      </button>
      <button onClick={stop}>stop</button>
    </>
  );
};

export default StopWatch;
