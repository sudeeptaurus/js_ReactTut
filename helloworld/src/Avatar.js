import React, { Component } from "react";
import "./Avatar.css";
import "tachyons";
import Avatarlist from "./Avatarlist";

// const Avatar = () => {
//   return (
//     <div className="avatarstyle ma4 bg-light-purple dib">
//       <img src="https://joeschmoe.io/api/v1/sudeep" alt="Avatar" />
//       <h1 className="">Sudeep Mohan</h1>
//       <p>Web Developer</p>
//     </div>
//   );
// };

// const Avatar = (props) => {

class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome To Avatar India",
    };
  }

  namechange() {
    this.setState({
      name: "Subscribe to My Channel",
    });
  }

  render() {
    const avatarlistarray = [
      {
        id: 1,
        name: "MCX",
        work: "Aspiring Web Developer",
      },
      {
        id: 2,
        name: "Sudeep",
        work: "Aspiring Python Programmer",
      },
      {
        id: 3,
        name: "Nair",
        work: "Aspiring Full Stack Developer",
      },
      {
        id: 4,
        name: "Mohan",
        work: "Aspiring Data Scientist",
      },
    ];

    const avatarlistcard = avatarlistarray.map((avatarcard, i) => {
      return (
        <Avatarlist
          key={i}
          id={avatarlistarray[i].id}
          name={avatarlistarray[i].name}
          work={avatarlistarray[i].work}
        />
      );
    });

    return (
      <div className="ma4 dib mainpage ">
        <h1 className="tc"> {this.state.name} </h1>
        {avatarlistcard}
        <button onClick={() => this.namechange()} className="ma4 dib">
          {" "}
          Subscribe{" "}
        </button>
      </div>
    );
  }
}

//   const avatarlistarray = [
//     {
//       id: 1,
//       name: "MCX",
//       work: "Aspiring Web Developer",
//     },
//     {
//       id: 2,
//       name: "Sudeep",
//       work: "Aspiring Python Programmer",
//     },
//     {
//       id: 3,
//       name: "Nair",
//       work: "Aspiring Full Stack Developer",
//     },
//     {
//       id: 4,
//       name: "Mohan",
//       work: "Aspiring Data Scientist",
//     },
//   ];

//   const avatarlistcard = avatarlistarray.map((avatarcard, i) => {
//     return (
//       <Avatarlist id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
//     );
//   });

//   return (
//     <div className="ma4 dib mainpage ">
//       <h1 className="tc">Welcome To Avatar World</h1>
//       {avatarlistcard}
//       <button className="ma4 dib"> Subscribe </button>
//     </div>
//     );
// };

export default Avatar;
