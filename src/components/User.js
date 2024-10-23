import React from "react";

// extends to extend component from React.Component
class User extends React.Component {
  // props should be received in constructor.
  constructor(props) {
    // below line is mandatory for  constructor.
    super(props);
    console.log(this.props.name + "constructor")

    // below code to create state variable.
    this.state = {
      userDetails:{}
    };
  }

 async componentDidMount() {
    // console.log(this.props.name + "componentDidMount")
    const data = await fetch(`https://api.github.com/users/akramap`);
    const json = await data.json();
    this.setState({userDetails: json})
  }
  render() {
    console.log(this.props.name + "render")

    const { location } = this.props;
    const { userDetails } = this.state;
    console.log("use***",this.state)

    return (
      <div className="user-card">
        <h2>Name: {userDetails.login}</h2>
        <h3>Location: {location}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

export default User;
