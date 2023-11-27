import './App.css';
import { BrowserRouter as Router,  Route, Routes, BrowserRouter} from 'react-router-dom';
import FirstPage from './components/FirstPage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
// import UserInfo from './components/UserInfo';
import CandidateDetail from './components/CandidateDetail';
import CandidateLogin from './components/CandidateLogin';
import CandidateRegister from './components/CandidateRegister';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
          <Route path="/DecentralizedVotingSystemUsingEthereum-MajorProject" element={<FirstPage/>} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm/>} /> 
          <Route path="/admin_login" element={<CandidateRegister/>} />
          <Route path="/candidatelogin" element={<CandidateLogin/>} /> 
          <Route path="/candidateregister" element={<CandidateRegister/>} /> 

          </Routes> 
        
        </BrowserRouter>


      
    </div>
  );
}

export default App;
