import './App.css';
import Card from './component/ActionAreaCard.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<title>맛집 별점표</title>
		<h2>부산진구</h2>
		  <Card area="서면" name="맛찬들왕소금구이" star="★★★★★" menu="" link="http://naver.me/xcukMcIK" />
		  <br />
		  <Card area="서면" name="맛찬들왕소금구이" star="★★★★★" menu="" link="http://naver.me/xcukMcIK" />
		  </header>
    </div>
  );
}

export default App;
