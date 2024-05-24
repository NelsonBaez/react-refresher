import PropTypes from 'prop-types';
import classes from './NewPost.module.css';

function NewPost({onBodyChange, onAuthorChange}) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button>Cancel</button>
        <button>submit</button>
      </p>
    </form>
  );
}

NewPost.propTypes = {
  onBodyChange: PropTypes.func.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
}

export default NewPost;