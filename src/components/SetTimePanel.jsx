// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { MyButton } from "./CustomButtons";

const SetTimePanel = ({
  initialSession,
  initialBreak,
  setInitialTime,
  timerOn,
}) => {
  return (
    <div className="container my-4 set-time-panel text-center">
      {/* Session Length */}
      <div className="row mb-3">
        <div className="col-12">
          <h5 className="fw-bold">Session Length</h5>
        </div>
        <div className="col-4">
          <MyButton
            onClick={() => setInitialTime(true, 1)}
            disabled={timerOn}
            id="session-increment"
          >
            <FontAwesomeIcon icon={faPlus} />
          </MyButton>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <h4 className="m-0">{initialSession}</h4>
        </div>
        <div className="col-4">
          <MyButton
            onClick={() => setInitialTime(true, -1)}
            disabled={timerOn}
            id="session-decrement"
          >
            <FontAwesomeIcon icon={faMinus} />
          </MyButton>
        </div>
      </div>

      {/* Break Length */}
      <div className="row">
        <div className="col-12">
          <h5 className="fw-bold">Break Length</h5>
        </div>
        <div className="col-4">
          <MyButton
            onClick={() => setInitialTime(false, 1)}
            disabled={timerOn}
            id="break-increment"
          >
            <FontAwesomeIcon icon={faPlus} />
          </MyButton>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <h4 className="m-0">{initialBreak}</h4>
        </div>
        <div className="col-4">
          <MyButton
            onClick={() => setInitialTime(false, -1)}
            disabled={timerOn}
            id="break-decrement"
          >
            <FontAwesomeIcon icon={faMinus} />
          </MyButton>
        </div>
      </div>

      {/* Scoped styling */}
      <style>{`
        .set-time-panel h4 {
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .set-time-panel h4 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .set-time-panel h4 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SetTimePanel;

SetTimePanel.propTypes = {
  initialSession: PropTypes.number.isRequired,
  initialBreak: PropTypes.number.isRequired,
  setInitialTime: PropTypes.func.isRequired,
  timerOn: PropTypes.bool.isRequired,
};