import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Modal() {

  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  )
}
Modal.propTypes = {
}


export default Modal;