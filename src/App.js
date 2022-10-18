import './App.css';
import RoutesApp from './routes';

//mpm instal react-toastfy:
import { ToastContainer } from 'react-toastify';
//paste toastify css:
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2500}/>
      <RoutesApp/>
   
    </div>
  );
}

export default App;
