import {Link, Route, Routes} from "react-router-dom";
import Albums from './pages/Albums';
import Comments from './pages/Comments';
import Todos from './pages/Todos';


function App() {
  return (<div>
    <div>
      <h2>menu</h2>
      <ul>
        <li><Link to={'/'}Home</Link></li>
      <li><Link to={'/Albums'}Albums</Link></li>
    <li><Link to={'/Comments'}Comments</Link></li>
  <li><Link to={'/Todos'}Todos</Link></li>
      </ul>
    </div>

  <div>
    <h2>content</h2>

    <Routes>
      <Route path={'/'} element={<Home/>}
      <Route path={'/Albums'} element={<Albums/>}
      <Route path={'/Comments'} element={<Comments/>}
             <Route path={':id'} element={<Posts/>}/>
      <Route path={'/Todos'} element={<Todos/>}
    </Routes>
  </div>
  </div>)
}
export default App;
