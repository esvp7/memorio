import React, { useState, useRef } from "react";
import { Typography, TextField, Button} from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { commentPost } from '../../actions/posts';

const CommentSection = ({ post }) => {
	const classes = useStyles();
	const [ comments, setComments ] = useState(post?.comments);
	const [ comment, setComment ] = useState("");
	const user = JSON.parse(localStorage.getItem('profile'));
	const dispatch = useDispatch();
	const commentsRef = useRef();


	const handleClick = async () => {
		const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));

		setComments(newComments);
		setComment('');

		commentsRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
	   <div>
	      <div className={classes.commentsOuterContainer}>
	        <div className={classes.commentsInnerContainer}>
	          {comments?.map((c, i) => (
                 <Typography key={i} gutterBottom variant="subtitle1" className={classes.font}>
                    <strong>{c.split(': ')[0]}</strong>
                    {c.split(':')[1]}
                 </Typography>
                ))}
	          <div ref={commentsRef} />
	        </div>
	        {user?.result?.name && (
	            <div style={{ width: '100%' }}>
                    <TextField fullWidth minRows={4} variant="outlined" label="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                    <br />
                    <Button style={{ marginTop: '15px' }} fullWidth disabled={!comment} color="primary" variant="contained" onClick={handleClick}>
                    Comment
                    </Button>
               </div>
               )}
	      </div>
	   </div>
	);
}

export default CommentSection;