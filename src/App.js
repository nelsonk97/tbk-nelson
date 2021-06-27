import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import asset_1 from "./img/Asset 1.png";
import asset_2 from "./img/Asset 2.png";
import asset_3 from "./img/Asset 3.png";
import asset_4 from "./img/Asset 4.png";

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="app">
      <div className="container">
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal
          dialogClassName="modal-90w"
          show={show}
          onHide={handleClose}
          centered
        >
          <img className="img-1" src={asset_1} alt="Asset 1" />
          <img className="img-2" src={asset_2} alt="Asset 2" />
          <img className="img-3" src={asset_3} alt="Asset 3" />
          <img className="img-4" src={asset_4} alt="Asset 4" />
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="modal-main text-center" tabindex="-1">
              <p className="small-text">You are cordially invited</p>
              <p className="small-text">to the launch</p>

              <p className="script-text">of the</p>

              <div className="modal-company-name">
                <p className="large-text">New</p>
                <p className="large-text">Company</p>
                <p className="large-text">Website</p>
              </div>

              <p className="main-text">
                Lorem ipsum dolor sit amet, vix suas liber conclusionemque eu.
                Ad quo esse purto eros, nemore volutpat ut quo, copiosae
                concludaturque nam in.
              </p>

              <hr></hr>

              <p className="small-text">Ad est odio noster:</p>
              <ul className="text-left">
                <li>Ex vis amet graeci accumsan</li>
                <li>Civibus iracundia quo ad</li>
                <li>Eu impetus feugiat civibus qui</li>
                <li>Mel in mucius argumentum, an accumsan petentium vim</li>
                <li>Vim at rationibus interesset</li>
              </ul>
            </div>
          </Modal.Body>
          <Modal.Footer centered>
            <div className="footer-text text-center">
              <h2>Get your foot in the door.</h2>
              <h5>Know the moment our new website goes live.</h5>
            </div>
            <div className="footer-inputs">
              <input
                class="form-control"
                type="text"
                name=""
                placeholder="Name"
                autoFocus
              />
              <input class="form-control" type="text" placeholder="Email" />
              <button className="custom-btn">Submit</button>
            </div>
            <div className="footer-detail">
              <Form.Check
                className="footer-check"
                type="checkbox"
                label="Lorem ipsum dolor sit amet, consectetuer adipiscing eli. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede."
              />
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default App;
