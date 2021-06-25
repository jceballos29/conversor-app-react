import React, {Fragment,useState} from 'react';

const toRadian = (grades) => {
    return grades * 0.01745;
  };

const toDegrees= (radians) => {
return radians * 57.296;
};


const Conversor = () => {

    let [deegrees,setDeegrees] = useState(0)
    let [radians,setRadians] = useState(0)
    let [subtitle, setSubtitle] = useState('Waiting to convert...')

    const inputDeegrees = (e) => {
        setDeegrees(e.target.value)
    }

    const inputRadians = (e) => {
        setRadians(e.target.value)
    }

    const enviarDatos = (event) => {
        let result;
        event.preventDefault();
        if (deegrees===null || deegrees==0){
            setSubtitle(subtitle='Converting from Radians to Degrees')
            result = toDegrees(Number(radians))
            console.log(result);
            setDeegrees(deegrees=result);
        } else if (radians===null || radians==0){
            setSubtitle(subtitle = 'Converting from Deegrees to Radians')
            result = toRadian(Number(deegrees))
            console.log(result);
            setRadians(radians=result);
        }
    }

    const refresh = () => {
        setDeegrees(deegrees = 0);
        setRadians(radians = 0);


    }

    return (
        <Fragment>
            <h1>Conversor</h1>
            <form onSubmit={enviarDatos}>
                <h3>{subtitle}</h3>
                <div>
                    <label from="deegrees">Deegrees</label>
                    <input 
                        type="text" 
                        name="deegrees" 
                        value={deegrees}
                        onChange = {inputDeegrees}
                    ></input>
                    <label from="radians">Radians</label>
                    <input 
                        type="text" 
                        name="radians" 
                        value={radians}
                        onChange = {inputRadians}
                    ></input>
                </div>
                <button type="submit">Convert</button>
                <button onClick={refresh}>Refresh</button>

            </form>
        </Fragment>
    );
}

export default Conversor;