import { useState, useEffect } from "react";
import Timer from "./components/Timer";
import TimerControls from "./components/TimerControls";
import SetTimePanel from "./components/SetTimePanel";
import { decrementTime, getNewInitialTime } from "./components/Utilities";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Timer States
  const [initialSession, setInitialSession] = useState("25:00");
  const [sessionTime, setSessionTime] = useState(initialSession);
  const [initialBreak, setInitialBreak] = useState("05:00");
  const [breakTime, setBreakTime] = useState(initialBreak);
  const [timerOn, setTimerOn] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);

  // PWA Install Prompt States
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  // Timer Countdown Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerOn) {
        isBreakTime
          ? setBreakTime((prev) => decrementTime(prev))
          : setSessionTime((prev) => decrementTime(prev));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isBreakTime, timerOn]);

  // Timer End Logic
  useEffect(() => {
    if (sessionTime === "00:00") {
      const audio = new Audio(
        "https://github.com/AyaanDanish/ClockApp-React/raw/main/src/audio/Timer.mp3"
      );
      audio.play();
      setIsBreakTime(true);
      setSessionTime("00:01");
    }

    if (breakTime === "00:00") {
      const audio = new Audio(
        "https://github.com/AyaanDanish/ClockApp-React/raw/main/src/audio/Timer.mp3"
      );
      audio.play();
      handleReset();
    }
  }, [sessionTime, breakTime]);

  // PWA Install Prompt Setup
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("App installed");
        } else {
          console.log("App installation rejected");
        }
        setDeferredPrompt(null);
        setShowInstallBtn(false);
      });
    }
  };

  // Time Adjustment
  const setInitialTime = (forSession, change) => {
    const update = (prev) => getNewInitialTime(prev, change);
    if (forSession) {
      setInitialSession(update);
      setSessionTime(update);
    } else {
      setInitialBreak(update);
      setBreakTime(update);
    }
  };

  // Reset Handler
  const handleReset = () => {
    setTimerOn(false);
    setIsBreakTime(false);
    setSessionTime(initialSession);
    setBreakTime(initialBreak);
  };

  return (
    <div className="container py-4 app-wrapper" id="app-container">
      <main className="pt-5 mt-4">
        {/* Timer */}
        <div className="d-flex justify-content-center my-4">
          <Timer
            initialSession={initialSession}
            initialBreak={initialBreak}
            sessionTime={sessionTime}
            breakTime={breakTime}
            setTimerOn={setTimerOn}
            isBreakTime={isBreakTime}
          />
        </div>

        {/* Controls */}
        <TimerControls
          timerOn={timerOn}
          setTimerOn={setTimerOn}
          handleReset={handleReset}
        />

        {/* Session & Break Lengths */}
        <SetTimePanel
          initialSession={initialSession}
          initialBreak={initialBreak}
          setInitialTime={setInitialTime}
          timerOn={timerOn}
        />

        {/* PWA Install Button */}
        {showInstallBtn && (
          <div className="text-center mt-4">
            <button className="btn btn-success" onClick={handleInstallClick}>
              Install App
            </button>
          </div>
        )}
      </main>

      <style>{`
        .app-wrapper {
          max-width: 900px;
          margin: auto;
        }

        @media (max-width: 768px) {
          .app-wrapper {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .app-wrapper {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default App;



























































// import { useState, useEffect } from "react";
// import Timer from "./components/Timer";
// import TimerControls from "./components/TimerControls";
// import SetTimePanel from "./components/SetTimePanel";
// import { decrementTime, getNewInitialTime } from "./components/Utilities";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [initialSession, setInitialSession] = useState("25:00");
//   const [sessionTime, setSessionTime] = useState(initialSession);
//   const [initialBreak, setInitialBreak] = useState("05:00");
//   const [breakTime, setBreakTime] = useState(initialBreak);
//   const [timerOn, setTimerOn] = useState(false);
//   const [isBreakTime, setIsBreakTime] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (timerOn) {
//         isBreakTime
//           ? setBreakTime((prev) => decrementTime(prev))
//           : setSessionTime((prev) => decrementTime(prev));
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [isBreakTime, timerOn]);

//   useEffect(() => {
//     if (sessionTime === "00:00") {
//       const audio = new Audio(
//         "https://github.com/AyaanDanish/ClockApp-React/raw/main/src/audio/Timer.mp3"
//       );
//       audio.play();
//       setIsBreakTime(true);
//       setSessionTime("00:01");
//     }

//     if (breakTime === "00:00") {
//       const audio = new Audio(
//         "https://github.com/AyaanDanish/ClockApp-React/raw/main/src/audio/Timer.mp3"
//       );
//       audio.play();
//       handleReset();
//     }
//   }, [sessionTime, breakTime]);

//   const setInitialTime = (forSession, change) => {
//     const update = (prev) => getNewInitialTime(prev, change);
//     if (forSession) {
//       setInitialSession(update);
//       setSessionTime(update);
//     } else {
//       setInitialBreak(update);
//       setBreakTime(update);
//     }
//   };

//   const handleReset = () => {
//     setTimerOn(false);
//     setIsBreakTime(false);
//     setSessionTime(initialSession);
//     setBreakTime(initialBreak);
//   };

//   return (
//     <div className="container py-4 app-wrapper" id="app-container">
//       <main className="pt-5 mt-4">
//         {/* Timer */}
//         <div className="d-flex justify-content-center my-4">
//           <Timer
//             initialSession={initialSession}
//             initialBreak={initialBreak}
//             sessionTime={sessionTime}
//             breakTime={breakTime}
//             setTimerOn={setTimerOn}
//             isBreakTime={isBreakTime}
//           />
//         </div>

//         {/* Controls */}
//         <TimerControls
//           timerOn={timerOn}
//           setTimerOn={setTimerOn}
//           handleReset={handleReset}
//         />

//         {/* Session & Break Lengths */}
//         <SetTimePanel
//           initialSession={initialSession}
//           initialBreak={initialBreak}
//           setInitialTime={setInitialTime}
//           timerOn={timerOn}
//         />
//       </main>

//       <style>{`
//         .app-wrapper {
//           max-width: 900px;
//           margin: auto;
//         }

//         @media (max-width: 768px) {
//           .app-wrapper {
//             padding: 1rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .app-wrapper {
//             padding: 0.5rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default App;