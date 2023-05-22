import React, {useState} from 'react'

const ComponentA = ({name,getDataFromC}) => {
    console.log(name,"propdrillingA")

    return (
      <div>
        <ComponentB name={name} getDataFromC={getDataFromC}/>
      </div>
    )
  }

  const ComponentB = ({name,getDataFromC}) => {
    console.log(name,"propdrillingB")

    return (
      <div>
        <ComponentC name={name} getDataFromC={getDataFromC}/>
      </div>
    )
  }

  const ComponentC = ({name,getDataFromC}) => {
    console.log(name,"propdrillingC")
    const [details,setDetails] = useState("These are my details")
    const handleSendDatatoParent = () => {
        getDataFromC(details)
    }

    return (
      <div>
        I am component C
        <h1>{name}</h1>
        <button onClick={handleSendDatatoParent}>Send data to parent</button>
      </div>
    )
  }

const PropDrilling = () => {
    const [name,setName] = useState("suresh")

    console.log(name,"propdrilling")
    const getDataFromC = (details) => {
            console.log(details,"prop drilling details")
    }
  return (
    <div>
        <ComponentA name={name} getDataFromC={getDataFromC}/>
        <button onClick={()=>setName("Mahesh")}>Change Name</button>
    </div>
  )
}

export default PropDrilling