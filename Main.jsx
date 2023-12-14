import {useEffect} from "react";
import {setPageTitle} from "../20191526/util.js";
import React from "react";
import picture1 from './mainpage.jpg'
import "./Main.css";
function Main()
{    useEffect(()=>{
    setPageTitle("메인 페이지")
},[]);
    return(
        <div>
   <img className="main-image" src={picture1} width='900px'/>
   <h6><a href="https://kr.freepik.com/free-photo/weights-exercise-weightlifter-strong-athletic_1052591.htm#query=fitness&position=4&from_view=search&track=sph&uuid=37be9c55-743b-4414-8e08-566b2865202d">작가 javi_indy</a> 출처 Freepik</h6>
        </div>
    )
}
export default Main;