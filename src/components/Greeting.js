// // import React from 'react';

// // class Greeting extends React.Component {
// //   constructor() {
// //     // Unlike base class constructors, derived constructors have no initial this binding
// //     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// //     super()
// //     this.handleGreeting = this.handleGreeting.bind(this);
// //   }

// //   handleGreeting () {
// //     alert('Welcome');
// //   }

// //   render() {
// //     return (<button onClick={this.handleGreeting}>Greeting</button>)
// //   }
// // }

// // export default Greeting;



// import React from 'react'

// class Greeting extends React.Component {
//   constructor() {
//     super()
//   }

//   sayHello(arg = '') {
//     alert(`hello ${arg}`)
//   }

//   render() {
//     return <button onClick={() => this.sayHello('123')}>Greeting</button>
//   }
// }

// export default Greeting


// import React from 'react'
// class Greeting extends React.Component {
//   clickHandler = (e) => {
//     console.log('click me clicked', e.target.name)
//   }

//   render() {
//     return <button name="btn" onClick={this.clickHandler}>click me</button>
//   }
// }

// export default Greeting





import React from 'react'

// class Greeting extends React.Component {
//   handleClick() {
//     alert('test')
//   }

//   handleClickV2 = () => {
//     alert('test')
//   }

//   render() {
//     return <button onClick={this.handleClick}>button</button>
//   }
// }

const Greeting = () => {
  const handleClick = () => {
    alert('test')
  }
  return <button onClick={handleClick}>button</button>
}

export default Greeting





















