import React, { Component } from 'react';

import '../styles/CreatePost.scss';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete:false,
      missingFields:[],
      fields:{
        title:"",
        userId:"",
        body:""
      }
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(event) {
    let fields = this.state.fields
    fields[event.target.name] = event.target.value
    this.setState({fields});
  }

  handleSubmit(event) {
    const missingFields = []
    let fields = this.state.fields
    Object.keys(fields).map(i => {
      if(fields[i] == ""){missingFields.push(i)}
    })

    if(missingFields.length){
      this.setState({
        missingFields,
        complete:false
      })
      console.log(missingFields)
    }
    else{
      this.setState({
        "title": "",
        "userId": "",
        "body": ""
      });
      this.props.handleFormSubmit(this.state.fields)
      console.log("processed")
    }
    event.preventDefault();

    
  }

  render() {
    let state = this.state
    return (
      <form onSubmit={this.handleSubmit} className="form">
      	<h1>{this.state.title}</h1>
        <label className="form__inputContainer">
          <p className="form__inputContainer__inputTitle">Title</p>
          <input type="text" name="title" value={this.state.fields.title || ''} onChange={this.handleChange} />
        </label>
        <label className="form__inputContainer">
          <p className="form__inputContainer__inputTitle">Author</p>
          <input type="number" name="userId" value={this.state.fields.userId || ''} onChange={this.handleChange} />
        </label>
        <label className="form__inputContainer">
          <p className="form__inputContainer__inputTitle">Body</p>
          <textarea type="text" name="body" value={this.state.fields.body || ''} onChange={this.handleChange} />
        </label>
        <input className='button dark center' type="submit" value="Submit" />
        
      </form>
    );
  }
}
export default CreatePost;
