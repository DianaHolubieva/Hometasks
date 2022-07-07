import {Outlet} from "react-router-dom";
import Comments from "../components/Comments";

export default function Comments(){
    return(<div>


        <Outlet/>
        <Comments/>
    </div>)
}