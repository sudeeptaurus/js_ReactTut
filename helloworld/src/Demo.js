import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

// class Demo extends Component{
//     render(){
//         return <div className="maindiv_style">
//             <h1> Hello {this.props.name} </h1>
//             <p>Welcome to Hello World Program......</p>
//         </div>
//     }
// }

// const Demo = (props) => {
const Demo = ({name}) => {
    return <div className="maindiv_style">
            {/* <h1> Hello {props.name} </h1> */}
            <h1> Hello {name} </h1>
            <p>Welcome to Hello World Program......</p>
        </div>
}

export default Demo;

// props get passed to the components
// props are immutable (cannot be changed/modified)
// props - functional components
// this.prop - class components
