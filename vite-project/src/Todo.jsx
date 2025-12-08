import {useState} from 'react'
import './Todo.css'
export default function TodoApp(){
    return (
    <>
        <ToDolist/>
    </>
    )
}

function ToDolist(){
  const [tekst,setTekst] = useState("");
  const [todo,setTodo] = useState([]);

  function add(e){
    if (tekst.trim() === "") {
      return;
    }
    setTodo([...todo, { id: Date.now(), done: false, text: tekst.trim() }]);
    setTekst("");
    e.preventDefault();
  }

  function Remove(id){
    setTodo(todo.filter(item => item.id !== id))
  }

  function CrossOut(id){
    setTodo(todo.map((item)=> (
      item.id === id ? { ...item, done: !item.done } : item
    )))
  }

  function ClearAll(){
    setTodo([]);
  }
  return (
    <>
      <input className = "input" type="text" value={tekst} placeholder="Write here your list" onChange={(e)=>setTekst(e.target.value)} />
      <button className = "Add-to-list" onClick = {add}>Add to the list</button>
      <p className = "Paragraph">Number of the elemnts in the list : {todo.length}</p>
        {/*<p>Lista ukończonych zadań :{todo.length - !item.done} </p>*/}
      <ul>
        {todo.map((item)=>(
          <li key={item.id}>
            <span onClick={() => CrossOut(item.id)} style={{ textDecoration: item.done ? "line-through" : "none", cursor: "pointer",color:"pink"}}>
              {item.text}
            </span>
            <input type="checkbox" checked={item.done} onChange={() => CrossOut(item.id)} />
            <button className="Delete-button" onClick={()=>
              {Remove(item.id)}}>
                Delete me 
            </button>
          </li>
        ))}
      </ul>
      <button className = "DeleteAll"onClick = {ClearAll}>Delete all</button>
    </>
  )
}     