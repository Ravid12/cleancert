import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './view/pages/Home/Home';
import { Register } from './view/pages/Register/Register';
import { SignIn } from './view/pages/SignIn/SignIn';
import { ForumHomePage } from './view/pages/Forum/ForumHomePage';
import { ForumThread } from './view/components/Forum/ForumThread/ForumThread';
import { ConsumerLandingPage } from './view/pages/Consumer/LandingPage/ConsumerLandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="register" element={<Register />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="forum" element={<ForumHomePage />} />
      <Route path="forum/1" element={<ForumThread id='1'/>}/>
      <Route path="sustainable-coconut" element={<ConsumerLandingPage/>}/>
    </Routes>  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
