import { useEffect, useRef, useState } from "react";

// const activeStyle = {
//   backgroundColor: "orange",
//   boxShadow: "0 3px orange",
//   height: 77,
//   marginTop: 13,
// };
// const activeStyle = "h-[77px] bg-[#F34135] shadow-[0px_3px_rgba(243,65,53,1)]";

// const inactiveStyle = { backgroundColor: "grey", marginTop: 10, boxShadow: "3px 3px 5px black" };
// const inactiveStyle = "h-20 bg-[grey] shadow-[3px_3px_5px_rgba(0,0,0,1)]";

const DrumPad = ({
  keyCode,
  power,
  keyTrigger,
  updateDisplay,
  clipId,
  clip,
  padColor,
  shadowColor,
}) => {
  const activeStyle = `h-[77px] ${padColor} ${shadowColor}`;
  const inactiveStyle = "h-20 bg-[grey] shadow-[3px_3px_5px_rgba(0,0,0,1)]";
  const [padStyle, setPadStyle] = useState(inactiveStyle);

  const prevCountRef = useRef();
  prevCountRef.current = padStyle;

  function handleKeyPress(e) {
    if (e.keyCode === keyCode) playSound();
  }

  function activatePad() {
    // const drumPads = document.querySelectorAll(".drum-pad");
    // console.log(drumPad.classList.contains("bg-[#F34135]"));

    if (power) {
      if (prevCountRef.current.includes(padColor)) {
        setPadStyle(inactiveStyle);
      } else {
        setPadStyle(activeStyle);
      }
    } else if (prevCountRef.current.marginTop === 13) {
      setPadStyle(inactiveStyle);
    } else {
      setPadStyle({ height: 77, marginTop: 13, backgroundColor: "grey", boxShadow: "0 3px grey" });
    }
  }

  function playSound() {
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
    prevCountRef.current = padStyle;

    activatePad();

    setTimeout(() => {
      activatePad();
    }, 100);

    updateDisplay(clipId.replace(/-/g, " "));
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div
      className={`w-20 text-center leading-[80px] font-bold rounded-md cursor-pointer ${padStyle} drum-pad`}
      id={clipId}
      onClick={playSound}
    >
      <audio className="clip" id={keyTrigger} src={clip} />
      {keyTrigger}
    </div>
  );
};

export default DrumPad;
