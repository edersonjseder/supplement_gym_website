import { RiTruckFill } from "react-icons/ri";
import { useState } from "react";
import "./CalculateDeliveryModal.css";

const initialState = {
  zipCode: "",
};

const CalculateDeliveryModal = (props) => {
  const [formData, setFormData] = useState(initialState);
  const { zipCode } = formData;

  if (!props.show) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    console.log("formData ", formData);
  };

  return (
    <div className="overlay-calc-modal">
      <div className="modal-calc-container">
        <div className="modalRight">
          <div className="modal-calc-title">
            <h3>Available Delivery Prices:</h3>
            <p onClick={props.handleClose} className="closeButton">
              X
            </p>
          </div>
          <div className="modalContent">
            <form onSubmit={login}>
              <div className="modal-body">
                <div className="modal-address-content">
                  <label className="form-label">
                    Delivery price for{" "}
                    <span className="delivery-location">Alvorada</span>
                  </label>
                  <div className="address-content">
                    <input
                      type="email"
                      name="email"
                      value={zipCode}
                      onChange={handleInputChange}
                      autoFocus
                    />
                    <button type="submit" className="btn-modal">
                      <RiTruckFill className="icon-calc-delivery" />
                      Calculate
                    </button>
                  </div>
                </div>
                <div className="footer-calc-modal">
                  <button
                    type="submit"
                    className="btn-modal-close"
                    onClick={props.handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateDeliveryModal;
