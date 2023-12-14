import {Routes,Route,Link} from "react-router-dom";
import BMI from "./BMI"
import Kcal from "./Kcal"
import List from "./List"
import Login from "./Login"
import Todo from "./Todo"
import Main from "./Main"
import './App_page.css'
function App()
{
    return(
        <div className="App">
            <h1>HEALTH LOG</h1>
            <div className="menu">  
                <Link to={'/'}>Home</Link>
                <Link to={'/bmi'}>BMI 측정</Link>
                <Link to={'/rate'}>기초대사량 계산</Link>
                <Link to={'/report'}>운동 일지</Link>
                <Link to={'/login'}>로그인</Link>

            </div>
            <div className="screen">
                <Routes>
                    <Route path='/' element={<Main></Main>}></Route>
                    <Route path='/bmi' element={<BMI></BMI>}></Route>
                    <Route path='/rate' element={<Kcal></Kcal>}></Route>
                    <Route path='/report' element={<List></List>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/todo/:id' element={<Todo></Todo>}></Route>
                </Routes>
            </div>
        </div>
    );
};
export default App;