import { Component } from 'react';


class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullUserData: this.props.fullUserData,
      
    };
  }



  render() {
    return (
      <h1>Home</h1>

    );
  }
}

export default DataPage;
