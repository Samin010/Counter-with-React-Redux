import { useSelector } from "react-redux"


function DisplayCounter() {
 const counterObj= useSelector((store)=>store.counter)
 const counter=counterObj.counterVal
  return (
    <p className="lead mb-4">Counter Current Value: {counter} </p>
  )
}

export default DisplayCounter
