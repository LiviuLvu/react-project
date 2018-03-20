import React from 'react';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function AppConditional(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default AppConditional;

// import React, { Component } from 'react';

// export class AppConditional extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: true
//     }
//   }

//   UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
//   }
//   GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
//   }
//   render() {
//     if(this.state.isLoggedIn) {
//       return( this.UserGreeting )
//     }
//     else return( this.GuestGreeting )
//   }
// }

