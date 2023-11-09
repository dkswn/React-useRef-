import React, {useRef, useEffect, useState} from "react";
import './App.css';

function App() {
    const idRef = useRef('');
    const pwRef = useRef('');
    const [id ,setId] = useState('');


    useEffect(() => {
        idRef.current.focus();
    }, []);

    useEffect(() => {  // 대박 신기 id길이가 10개가 되면 포커싱이 비밀번호 입력창으로 바뀜
        if(id.length >= 10){
            pwRef.current.focus();
        }
    }, [id]);
    const IdinputHandler = ((event) => {
        // if(id.length >= 10) {
        //     pwRef.current.focus();
        // }
        setId(event.target.value)
    }
    )
    return (
        <>
            <div>
                아이디: <input  value={id}  onChange={IdinputHandler} type="text" ref={idRef} />
            </div>
            <div>
                비밀번호: <input type="password" ref={pwRef} />
            </div>
        </>
    );
}
export default App;