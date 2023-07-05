import './App.css';
import Delete from './components/delete';
import Get from './components/get';
import GetOne from './components/getOne';
// import Header from './components/header';
import Patch from './components/patch';
import Post from './components/post';
import Put from './components/put';

function App() {
  return (
    <div className="App">
      <span className='heading'>API calls</span>
      <div className='instruction'>Choose your action</div>
      <Get />
      <GetOne/>
      <Put/>
      <Post/>
      {/* <Patch/> */}
      <Delete/>
      
      
    </div>
  );
}

export default App;
