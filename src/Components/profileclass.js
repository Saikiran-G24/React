import React from "react";
import { Component } from "react";
class ProfileClass extends Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      userInfo: {
        id: "",
        login: "",
        avatar_url: "",
      },
    };
    // console.log(this.props.name + "child-constructor ");
  }
  async componentDidMount() {
    // this.timer=setInterval(()=>{
    //   console.log('Namaste react Op')
    // },1000)
    // console.log('componentDidMount')
    //Api calls
    // const data = await fetch("https://api.github.com/users/Saikiran-G24");
    // const json = await data.json();
    // this.setState({
    //   userInfo: json,
    // });
    // console.log("jsondata is", json);
    // console.log(this.props.name + "child-componentDidMount ");
  }
  componentDidUpdate(prevprops,prevstate) {
    // console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    // console.log("componentWillUnmount");
  }
  render() {
    // console.log(this.props.name + "child-render ");
    return (
      <div>
        <h1>ProfileClass is a "CLASS BASED component".</h1>
        <img src={this.state.userInfo?.avatar_url} />
        <h2>id:{this.state.userInfo?.id}</h2>
        <h2>login:{this.state.userInfo?.login}</h2>
      </div>
    );
  }
}
export default ProfileClass;
