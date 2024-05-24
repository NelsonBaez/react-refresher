import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Modal() {
  return <>
    <div className={classes.backdrop}/>
    <dialog className={classes.modal}>

    </dialog>
  </>
}

Modal.propTypes = {
}


export default Modal;