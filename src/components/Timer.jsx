import PropTypes from "prop-types";
import { getTotalSeconds } from "./utils/utilities";

const Timer = ({
  sessionTime,
  breakTime,
  initialSession,
  initialBreak,
  isBreakTime,
}) => {
  const isBreakTimeLow = getTotalSeconds(breakTime) < 60;
  const isSessionTimeLow = getTotalSeconds(sessionTime) < 60;

  const total = getTotalSeconds(isBreakTime ? initialBreak : initialSession);
  const current = getTotalSeconds(isBreakTime ? breakTime : sessionTime);
  const percentage = (current * 100) / total;

  return (
    <div className="d-flex flex-column align-items-center my-4 pt-4 timer-container">
      <div className="progress-circle mb-3">
        <svg viewBox="0 0 300 300" className="circle-svg">
          <circle
            cx="150"
            cy="150"
            r="140"
            stroke="#e6e6e6"
            strokeWidth="15"
            fill="none"
          />
          <circle
            cx="150"
            cy="150"
            r="140"
            stroke="#0d6efd"
            strokeWidth="15"
            fill="none"
            strokeDasharray={2 * Math.PI * 140}
            strokeDashoffset={
              ((100 - percentage) / 100) * 2 * Math.PI * 140
            }
            transform="rotate(-90 150 150)"
          />
        </svg>

        {/* ⬇️ Text inside the circle */}
        <div className="circle-text text-center">
          <h5 className="mb-1">{isBreakTime ? "Break" : "Session"}</h5>
          <h3
            className={`fw-normal m-0 ${
              (isBreakTime && isBreakTimeLow) ||
              (!isBreakTime && isSessionTimeLow)
                ? "text-danger flashing"
                : ""
            }`}
          >
            {isBreakTime ? breakTime : sessionTime}
          </h3>
        </div>
      </div>

      <style>{`
        .timer-container {
          padding-top: 20px;
        }

        .progress-circle {
          position: relative;
          width: 100%;
          max-width: 300px;
          aspect-ratio: 1 / 1;
        }

        .circle-svg {
          width: 100%;
          height: 100%;
        }

        .circle-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .flashing {
          animation: flash 1s infinite;
        }

        @keyframes flash {
          0% { opacity: 1; }
          50% { opacity: 0.2; }
          100% { opacity: 1; }
        }

        @media (max-width: 480px) {
          .circle-text h3 {
            font-size: 1.6rem;
          }

          .circle-text h5 {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Timer;

Timer.propTypes = {
  sessionTime: PropTypes.string.isRequired,
  breakTime: PropTypes.string.isRequired,
  initialSession: PropTypes.string.isRequired,
  initialBreak: PropTypes.string.isRequired,
  isBreakTime: PropTypes.bool.isRequired,
};



























































// import PropTypes from "prop-types";
// import { getTotalSeconds } from "./utils/utilities";

// const Timer = ({
//   sessionTime,
//   breakTime,
//   initialSession,
//   initialBreak,
//   isBreakTime,
// }) => {
//   const isBreakTimeLow = getTotalSeconds(breakTime) < 60;
//   const isSessionTimeLow = getTotalSeconds(sessionTime) < 60;

//   const total = getTotalSeconds(isBreakTime ? initialBreak : initialSession);
//   const current = getTotalSeconds(isBreakTime ? breakTime : sessionTime);
//   const percentage = (current * 100) / total;

//   return (
//     <div className="d-flex flex-column align-items-center my-4 pt-4 timer-container">
//       <div className="progress-circle mb-3">
//         <svg width="300" height="300">
//           <circle
//             cx="150"
//             cy="150"
//             r="140"
//             stroke="#e6e6e6"
//             strokeWidth="15"
//             fill="none"
//           />
//           <circle
//             cx="150"
//             cy="150"
//             r="140"
//             stroke="#0d6efd"
//             strokeWidth="15"
//             fill="none"
//             strokeDasharray={2 * Math.PI * 140}
//             strokeDashoffset={
//               ((100 - percentage) / 100) * 2 * Math.PI * 140
//             }
//             transform="rotate(-90 150 150)"
//           />
//         </svg>

//         {/* ⬇️ Text inside the circle */}
//         <div className="circle-text text-center">
//           <h5 className="mb-1">{isBreakTime ? "Break" : "Session"}</h5>
//           <h3
//             className={`fw-normal m-0 ${
//               (isBreakTime && isBreakTimeLow) ||
//               (!isBreakTime && isSessionTimeLow)
//                 ? "text-danger flashing"
//                 : ""
//             }`}
//           >
//             {isBreakTime ? breakTime : sessionTime}
//           </h3>
//         </div>
//       </div>

//       <style>{`
//         .timer-container {
//           padding-top: 20px;
//         }

//         .progress-circle {
//           position: relative;
//           width: 300px;
//           height: 300px;
//         }

//         .progress-circle svg {
//           position: relative;
//           z-index: 1;
//         }

//         .circle-text {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           z-index: 2;
//         }

//         .flashing {
//           animation: flash 1s infinite;
//         }

//         @keyframes flash {
//           0% { opacity: 1; }
//           50% { opacity: 0.2; }
//           100% { opacity: 1; }
//         }

//         @media (max-width: 768px) {
//           .progress-circle {
//             width: 220px;
//             height: 220px;
//           }

//           .progress-circle svg {
//             width: 220px;
//             height: 220px;
//           }

//           .circle-text h3 {
//             font-size: 1.8rem;
//           }

//           .circle-text h5 {
//             font-size: 1.1rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .circle-text h3 {
//             font-size: 1.6rem;
//           }

//           .circle-text h5 {
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Timer;

// Timer.propTypes = {
//   sessionTime: PropTypes.string.isRequired,
//   breakTime: PropTypes.string.isRequired,
//   initialSession: PropTypes.string.isRequired,
//   initialBreak: PropTypes.string.isRequired,
//   isBreakTime: PropTypes.bool.isRequired,
// };