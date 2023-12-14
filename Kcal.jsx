import {setPageTitle} from "../20191526/util.js";
import {React, useEffect, useState} from "react";
import './Kcal.css'
function Kcal(){
    useEffect(()=>{
        setPageTitle("기초대사량 계산")
    },[]);
    // const [data, setData] = useState([]);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState("");
    const [result, setResult]=useState(null);  
    const [ex,setEx]=useState("");

    // 88.4 +(13.4x몸무게) + (4.8 x 키) - (5.68x나이)
    // 447.6 + (9.25x몸무게) + (3.1x키) - (4.33x나이)
const level={

    "운동을 거의 하지 않음": 1.2,
    "가벼운 활동(주1~3일)": 1.3755,
    "적당히 활동(주3~5일)": 1.55,
    "매우 활동적(주6~7일)": 1.725
}
const calc =()=>{
    if (weight && height && age && sex && ex){
    const base = sex === "남성" ? 88.4 +(13.4*weight) + (4.8*height) - (5.68*age)
    : 447.6 + (9.25*weight) + (3.1*height) - (4.33*age);
setResult(base * level[ex]);
}
}


const getSex = (e) => {
    setSex(e.target.value);
    console.log(e.target.value);
   
 }
 const getEx = (e) => {
    setEx(e.target.value);
    console.log(e.target.value);
   
 }

 const getWeight = (e) => {
    setWeight(e.target.value);
    console.log(e.target.value);
   
 }
 const getHeight = (e) => {
    setHeight(e.target.value);
    console.log(e.target.value);
 }
 const getAge = (e) => {
    setAge(e.target.value);
    console.log(e.target.value);
 }

 useEffect(() => {

 }, [])

        return(
        <div className="My">
            <div>
                <h2>기초 대사량 계산기</h2>
            </div>
            <div className="Main">
            <div>
            <span>성별</span>
            <select value = {sex} onChange={getSex}>
            <option>선택하세요</option>
            <option>남성</option>
            <option>여성</option>
        </select>
        </div>
        <div>
            <span>나이</span>
            <input type="number" placeholder="숫자만 입력" value = {age} onChange={getAge}/>
            <span>세</span>
        </div>
        
        <div>
            <span>&nbsp;&nbsp;키&nbsp;&nbsp;</span>
            <input type="number" placeholder="소숫점 가능" value = {height} onChange={getHeight}></input>
            <span>cm</span>
        </div>
        <div>
            <span>몸무게</span>
            <input type="number" placeholder="소숫점 가능" value = {weight} onChange={getWeight}></input>
            <span>Kg</span>
        </div>
        <div>
            <span>운동량</span>
            <select value = {ex} onChange={getEx}>
            <option>선택하세요</option>
            <option>운동을 거의 하지 않음</option>
            <option>가벼운 활동(주1~3일)</option>
            <option>적당히 활동(주3~5일)</option>
            <option>매우 활동적(주6~7일)</option>
        </select>
        </div>
            <button className="calc-button" onClick={calc}>계산하기</button>
        <div>
        {result !==null && <h4>일일 기초대사량:{parseInt(result)}Kcal
        <br/>
        일일 섭취 필요 영양소(탄/단/지)<br/>
        탄수화물:{parseInt(result/10*5)}Kcal/{parseInt(result/10*5/4)}g<br/>
        단백질:{parseInt(result/10*3)}Kcal/{parseInt(result/10*3/4)}g<br/>
        지방:{parseInt(result/10*2)}Kcal/{parseInt(result/10*2/9)}g
        </h4>}
        </div>
        </div>


        <div>

        </div>
        </div>

    )
}

export default Kcal;