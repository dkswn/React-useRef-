import React, {useState} from 'react';

function App(){
    const [todos, setTodos] = useState([{
        id:1,
        title:"제목1",
        contents:"내용1",
        isDone:false,
    },
        {
        id:2,
        title:"제목1",
        contents:"내용1",
        isDone:false,
    },
        {
        id:3,
        title:"제목1",
        contents:"내용1",
        isDone:false,
    },
        {
        id:4,
        title:"제목1",
        contents:"내용1",
        isDone:false,
    }
    ]);
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const titleOnchangeHandler = (event) => setTitle(event.target.value);
    const ContentsOnchangeHandler = (event) => setContents(event.target.value);

    const
    return (
        <>
        <header style={{
            backgroundColor:"yellow",
            margin:"20px",
            padding:"20px"
        }}> <p>해더입니다</p>
            <input value={title} onChange={titleOnchangeHandler}/>
            <input value={contents} onChange={ContentsOnchangeHandler}/>
            <button>확인</button>
        </header>

        <main style={{
            backgroundColor:"red",
            margin:"20px",
            padding:"20px"
        }}> <h2>할일 목록</h2>
            {}
        </main>
            <footer style={{
                backgroundColor:"aqua",
                margin:"20px",
                padding:"20px",
            }}> <h3>푸터입니다</h3>

            </footer>
            </>
    )
}

export default App;