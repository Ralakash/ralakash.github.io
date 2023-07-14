import NavBar from './Components/navBar/NavBar';
import Bio from './Components/body/Bio';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
	return (
		<div className="w-100 h-100" id="border-start">
      <div
        id="border-end"
        className="w-100 h-100 row"
      >
			<NavBar />
			<main className="row">
				<Bio />
			</main>
      </div>
		</div>
	);
}

export default App;
