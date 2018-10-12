// import React, { Component } from 'react';

// // import Nav from './Nav';
// // import MobileNav from './/MobileNav';
// // import NavClose from './NavClose';


// class Menu extends Component {
//   state = {
//     navOpen: false
//   };

//   navToggleClickHandler = () => {
//     this.setState((prevState) => {
//       return {navOpen: !prevState.navOpen};
//     });
//   };

//   closeClickHandler = () => {
//     this.setState({navOpen: false});
//   };

//   render() {
//     let navClose;

//     if (this.state.navOpen) {
//       navClose = <NavClose click={this.closeClickHandler} />
//     }
//     return (
//       <div>
//         <Nav navClickHandler={this.navToggleClickHandler} />
//         <MobileNav show={this.state.navOpen}  click={this.closeClickHandler} />
//         {navClose}
//         <main style={{marginTop: '100px'}}>
//         </main>
//       </div>
//     );
//   }
// }

// export default Menu;