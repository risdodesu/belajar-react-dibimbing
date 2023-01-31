import List from "./components/List";
import Role from "./components/Role";
import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [text, setText] = useState();
  
  useEffect (() => {
    console.log("Dijalankan 1x aja");
  },[])
  
  useEffect (() => {
    console.log(`I detected changes in state 1 now : ${counter} and state 2 now : ${counter2}`);
  },[counter,counter2])

  const [text1,name,family] = ["Hello my name is ", "Risdo Lihardo"," Saragih"]
  const handleClickedAdd = () => {
    setCounter(prev => prev +1)
  }
  const handleClickedMin = () => {
    setCounter(prev => prev > 0 ? prev -1 : prev)
  }
  const handleClickedRes = () => {
    setCounter(0)
  }

  const handleClickedAdd2 = () => {
    setCounter2(prev => prev +1)
  }
  const handleClickedMin2 = () => {
    setCounter2(prev => prev > 0 ? prev -1 : prev)
  }
  const handleClickedRes2 = () => {
    setCounter2(0)
  }
  
  return (
    <>
      Counter : {counter}<br/>
      <button onClick={handleClickedAdd}>Add</button>--
      <button onClick={handleClickedMin}>Delete</button>--
      <button onClick={handleClickedRes}>Reset</button><br/><br/>

      Counter : {counter2}<br/>
      <button onClick={handleClickedAdd2}>Add</button>--
      <button onClick={handleClickedMin2}>Delete</button>--
      <button onClick={handleClickedRes2}>Reset</button><br/><br/>

      <textarea onChange={e => setText(e.target.value)} value={text}></textarea><br/><p>{text}</p>
      Hello World <br/>
      {text1}{name}{family}
      <List/>
      <Role/>
    </>
  );
}

export default App;