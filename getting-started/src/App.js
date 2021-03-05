import logo from './logo.svg';
import './App.css';

const HelloWorld = () => <p>Hello World</p>;

const Edit = () => (
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
);
const Image = () => <img src={logo} className="App-logo" alt="logo" />;

const Header = () => {
  return (
    <header className="App-header">
      <Image />
      <Edit />
      <HelloWorld />
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <HelloWorld />
      <Image />
    </div>
  );
}

export default App;
