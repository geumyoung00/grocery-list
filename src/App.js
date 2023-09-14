import './styles.css';

function App() {
	return (
		<>
			<h1>Project 3: Grocery List</h1>
			<div className="shopping-list">
				<h2>Groceries to buy</h2>
				<form>
					<input
						type="text"
						name="item"
						placeholder="Add a new item"
						required
					/>
					<button>Add</button>
				</form>
				<ul></ul>
			</div>
		</>
	);
}

export default App;
