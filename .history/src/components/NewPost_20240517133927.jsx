import PropTypes from 'prop-types';
import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({onCancel, onAddPost}) {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const bodyChangeHandler = e => setBody(e.target.value);

  const authorChangeHandler = e => setAuthor(e.target.value);

  const submitHandler = e => {
    e.preventDefault();
    const postData = {
      body:body,
      author:author
    }
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

NewPost.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAddPost: PropTypes.func.isRequired,
}

export default NewPost;