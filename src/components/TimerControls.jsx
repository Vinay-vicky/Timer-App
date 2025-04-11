// import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { MyButton } from "./CustomButtons";

const TimerControls = ({ timerOn, setTimerOn, handleReset }) => {
  return (
    <div className="d-flex justify-content-center gap-4 my-3 timer-controls">
      <MyButton
        onClick={() => setTimerOn((prev) => !prev)}
        id="pause-play-btn"
      >
        <FontAwesomeIcon
          icon={timerOn ? faCirclePause : faPlayCircle}
          className="icon-responsive"
          id="pause-play-icon"
        />
      </MyButton>

      <MyButton onClick={handleReset} id="reset-btn">
        <FontAwesomeIcon icon={faArrowsRotate} className="icon-responsive" id="reset-icon" />
      </MyButton>

      <style>{`
        .timer-controls {
          flex-wrap: wrap;
        }

        .icon-responsive {
          font-size: 2rem;
        }

        @media (max-width: 768px) {
          .icon-responsive {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .icon-responsive {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TimerControls;

TimerControls.propTypes = {
  timerOn: PropTypes.bool.isRequired,
  setTimerOn: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};


























































// import React from "react";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCirclePause,
//   faPlayCircle,
// } from "@fortawesome/free-regular-svg-icons";
// import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
// import { MyButton } from "./CustomButtons";

// const TimerControls = ({ timerOn, setTimerOn, handleReset }) => {
//   return (
//     <div className="d-flex justify-content-center gap-4 my-3 timer-controls">
//       <MyButton
//         onClick={() => setTimerOn((prev) => !prev)}
//         id="pause-play-btn"
//       >
//         <FontAwesomeIcon
//           icon={timerOn ? faCirclePause : faPlayCircle}
//           size="lg"
//           id="pause-play-icon"
//         />
//       </MyButton>

//       <MyButton onClick={handleReset} id="reset-btn">
//         <FontAwesomeIcon icon={faArrowsRotate} size="lg" id="reset-icon" />
//       </MyButton>

//       <style>{`
//         .timer-controls {
//           flex-wrap: wrap;
//         }

//         @media (max-width: 480px) {
//           .timer-controls {
//             gap: 2rem;
//           }

//           #pause-play-icon,
//           #reset-icon {
//             font-size: 1.25rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TimerControls;

// TimerControls.propTypes = {
//   timerOn: PropTypes.bool.isRequired,
//   setTimerOn: PropTypes.func.isRequired,
//   handleReset: PropTypes.func.isRequired,
// };