import {Outlet} from "react-router-dom";
import Albums from "../components/Albums";

export default function Albums(){
    return(<div>


        <Outlet/>
        <Albums/>
    </div>)
}