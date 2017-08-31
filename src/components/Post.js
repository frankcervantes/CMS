import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/Post.scss';

const Post = (props) => {
	const postId = props.propInfo.match.params.number;

	const posts = props.data
	const post = posts[postId - 1] 

	return (
		<div className="post">
			<h1>{post.id}</h1>
			<h1>{post.title}</h1>
			<div className="post__meta">
				<span className="post__author">By: {post.userId}</span>
			</div>
			<div className="post__body">
				<p>{post.body}</p>
			</div>
		</div>
	);
};
export default Post;