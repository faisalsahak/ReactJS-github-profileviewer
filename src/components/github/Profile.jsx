import React, {Component} from 'react';

class Profile extends Component {

  render(){

    return(
      <div>
        <div className="panel panel-default">
         <div className="panel-heading">
           <h3 className="panel-title">{this.props.userdata.name}</h3>
         </div>
         <div className="panel-body">
           <div className = "row">
             <div className ="col-md-4">
               <img src = {this.props.userdata.avatar_url} className= "thumbnail" style= {{width: '100%'}}  />
             </div>
             <div className= 'col-md-8'>
               <div className= "row">
                 <div className = 'col-md-12'>
                   <span className = "label label-primary">{this.props.userdata.public_repos} Repos</span>
                   <span className = "label label-success">{this.props.userdata.public_gists} Public</span>
                   <span className = "label label-info">{this.props.userdata.followers} Followers</span>
                   <span className = "label label-danger">{this.props.userdata.following} Following</span>
                 </div>
               </div>
               <hr/>
               <div className= "row">
                 <div className= "col-md-12">
                   <ul className= "list-group">
                     <li className= "list-group-item"><strong>Username: </strong> {this.props.userdata.login}</li>
                     <li className= "list-group-item"><strong>Location: </strong> {this.props.userdata.location}</li>
                     <li className= "list-group-item"><strong>Email Address: </strong> {this.props.userdata.email}</li>
                   </ul>
                 </div>
               </div>
               <br />
               <a className= "btn btn-primary" target= '_blank' href= {this.props.userdata.html_url}>Visit Profile</a>
             </div>
           </div>
         </div>
        </div>
      </div>
    )
  }
}

export default Profile
