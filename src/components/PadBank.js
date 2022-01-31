import DrumPad from "./DrumPad";

const PadBank = ({ power, currentPadBank, updateDisplay }) => {
  let padBank;

  if (power) {
    padBank = currentPadBank.map((drumObj, index) => {
      return (
        <DrumPad
          clip={drumObj.url}
          clipId={drumObj.id}
          keyCode={drumObj.keyCode}
          keyTrigger={drumObj.keyTrigger}
          padColor={drumObj.padColor}
          shadowColor={drumObj.shadowColor}
          power={power}
          updateDisplay={updateDisplay}
          key={index}
        />
      );
    });
  } else {
    padBank = currentPadBank.map((drumObj, index) => {
      return (
        <DrumPad
          clip="#"
          clipId={drumObj.id}
          keyCode={drumObj.keyCode}
          keyTrigger={drumObj.keyTrigger}
          power={power}
          updateDisplay={updateDisplay}
          key={index}
        />
      );
    });
  }

  return <div className="grid grid-cols-3 gap-3 pad-bank">{padBank}</div>;
};

export default PadBank;
