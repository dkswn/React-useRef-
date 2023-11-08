
import './App.css';
import {useState} from "react";
import uuid from 'react-uuid';

function App() {
    const [todos, setTodos] = useState([{
        id: uuid(),
        title: "제목1",
        contents: "내용1",
        isDone: false,
    },
    {
        id: uuid(),
        title: "제목2",
        contents: "내용2",
        isDone: true,
    },
    {
        id: uuid(),
        title: "제목3",
        contents: "내용3",
        isDone: false,
    },
    {
        id: uuid(),
        title: "제목4",
        contents: "내용4",
        isDone: false,
    },
    ])
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
  return (
      <>
      <header style={{
        backgroundColor:"yellow",
        padding:"10px",
      }}> 헤더입니다
      </header>
        <main style={{
        backgroundColor:"blue",
        padding:"10px",
        }}> list 공간
            <form onSubmit={((event)=>{
                event.preventDefault();
                const NewTodos = {
                    id:uuid(),
                    title:title,
                    contents:contents,
                    isDone:false
                }
                setTodos([...todos,NewTodos])
            })}>
                <input value={title} onChange={((event)=>{
                    setTitle(event.target.value);
                })}/>
                <input value={contents} onChange={(event) => setContents(event.target.value)}/>
                <button type="submit">
                    클릭
                </button>
                <div>
                    <h2>완료된 목록</h2>
                    {todos.filter((todo)=>{
                        return todo.isDone === false;
                    }).map((todo)=>{
                       return (
                        <div key={todo.id} style={{
                            border:"1px Solid red",
                            margin:"10px",
                        }}>
                            <h2>아이디:{todo.id}</h2>
                <h2>제목:{todo.title}</h2>
                <h2>내용:{todo.contents}</h2>
                <h2>완료여부:{todo.isDone(toString())}</h2>
                    </div>
                       )})
                    }
                    </div>
                <h2>완료 한 일</h2>
                {todos.filter((todo)=>{
                    return todo.isDone === true;
                }).map((todo)=>{
                    return <div key={todo.id} style={{
                        border:"10px",
                        margin:"10px",
                   }}>
                          <h2>{todos.id}</h2>
                <h2>{todos.title}</h2>
                <h2>{todos.contents}</h2>
                <h2>{todos.isDone.toString()}</h2>
                   </div>
                })}
            </form>
        </main>
        <footer style={{
          backgroundColor:"red",
          padding:"10px",
        }}> 푸터공간
        </footer>
      </>
  )
}
export default App;
