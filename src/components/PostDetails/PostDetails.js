import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress, Divider } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

import CommentSection from "./CommentSection";
import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from "./styles";
import "./postDetails.css";

const PostDetails = () => {
	const { post, posts, isLoading } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const classes = useStyles();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getPost(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	useEffect(() => {
		if (post) {
			dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [post])

	if (!post) return null;

	const openPost = (_id) => navigate(`/posts/${_id}`);

	if(isLoading) {
	  return (
		<Paper elevation={6} className={classes.loadingPaper}>
		    <CircularProgress size="7em"/>
		</Paper>
	  );
	}

	const recommendedPosts = posts.filter(({ _id}) => _id !== post._id);

	return (
    <Paper style={{ padding: '20px', borderRadius: '25px' }} className="zIndex" elevation={6}>
      <div className={classes.card}>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          <div className={classes.postLikes}><FavoriteBorderIcon />{post.likes.length} likes</div>
          <Divider style={{ margin: '20px 0' }} />
          </div>
          <div className={classes.section}>
          <div className={classes.postStats}>
          <Typography variant="h6" className={classes.postCreator}>{post.name}</Typography>
          <Typography variant="body1" className={classes.postDate}>{moment(post.createdAt).fromNow()}</Typography>
          </div>
          <Divider style={{ margin: '10px 0' }} />
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2" className={classes.postTags}>{post.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p" className={classes.font}>{post.message}</Typography>
          <CommentSection post={post}/>
        </div>
        </div>
        {recommendedPosts.length && (
        	<div className={classes.section}>
        	   <Typography gutterBottom variant="h5" className={classes.font}>For You</Typography>
        	   <div className={classes.recommendedPosts}>
        	   {recommendedPosts.map(({ name, likes, selectedFile, _id}) => (
                  <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id} className={classes.background}>
                      <Typography className={classes.postCreator}>{name}</Typography>
                      <Typography gutterBottom variant="subtitle2" className={classes.postLikes}><FavoriteBorderIcon />{post.likes.length} likes</Typography>
                      <img className={classes.recommendedImage}src={selectedFile} width="200px" alt={post.title}/>
                  </div>
        	   	))}
        	 </div>
           </div>
        )}
      </Paper>
	);
}

export default PostDetails;