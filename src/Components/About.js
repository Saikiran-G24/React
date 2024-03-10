import { Outlet } from "react-router-dom";
import ProfileClass from "./profileclass";
import React from "react";
import Profile from "./Profile";
import Usercontext from "../utils/UserContext"

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log('parent-Constructor')
  }
  async componentDidMount() {
    // console.log('parent-ComponentDidMount')
  }
 
  render() {
    // console.log('parent-render')
    return (
      <div>
        <h1>This is About page</h1>
        <p> About component is classbased</p>
        <Usercontext.Consumer>
    {value=>console.log('value is',value)}
  </Usercontext.Consumer>
        <Profile name={"first "} />
        <Outlet />
      </div>
    );
  }
}
export default About;
