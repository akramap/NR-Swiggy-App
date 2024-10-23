import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
    this.timer = setInterval(() => {
      console.log("interval after every 1s");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      // useEffect with count variable as 2nd parameter
    }
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
    // called when page changes
    clearInterval(this.timer);
  }

  render() {
    console.log("Parent render");
    return (
      <>
        <h1>This is my About Page</h1>
        {/* <User name='Akram' location='Bangalore'/> */}
      </>
    );
  }
}

export default About;
