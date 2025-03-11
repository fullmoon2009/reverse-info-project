import React from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

const Modal = ({ onClose, content }) => {
  if (!content) return null;

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <h3>{content.title}</h3>
        <div style={{
            border: "1px solid black", 
            width: "100px", 
            height: "200px",
            position: "absolute",
            top: "70px", }}>
            <img src={content.image} style={{ width: "80%", borderRadius: "10px" }} />
        </div>
        <div style={{
            border: "1px solid black", 
            width: "600px",
            position: "absolute",
            left: "25%",
            top: "70px"}}>
            <p>{content.description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;