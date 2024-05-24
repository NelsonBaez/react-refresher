import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Modal({children, onClose}) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}/>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
}


export default Modal;