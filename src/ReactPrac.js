// import React from 'react';

// export default class ControlledInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {userInput: ''};
//     this.updateInput = this.updateInput.bind(this)
//   }

//   updateInput(event) {
//   	this.setState({
//   		userInput: event.target.value
//   	})
//   } 

//   render() {
//     return (
//       <div> 
//         <input type="text" value={this.state.userInput} onChange={this.updateInput}/>
//         <p>{this.state.userInput}</p>
//       </div>
//     );
//   }
// }














// export default class UnControlledInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.input = React.createRef()
//     this.pelement = React.createRef()
//     this.updateInput = this.updateInput.bind(this)
//   }

//   updateInput(event) {
//     this.pelement.current.innerHTML = this.input.current.value
//   } 

//   render() {
//     return (
//       <div> 
//         <input type="text" ref={this.input} onChange={this.updateInput}/>
//         <p ref={this.pelement}></p>
//       </div>
//     );
//   }
// }


