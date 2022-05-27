import './App.css';
import Header from './component/Header'
import Area from './component/Area.js';

function App() {
  return (
    <div className="App">
      <Header />
	  <title>맛집 별점표</title>
	  <h2>부산진구</h2>
      <h2>부산남구</h2>
      <h2>부산해운대구</h2>
	  <Area/>
    </div>
  );
}

export default App;
