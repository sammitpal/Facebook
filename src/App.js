import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import RightBar from './RightBar';
import Login from './Login';
import {useEffect} from 'react';
import {useStateValue} from './StateProvider';
import {auth} from './firebase'
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("USER ->", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <div className="App">
     {user?(
       <>
       <div className="app_header">
       <Header/>
     </div>
     <div class="app_body">
     <Sidebar/>
     <Feed/>
     <RightBar/>
     </div>
     </>
     ):(
       <Login/>
     )}
    </div>
  );
}

export default App;
