import List from "./components/List";
import Role from "./components/Role";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Input from "./components/Input";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [text, setText] = useState("");
  const [helo, setHelo] = useState("Hello From Parent");
  
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
      <Hero imgSrc="https://dibimbing.id/_next/image?url=https%3A%2F%2Fdibimbing-cdn.sgp1.cdn.digitaloceanspaces.com%2FEza-Desktop.webp&w=750&q=75" 
            text="Kami Percaya Kamu Bisa Jadi Apa Saja"
      />
      <Hero imgSrc="https://dibimbing.id/_next/image?url=https%3A%2F%2Fdibimbing-cdn.sgp1.cdn.digitaloceanspaces.com%2Fpexels-alex-green-5699475%25201.png&w=640&q=75" 
            text="Pilihlah Dibimbing.id Sebagai Bootcamp Andalanmu"
      />
      <Hero text="Halo Ini Gambar Default"/>
      Counter : {counter}<br/>
      <button onClick={handleClickedAdd}>Add</button>--
      <button onClick={handleClickedMin}>Delete</button>--
      <button onClick={handleClickedRes}>Reset</button><br/><br/>

      Counter : {counter2}<br/>
      <button onClick={handleClickedAdd2}>Add</button>--
      <button onClick={handleClickedMin2}>Delete</button>--
      <button onClick={handleClickedRes2}>Reset</button><br/><br/>

      <textarea onChange={e => setText(e.target.value)} value={text}></textarea><br/>
      <p>{text}</p>
      Hello World <br/>
      {text1}{name}{family}
      <List/>
      <Role/>
      <h1>{helo}</h1>
      <p>Parent App : {helo}</p>
      <Input dataParent ={helo} setDataParent ={setHelo}/>
    </>
  );
}

export default App;