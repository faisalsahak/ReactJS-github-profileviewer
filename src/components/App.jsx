import React, {Component} from 'react';
import Profile from './github/Profile.jsx'

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

  getUserData(){
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData: data})
        console.log(data)
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null})
        alert(err);
      }.bind(this)
    });
  }

  componentDidMount(){
    this.getUserData()
  }

  render(){

    return(
      <div>
        <Profile userdata = {this.state.userData}/>
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
