import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Profile from './components/Profile';
import UserList from './components/UserList';
import  UserState from './context/User/UserState'
function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div  className="col-md-6">
            <UserList />
          </div>
          <div className="col-md-6">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
