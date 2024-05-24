import PropTypes from 'prop-types';
import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({onBodyChange, onAuthorChange, onCancel}) {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const bodyChangeHandler = e => setBody(e.target.value);

  const authorChangeHandler = e => setAuthor(e.target.value);

  return (
    <form className={classes.form} onSubmit={onBodyChange}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

NewPost.propTypes = {
  onBodyChange: PropTypes.func.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default NewPost;