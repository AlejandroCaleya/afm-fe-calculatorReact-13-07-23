import React from "react";
import "../styles/main.css";

const Main = () => {
	const [inputValue, setInputValue] = React.useState("");

	const cleanInput = () => {
		setInputValue("");
	};

	const inverso = () => {
		setInputValue(-parseFloat(inputValue));
	};

	const porciento = () => {
		setInputValue(parseFloat(inputValue) / 100);
	};

	const operacionFunction = (operator) => {
		setInputValue(inputValue + operator);
	};

	const add = (number) => {
		setInputValue(inputValue + number);
	};

	const cuadrado = () => {
		setInputValue(inputValue ** 2);
	};
	const cubo = () => {
		setInputValue(inputValue ** 3);
	};
	const pi = () => {
		setInputValue(3.14596);
	};
	const raiz = () => {
		setInputValue(inputValue ** 0.5);
	};

	const igual = () => {
		try {
			const result = eval(inputValue);
			setInputValue(result);
		} catch (error) {
			setInputValue("Error");
		}
	};

	return (
		<main classNameName="main">
			<table classNameName="table">
				<tr>
					<td colspan="4">
						<div id="M"> M </div>
						<input className="input" id="inputID" placeholder="0" value={inputValue}></input>
					</td>
				</tr>
				<tr>
					<td>
						<button className="lightButton" onClick={cleanInput}>
							C
						</button>
					</td>
					<td>
						<button className="lightButton" onClick={inverso}>
							+/-
						</button>
					</td>
					<td>
						<button className="lightButton" onClick={porciento}>
							%
						</button>
					</td>
					<td>
						<button className="acentButton" onClick={() => operacionFunction("/")}>
							÷
						</button>
					</td>
				</tr>
				<tr>
					<td>
						<button className="darkButton" onClick={() => add(7)}>
							7
						</button>
					</td>
					<td>
						<button className="darkButton" onClick={() => add(8)}>
							8
						</button>
					</td>
					<td>
						<button className="darkButton" onClick={() => add(9)}>
							9
						</button>
					</td>
					<td>
						<button className="acentButton" onClick={() => operacionFunction("*")}>
							x
						</button>
					</td>
				</tr>
				<tr>
					<td>
						<button className="darkButton" onClick={() => add(4)}>
							4
						</button>
					</td>
					<td>
						<button className="darkButton" onClick={() => add(5)}>
							5
						</button>
					</td>
					<td>
						<button className="darkButton" onClick={() => add(6)}>
							6
						</button>
					</td>
					<td>
						<button className="acentButton" onClick={() => operacionFunction("-")}>
							-
						</button>
					</td>
				</tr>
				<tr>
					<td>
						<button className="darkButton" onClick={() => add(1)}>
							1
						</button>
					</td>
					<td>
						<button className="darkButton" onClick={() => add(2)}>
							2
						</button>
					</td>
					<td>
						<button className="darkButton" onClick={() => add(3)}>
							3
						</button>
					</td>
					<td>
						<button className="acentButton" onClick={() => operacionFunction("+")}>
							+
						</button>
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<button className="ceroButton darkButton" onClick={() => add(0)}>
							0
						</button>
					</td>
					<td>
						<button className="darkButton" onClick={() => add(".")}>
							.
						</button>
					</td>
					<td>
						<button className="acentButton" onClick={igual}>
							=
						</button>
					</td>
				</tr>
				<tr>
					<td>
						<button class="acentButton" onClick={cuadrado}>
							x²
						</button>
					</td>
					<td>
						<button class="acentButton" onClick={cubo}>
							x³
						</button>
					</td>
					<td>
						<button class="acentButton" onClick={pi}>
							PI
						</button>
					</td>
					<td>
						<button class="acentButton" onClick={raiz}>
							√
						</button>
					</td>
				</tr>
			</table>
		</main>
	);
};

export default Main;
