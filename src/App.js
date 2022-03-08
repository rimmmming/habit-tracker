import './App.css';
import React from 'react';

function App() {
	return (
			<div className="App">
			<header className="header">
				<h1 className="title">Tracker</h1>
				<button type="button" className="button__add">+</button>
			</header>
			<div className="container">
				<section className="box__habit">
					<div className="box__habit-title">
						<h2 className="text__title">타이틀</h2>
						<button type="button" className="button__close">X</button>
					</div>
					<div className="box__habit-content">
						<ul className="list">
							{Array.from({length:31}).map((_, index) => {
								return(
									<li className="list-item">
										<input type="checkbox" className="form__checkbox" />
										<label htmlFor="" className="form__label">{index + 1}</label>
									</li>
								)
							})}
						</ul>
						<span className="text__total">달성률 : 0%</span>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
