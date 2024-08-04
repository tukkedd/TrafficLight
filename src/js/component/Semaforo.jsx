import React, { useEffect, useState } from 'react'

const Semaforo = () => {
	const [color, setColor] = useState("red")

	const [on, setOn] = useState(false)

	useEffect(() => {
		
			if (on == false) return null

			if (color == "red") {
				setTimeout(() => {
					setColor("green");
				}, 6000)
			}
			else if (color == "green") {
				setTimeout(() => {
					setColor("yellow");
				}, 5000)
			}
			else if (color == "yellow") {
				setTimeout(() => {
					setColor("red");
				}, 2000)
			}
		
	}, [color, on]) //esta pendiente de los cambios de el "on" y el "color"


	return <>
		<div className='palo'></div>

		<div className="semaforo-caja">
			<div className=
				{`luz red ${color == "red" ? "brillo" : ""}`}
				onClick={() => on == true ? ()=>{} : setColor("red")}>
			</div>
			<div className=
				{`luz yellow ${color == "yellow" ? "brillo" : ""}`}
				onClick={() => on == true ? ()=>{} : setColor("yellow")}>
			</div>
			<div className=
				{`luz green ${color == "green" ? "brillo" : ""}`}
				onClick={() => on == true ? ()=>{} : setColor("green")}>
			</div>
		</div>
		{ on == false && <button onClick={() => setOn(true)} className="btn btn-danger">Automatico!</button>}

		{ on == true && <button onClick={() => setOn(false)} className="btn btn-success">Manual!</button>}
	</>

}

export default Semaforo