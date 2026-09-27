import { createRoot } from "react-dom/client";
import klo, {  GiveUiElements, GiveDirections } from "./Paragraph";

//the name can be anything 
// import  from './Paragraph'

// import App from './App.jsx'
import App from './Counter/App'


function printOnConsole(){
  console.log('I am printing osmething')
  return 'NAMAN'
}

function returnSomeRandomOperation(num1, num2, operator){
  return `${num1} ${operator} ${num2}`
}

const namesArr = ['Samrat', 'Sanjeev', 'Naman', 'Akshay', 'Platue'];
const obj = {
  employee: 'naman',
  employeeId: 10,
}


function randomNameDisplayer(namesArr){
  const maxValue = namesArr.length - 1;
  const randomIndex = Math.floor(Math.random()* (maxValue + 1))
  return namesArr[randomIndex]
}
const randomValue = randomNameDisplayer(namesArr)

klo()



//component
//typing object


createRoot(document.getElementById("root")).render(
    <>
    {/* {console.log('in main.jsx')} */}
    <App />
    </>
  // <body className="flex items-center justify-center h-screen bg-slate-900 text-white font-sans">
  //   <div className="text-center p-8 bg-slate-800 rounded-2xl shadow-xl max-w-sm w-full mx-4">
  //     <h1 className="text-2xl font-bold mb-4">Random Color</h1>
  //     <div
  //       id="box"
  //       className="w-full h-32 rounded-xl mb-4 transition-colors duration-300 bg-indigo-500"
  //     ></div>
  //     {/* {giveUIElements(10)} */}
  //     <GiveUiElements number={10} name={'Sanjeev'}  age={10} randomName={randomValue} obj={obj} namesArr={namesArr}/>
  //     <GiveUiElements number={20} name={'Sanjeev'}  age={10} randomName={randomValue} obj={obj} namesArr={namesArr}/>
  //     <GiveUiElements number={30} name={'Sanjeev'}  age={10} randomName={randomValue} obj={obj} namesArr={namesArr} isBadge={'trending'}/>
  //     {/* {giveUIElements(20)}
  //     {giveUIElements(30)} */}
  //     <button
  //       onClick="c=()=>'#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');col=c();document.getElementById('box').style.backgroundColor=col;document.getElementById('code').innerText=col;"
  //       className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition shadow-lg"
  //     >
  //       {printOnConsole()} 
       
  //     </button>
  //     <button> {returnSomeRandomOperation(3,4, '+')}</button>
  //     <button>{returnSomeRandomOperation(5,2, '-')}</button>
  //     <button> {returnSomeRandomOperation(1,0, '*')}</button>
  //   </div>
  // </body>
);
