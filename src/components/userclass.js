import React from "react";
import BaseUrls from "../../ultis/BaseUrls";
import UserChildClass from "./Userchildclass";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Parent Constructor");
    super();

    this.state = {
      buttonName: "Register",
      registered: "false",
      count: 0,
      login: "Sample",
      avatar_url: "",
      repos_url: "",
      count1: 0,
    };
  }

  fetchGITRepoList = async () => {
    const data = await fetch(BaseUrls.GitHub_Url);
    const gitFetch = await data.json();
    this.setState({
      login: gitFetch.login,
      avatar_url: gitFetch.avatar_url,
      repos_url: gitFetch.repos_url,
    });
  };

  render() {
    // console.log("Parent render called");
    return (
      <div>
        <div className="rest-menu-list-cont git-menu-list-cont">
          <h2>{this.props.name}</h2>
          <h4>{this.props.email}</h4>
          <h4>{this.props.id}</h4>
          <p>
            {!this.state.registered
              ? "Please Register"
              : "Registration successful"}
          </p>
          <button
            onClick={() => {
              if (this.state.registered) {
                this.setState({
                  buttonName: "Register",
                  registered: false,
                });
              } else {
                this.setState({
                  buttonName: "UnRegister",
                  registered: true,
                });
              }
            }}
          >
            {this.state.buttonName}
          </button>
          <div className="details-cont">
            <div>
              <h1>Git details in class based component</h1>
              <h3>{`Name - ${this.state.login}`}</h3>
              <h4>{`Git URL - ${this.state.repos_url}`}</h4>
            </div>
            <img src={this.state.avatar_url} width="100" height="100" />
          </div>
          <div className="btn-cont">
            <button
              className="btn-1"
              onClick={() => {
                this.setState({
                  count: this.state.count - 1,
                });
              }}
            >
              -
            </button>
            <p>Count - {this.state.count}</p>
            <button
              className="btn-1"
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                });
              }}
            >
              +
            </button>
          </div>

          <div className="btn-cont">
            <button
              className="btn-1"
              onClick={() => {
                this.setState({
                  count1: this.state.count1 - 1,
                });
              }}
            >
              -
            </button>
            <p>Count1 - {this.state.count1}</p>
            <button
              className="btn-1"
              onClick={() => {
                this.setState({
                  count1: this.state.count1 + 1,
                });
              }}
            >
              +
            </button>
          </div>
        </div>
        <UserChildClass name="child"></UserChildClass>
      </div>
    );
  }

  componentDidMount() {
    // console.log("Parent Component mount called");
    this.fetchGITRepoList();

    this.timer = setInterval(() => {
      console.log("set interval called for class based component");
    }, 1000);
  }

  componentDidUpdate(prevProp, prevState) {
    // console.log("Parent - component did update");
    console.log(prevProp, prevState);

    if (prevState.count !== this.state.count) {
      console.log("Count updated");
    }

    if (prevState.count1 !== this.state.count1) {
      console.log("Count1 updated");
    }
  }

  componentWillUnmount() {
    // console.log("Parent  - component will unmount");
    clearInterval(this.timer);
  }
}

export default UserClass;
