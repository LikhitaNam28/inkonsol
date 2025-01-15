import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Filter from './Filter';
import NewsletterList from './NewsletterList';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Filter></Filter>
    <NewsletterList></NewsletterList>
    </div>
  );
}

export default App;
