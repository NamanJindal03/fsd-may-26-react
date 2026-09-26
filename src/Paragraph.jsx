//named
export function GiveUiElements({number,name, age, namesArr, obj }){
  const {employee, employeeId} = obj;
    // console.log(obj)
    // if(obj.namesArr){
    //   console.log(obj.namesArr)
    // }
  return (
    <p id="code">
        #6366f1, I am a paragraph {3+2+10+20 + number} - {employee}

      </p>
  )
}

export function GiveDirections(){

}

//default
export default function random(){
  console.log('random')
}