//named

// interface airbnbCardProps {
//   imgUrl: String;
//   cardTitle: String;
//   price: String;
//   rating: Number;
//   isFavourite: Boolean;
//   tileContent?: 'Trending' | 'Guest Favourite'
// }


export function GiveUiElements({number,name, age, obj, randomName,namesArr, isBadge }){
  const {employee, employeeId} = obj;
    // console.log(obj)
    // if(obj.namesArr){
    //   console.log(obj.namesArr)
    // }


  // function randomNameDisplayer(namesArr){
  //   const maxValue = namesArr.length - 1;
  //   const randomIndex = Math.floor(Math.random()* (maxValue + 1))
  //   return namesArr[randomIndex]
  // }

  // const randomValue = randomNameDisplayer(namesArr)

  // function changeSomeText(){

  // }

  return (
    <div style={{border: '1px solid black'}}>
      {/* <h>React</h>   */}
      <p id="code">
          {/* #6366f1, I am a paragraph {3+2+10+20 + number} - {employee} */}
          {/* {randomNameDisplayer(namesArr)} */}
          {/* {randomValue}
          {randomValue} */}
          {/* {randomName} */}
          {
            namesArr.map( val => <span>{val} </span> )
          }
        </p>
        {/* <p> { isBadge ? isBadge : 'Default'} </p> */}

        {isBadge && <p> {isBadge} </p>}  
        {/* <button onClick={}></button> */}
    </div>
  )
}

export function GiveDirections(){

}

//default
export default function random(){
  // console.log('random')
}


