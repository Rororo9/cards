import './App.css';
import CardTitle from './components/CardTitle';
import SpecialFileTreatment from './components/SpecialFileTreatment';
import 'bootstrap/dist/css/bootstrap.min.css';
import cat from './img/cat.jpg';

const App = () => {
  return (
      <div className="container">
        <CardTitle img={cat} />
        <br />
        <SpecialFileTreatment />
      </div>
  );
}

export default App;
