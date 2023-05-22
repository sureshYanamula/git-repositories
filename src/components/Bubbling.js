


const Bubbling = () => {

    const handleYellow = (e) => {
        console.log("i am yellow")
    }
    
    const handleRed = (e) => {
        e.stopPropagation()
        console.log("i am red")
    }

    const handleGreen = (e) => {
        console.log("i am green")
    }

    return (
        <div style={{width:"500px",height:"500px",backgroundColor:"yellow",margin:"500px",cursor:"pointer"}} onClickCapture={handleYellow}>
        <div style={{width:"300px",height:"300px",backgroundColor:"red"}} onClickCapture={handleRed}>
        <div style={{width:"200px",height:"200px",backgroundColor:"green"}} onClickCapture={handleGreen}>

        </div>
        </div>
        </div>
    )
}

export default Bubbling;