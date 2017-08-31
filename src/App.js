import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'
import Post from './components/Post'
import { Switch, Route }   from 'react-router-dom'
var _ = require("lodash")
class App extends Component {
 constructor() {
      super();
      this.state = { 
        posts: [],
        users:[
          "Waylon Dalton",
          "Justine Henderson",
          "Abdullah Lang",
          "Marcus Cruz",
          "Thalia Cobb",
          "Mathias Little",
          "Eddie Randolph",
          "Angela Walker",
          "Lia Shelton",
          "Hadassah Hartman",
          "Joanna Shaffer"
        ],
        currentPage:1,
        postsPerPage:10,
        totalPages:0
      };
      
      this.handleClick = this.handleClick.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handleFormSubmit(newPost){
    let posts = this.state.posts
    console.log(posts.length);
    newPost["id"] = posts.length + 1;
    posts.push(newPost)
    console.log(posts)
    this.setState({posts})
    
  }

  handlePageChange(right){
      let {posts, currentPage, postsPerPage } = this.state;
      const totalPages = Math.ceil(posts.length/postsPerPage);
       (right) ? currentPage++ : currentPage--;
      if(currentPage >= 1 && currentPage <= totalPages){

        this.setState({
          currentPage: currentPage
        });
      }
  }
  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then(result=>result.json())
      .then(posts=>this.setState({posts:(posts)}))
    let f = this.state.posts
    // _.shuffle()
    // _.shuffle(posts)
  }

  render() {

    const {posts, currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const renderedPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
   

    return (
      <div className="App">
        <div className="App-header">
          <h1>CMS App</h1>
          <Header />
        </div>

        <Switch>
          <Route exact path='/' render={(props) => (
            <Posts postData={renderedPosts} users={this.state.users} currentPage={this.state.currentPage} pageNumbers={pageNumbers} _handlePage={this.handleClick} _handlePageChange={this.handlePageChange}/>
          )}/> 
          <Route exact path='/create' render={(props) => (
            <CreatePost totalPosts={posts.length} handleFormSubmit={this.handleFormSubmit}/>
          )}/> 
          <Route path='/post/:number' render={(props) => (
            <Post data={this.state.posts} propInfo={props}/>
          )}/> 
        </Switch>
        <footer>
          
        </footer>
      </div>
    );
  }
}

export default App;
