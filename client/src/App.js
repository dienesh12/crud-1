import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import AllStudents from './components/AllStudents';
import StudentDetails from './components/StudentDetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<StudentDetails/>} />
        <Route path='/all' element={<AllStudents/>} />
        <Route path='/add' element= {<AddUser/>} />
        <Route path='/edit/:id' element= {<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
