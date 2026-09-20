export function GiveUiElements(obj){
    console.log(obj)
  return (
    <p id="code" className="text-lg font-mono mb-6">
        #6366f1, I am a paragraph {3+2+10+20 + obj.number}
      </p>
  )
}