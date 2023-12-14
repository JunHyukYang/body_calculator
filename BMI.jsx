import {setPageTitle} from "../20191526/util.js";
import {React, useEffect, useState}
 from "react";
 import './Kcal.css'
function Bmi(){
    useEffect(()=>{
        setPageTitle("BMI 측정")
    },[]);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState("");
    const [result, setResult]=useState(null);  
    const [ex,setEx]=useState("");

    // 88.4 +(13.4x몸무게) + (4.8 x 키) - (5.68x나이)
    // 447.6 + (9.25x몸무게) + (3.1x키) - (4.33x나이)
const calc =()=>{
    if (weight && height && age && sex)
    {
const bmi= ((weight/((height/100)*(height/100))).toFixed(2))
setResult(bmi);
measure(bmi);
}
}
const measure =(result)=>
{
    if (0 < result && result < 18.5) {
        setEx("저체중 입니다.");
    } else if (18.5 <= result && result < 23) {
        setEx("정상체중 입니다.");
    } else if (23 <= result && result < 25) {
        setEx("과체중 입니다.");
    } else if (25 <= result && result < 30) {
        setEx("비만 입니다.");
    }
else if (30 <= result) {
    setEx("고도비만 입니다.");
}
}
const getSex = (e) => {
    setSex(e.target.value);
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
        <div>
            <div>
                <h2>BMI 측정기</h2>
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
            <button className="calc-button" onClick={calc}>계산하기</button>
        </div>
        <div>
        {result !==null && <h3>BMI 지수:{result}<br/>
        {ex}
        </h3>}
        </div>
        </div>

        
        <div>

        </div>
        </div>

    )
}

export default Bmi;