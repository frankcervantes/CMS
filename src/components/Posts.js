import React, { Component } from 'react';
import { Link, Route }   from 'react-router-dom'
import Pagination from './Pagination'
import '../styles/Posts.scss';

class Posts extends Component {
  render() {
  	const postData = this.props.postData
  	const user = this.props.users
    return (
		<div className="posts">
			<Pagination {...this.props}/>
			{postData.map(post=>
				<div className="post" key={post.id}>
					<h3 className="post__title"><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
					<div className="post__meta">
						<span className="post__id">{post.id} &#9679; </span>
						<span className="post__author">{user[post.userId]}</span>
					</div>
				</div>
			)}
			
		</div>
    );
  }
      	// <div className="post__body">{post.body}</div>

}


export default Posts;
