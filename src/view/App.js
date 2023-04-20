import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ComponentForm from './Example/ComponentForm';
import ListTodos from './Todos/ListTodos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        {<Nav/>}
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/todos">
             <ListTodos />
          </Route>
          <Route path="/about">
            <ComponentForm />
            </Route>
            <Route path ="/user" exact>
              <ListUser/>
            </Route>
            <Route path ="/user/:id">
              <DetailUser/>
            </Route>
        </Switch>
          
          
          {/* <MyComponent /> */}
         
        
          

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>

    
  );
}

export default App;
