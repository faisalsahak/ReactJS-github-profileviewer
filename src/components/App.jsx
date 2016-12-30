import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'faisalsahak',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  render(){

    return(
      <div>
        {this.state.username}
      </div>
    )
  }
}
App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}
App.defaultProps = {
  clientId: '6530738d3152c01c348c',
  clientSecret: 'b7783110b09f80651e1a349038b709a61071dc5c'
}

export default App
