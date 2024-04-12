import React from "react";

const Graph = () => {
	const data = [
		{ date: "12/4/2024", age: 12 },
		{ date: "13/4/2024", age: 22 },
		{ date: "14/4/2024", age: 17 },
		{ date: "15/4/2024", age: 19 },
		{ date: "16/4/2024", age: 38 },
	];
	// const maxValue = Math.max(...data.age);
	// console.log(maxValue);
	//(maxVal./10)*10
	let maxValue = 40;
	const xAxis = [
		"12/4/2024",
		"13/4/2024",
		"14/4/2024",
		"15/4/2024",
		"16/4/2024",
	];
	const yAxis = [40, 30, 20, 10, 0];
	const dataFreq = [12, 13, 15, 17, 21, 19, 17,21,22,18,21];
	return (
		<div>
			Graph
			<div className="container">
				<div className="box">
					<div
						className="box-y-axis"
						style={{ height: `${yAxis && yAxis[0] / 2}rem` }}
					>
						{yAxis?.map((val, idx) => (
							<div key={idx}>
								<span>{val}</span>
							</div>
						))}
					</div>
					<div className="graph">
						{dataFreq &&
							dataFreq.map((val, idx) => (
								<div className="barPeice">
									<div className="x-axis-item" style={{ height: `${val / 2}rem` }}>
										{val}
										<div className="marker">{val}</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Graph;
