import React from 'react';
import Modal from 'react-modal';

const OptionModal= (props)=>(
   
    <Modal
    //ariaHideApp={false} 
    isOpen={!!props.selectedOption}//require prop for modal
    onRequestClose={props.handelClearSelectedOption}
    contentLabel="Selected Option"// required prop for modal
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick ={props.handelClearSelectedOption}>ok</button>
   
    </Modal>);
export default OptionModal;