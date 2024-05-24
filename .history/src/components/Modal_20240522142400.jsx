import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal({children}) {
  const navigate = useNavigate()
  function closeHandler() {
    navigate('/');
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}/>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
}


export default Modal;