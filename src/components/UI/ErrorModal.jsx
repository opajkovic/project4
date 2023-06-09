import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    <div className={classes.backdrop} onClick={props.onConfirm} />
  }
  const Overlay = (props) => {
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Cansel</Button>
      </footer>
    </Card>
  }
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById("overlay-root"))}
    </>
  )
}

export default ErrorModal;
