

const EventHandling = () => {
    function handleButtonClick() {
     alert("hello ishi")
    }
  const  handleButtonClick2 =(name) =>{
         console.log(`hello ${name}`)
    }
  return (
    <div>
        <button onClick={handleButtonClick} className="text-red-500 px-4 py-1 border-white border-2  rounded-2xl ">Click Me</button>

          <button onClick={()=> handleButtonClick2("swaysa")} className="text-green-500 px-4 py-1 border-white border-2 ml-10 rounded-2xl ">Click Me 2</button>
    </div>
  )
}

export default EventHandling