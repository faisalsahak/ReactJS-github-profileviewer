import React, {Component} from 'react';
import App from '../App.jsx';

class Search extends Component {

  onChange(e){
    e.preventDefault();
    const search = this.refs.search.value.trim();
    if(!search){
      alert("please enter a username");
      return;
    }

    this.props.onFormSubmit(search)
    console.log(search)
  }

  render(){
    return(
      <div>
        <form onSubmit = {this.onChange.bind(this)}>
          <input ref = "search" type="search" placeholder="Type a Github profile" />
          {/* <App search = {this.refs.search} /> */}
        </form>
      </div>
    )
  }
}

export default Search;
