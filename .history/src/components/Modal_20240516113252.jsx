import PropTypes from 'prop-types';
import classes from './Modal.module.css';

function Modal({children}) {
  return (<>
    <div className={classes.backdrop}/>
    <dialog className={classes.modal}>
      {children}
    </dialog>
  </>)
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
}


export default Modal;