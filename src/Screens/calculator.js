
import React from "react"; 
import title from "./title.js"; 
import './index.css';
import outscreen from "./outscreen.js"; 
import Button from "./button.js"; 
import App from "../App.js";

class Calculator extends React.Component { 
	render() { 
		return ( 
			<div className="calculator"> 
				<title value=" display" /> 
				
				<div className="input"> 
				<input type="number" placeholder="00" className="in-put"></input>
					<outscreen /> 
					<div className="button-row"> 
						<Button label={"Clear"} /> 
						<Button label={"Delete"} /> 
						<Button label={"."} /> 
						<Button label={"/"} /> 
					</div> 
					<div className="button-row"> 
						<Button label={"7"} /> 
						<Button label={"8"} /> 
						<Button label={"9"} /> 
						<Button label={"*"} /> 
					</div> 
					<div className="button-row"> 
						<Button label={"4"} /> 
						<Button label={"5"} /> 
						<Button label={"6"} /> 
						<Button label={"-"} /> 
					</div> 
					<div className="button-row"> 
						<Button label={"1"} /> 
						<Button label={"2"} /> 
						<Button label={"3"} /> 
						<Button label={"+"} /> 
					</div> 
					<div className="button-row"> 
						<Button label={"0"} /> 
						<Button label={"="} /> 
					</div> 
				</div> 
			</div> 
		); 
	} 
} 
export default Calculator; 
