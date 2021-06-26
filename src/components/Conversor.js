import React, { useState } from "react";

const toRadian = (grades) => {
  return grades * 0.01745;
};

const toDegrees = (radians) => {
  return radians * 57.296;
};

const Conversor = () => {
    let defaultSubtitle = "Waiting to convert..."
  let [deegrees, setDeegrees] = useState(0);
  let [radians, setRadians] = useState(0);
  let [subtitle, setSubtitle] = useState(defaultSubtitle);
  let [disabled, setDisabled] = useState({
    convertButton: false,
    refreshButton: true,
  });

  const inputDeegrees = (e) => setDeegrees(e.target.value);

  const inputRadians = (e) => setRadians(e.target.value);

  const enviarDatos = (event) => {
    let result;
    event.preventDefault();
    if(deegrees === null || deegrees === 0) {
      setSubtitle("Converting from Radians to Degrees");
      result = toDegrees(Number(radians));
      setDeegrees((deegrees = result));
    } else if (radians === null || radians === 0) {
      setSubtitle("Converting from Deegrees to Radians");
      result = toRadian(Number(deegrees));
      setRadians((radians = result));
    }
    setDisabled({ convertButton: true, refreshButton: false })
  
  };

  const refresh = (event) => {
    event.preventDefault();
    setSubtitle(defaultSubtitle)
    setDeegrees(0);
    setRadians(0);
    setDisabled({ convertButton: false, refreshButton: true });
  };

  return (
    <div className="Conversor">
      <h1>Conversor</h1>
      <form className="Form">
        <h5>{subtitle}</h5>
        <div className="Entries">
          <label from="deegrees">Deegrees:</label>
          <input
            type="text"
            name="deegrees"
            value={deegrees}
            onChange={inputDeegrees}
          ></input>
          <label from="radians">Radians:</label>
          <input
            type="text"
            name="radians"
            value={radians}
            onChange={inputRadians}
          ></input>
        </div>
        <div className="Buttons">
            <button disabled={disabled.convertButton} onClick={enviarDatos}>
            Convert
            </button>
            <button disabled={disabled.refreshButton} onClick={refresh}>
            Refresh
            </button>
        </div>
      </form>
    </div>
  );
};

export default Conversor;
