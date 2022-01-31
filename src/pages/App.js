import { useState } from "react";
import PadBank from "../components/PadBank";
// import "./App.scss";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    padColor: "bg-[#F34135]",
    shadowColor: "shadow-[0px_3px_rgba(243,65,53,1)]",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    padColor: "bg-[#FF9700]",
    shadowColor: "shadow-[0px_3px_rgba(255,151,0,1)]",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    padColor: "bg-[#FEEA3B]",
    shadowColor: "shadow-[0px_3px_rgba(254,234,59,1)]",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    padColor: "bg-[#9B27B0]",
    shadowColor: "shadow-[0px_3px_rgba(155,39,176,1)]",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    padColor: "bg-[#2CC26B]",
    shadowColor: "shadow-[0px_3px_rgba(44,194,107,1)]",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    padColor: "bg-[#8AC149]",
    shadowColor: "shadow-[0px_3px_rgba(138,193,73,1)]",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    padColor: "bg-[#3E50B4]",
    shadowColor: "shadow-[0px_3px_rgba(62,80,180,1)]",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    padColor: "bg-[#02A8F4]",
    shadowColor: "shadow-[0px_3px_rgba(2,168,244,1)]",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    padColor: "bg-[#019587]",
    shadowColor: "shadow-[0px_3px_rgb(1,149,135,1)]",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    padColor: "bg-[#F34135]",
    shadowColor: "shadow-[0px_3px_rgba(243,65,53,1)]",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    padColor: "bg-[#FF9700]",
    shadowColor: "shadow-[0px_3px_rgba(255,151,0,1)]",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    padColor: "bg-[#FEEA3B]",
    shadowColor: "shadow-[0px_3px_rgba(254,234,59,1)]",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    padColor: "bg-[#9B27B0]",
    shadowColor: "shadow-[0px_3px_rgba(155,39,176,1)]",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    padColor: "bg-[#2CC26B]",
    shadowColor: "shadow-[0px_3px_rgba(44,194,107,1)]",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    padColor: "bg-[#8AC149]",
    shadowColor: "shadow-[0px_3px_rgba(138,193,73,1)]",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    padColor: "bg-[#3E50B4]",
    shadowColor: "shadow-[0px_3px_rgba(62,80,180,1)]",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    padColor: "bg-[#02A8F4]",
    shadowColor: "shadow-[0px_3px_rgba(2,168,244,1)]",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    padColor: "bg-[#019587]",
    shadowColor: "shadow-[0px_3px_rgba(1,149,135,1)]",
  },
];

const App = () => {
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState(String.fromCharCode(160));
  const [currentPadBank, setCurrentPadBank] = useState(bankOne);
  const [currentPadBankId, setCurrentPadBankId] = useState("Heater Kit");
  const [sliderVal, setSliderVal] = useState(0.3);

  function powerControl() {
    setPower((prevPower) => !prevPower);
    setDisplay(String.fromCharCode(160));
  }

  function selectBank() {
    if (power) {
      if (currentPadBankId === "Heater Kit") {
        setCurrentPadBank(bankTwo);
        setDisplay("Smooth Piano Kit");
        setCurrentPadBankId("Smooth Piano Kit");
      } else {
        setCurrentPadBank(bankOne);
        setDisplay("Heater Kit");
        setCurrentPadBankId("Heater Kit");
      }

      setTimeout(() => {
        clearDisplay();
      }, 1000);
    }
  }

  function displayClipName(name) {
    if (power) setDisplay(name);
  }

  function adjustVolume(e) {
    if (power) {
      setSliderVal(e.target.value);
      setDisplay(`Volume ${Math.round(e.target.value * 100)}`);
    }

    setTimeout(() => {
      clearDisplay();
    }, 1000);
  }

  function clearDisplay() {
    setDisplay(String.fromCharCode(160));
  }

  // const powerSlider = power ? { float: "right" } : { float: "left" };
  // const bankSlider = currentPadBank === bankOne ? { float: "left" } : { float: "right" };
  const clips = [].slice.call(document.getElementsByClassName("clip"));
  clips.forEach((sound) => {
    sound.volume = sliderVal;
  });

  return (
    <div
      id="drum-machine"
      className="flex flex-col md:flex-row items-center gap-5 justify-center p-5 h-auto bg-gradient-to-b from-gray-600 to-gray-700 rounded-md inner-container"
    >
      <div className="w-[290px] bg-[#2B2C30] p-3 rounded-md">
        <PadBank
          clipVolume={sliderVal}
          currentPadBank={currentPadBank}
          power={power}
          updateDisplay={displayClipName}
        />
      </div>

      <div className="text-center w-full md:w-auto controls-container">
        <div className="items-center gap-2 control">
          <p className="text-white text-left">Power : </p>
          <div
            className={`h-5 w-10 ${
              power ? "bg-green-500" : "bg-red-500"
            } my-2 rounded-sm font-bold cursor-pointer leading-5 select`}
            onClick={powerControl}
          >
            {power ? "ON" : "OFF"}
          </div>
          <p className="text-white text-left">Bank : </p>
          <div
            className={`h-5 px-2 m-auto ${
              power ? "bg-green-500" : "bg-red-500"
            } my-2 rounded-sm font-bold leading-5 select`}
          >
            <p className={power ? "opacity-1" : "opacity-0"}>{currentPadBankId}</p>
          </div>
          <i
            className={`fa fa-refresh ${
              power ? "text-white" : "text-gray-900 cursor-not-allowed"
            } cursor-pointer`}
            aria-hidden="true"
            onClick={selectBank}
          ></i>
        </div>
        <p id="display" className="text-white">
          {display}
        </p>
        <div className="volume-slider">
          <input
            type="range"
            max="1"
            min="0"
            onChange={adjustVolume}
            step="0.01"
            value={sliderVal}
            className="appearance-none w-full h-1 bg-[#DE6A38]"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
