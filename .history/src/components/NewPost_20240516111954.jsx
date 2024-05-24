import PropTypes from 'prop-types';
import classes from './NewPost.module.css';

function NewPost({onBodyChange}) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>{body}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

NewPost.propTypes = {
  onBodyChange: PropTypes.func.isRequired
}

export default NewPost;