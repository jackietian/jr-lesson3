// import React from 'react';

// class SignupForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       username: '',
//       password: '',
//     }
//   }

//   handleUsernameChange = (e) => {
//     const username = e.target.value;
//     this.setState({
//       username, // === username: username
//     })
//   }

//   handlePasswordChange = (e) => {
//     const password = e.target.value;
//     this.setState({
//       password,
//     })
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const values = Array.from(e.target.elements).map(element => element.value);
//     console.log(values);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div>{JSON.stringify(this.state)}</div>
//         <input
//           type="text"
//           placeholder="username"
//           name="username"
//           value={this.state.username}
//           onChange={this.handleUsernameChange} />
//         <input
//           type="password"
//           name="password"
//           placeholder="password"
//           value={this.state.password}
//           onChange={this.handlePasswordChange}
//         />
//         <button type="submit">submit</button>
//       </form>
//     )
//   }
// }

// export default SignupForm;



import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    // this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  // handleOnChangeUsername = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }

  // handleOnChangePassword = (e) => {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }

  handleFormOnChange = (e) => {
    this.setState({
      // dynamic key
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input 
          type="text"
          id="username"
          name="username" 
          value={this.state.username} 
          onChange={this.handleFormOnChange} />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input 
          type="password" 
          id="password"
          name="password" 
          value={this.state.password}
          onChange={this.handleFormOnChange} />
      </div>
      <button type="submit" >Sign up</button>
    </form>)
  }
}

export default SignUpForm

