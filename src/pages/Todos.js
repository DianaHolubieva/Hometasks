import Todos from '../components/Todos';
import {Outlet} from "react-router-dom";

 export default function Todos(){
     return(<div>


         <Outlet/>
         <Todos/>
     </div>)
 }