import React,{useRef,PureComponent} from 'react'

export default function UseRef() {
      
function changeDom(){
  titleRef.current.innerHTML='我很好'
 inputRef.current.focus()
 console.log(textRef.current);
 console.log(text2Ref.current);
}

    const titleRef=useRef()//useRef只能使用在标签上，或者自己的类子组件上
    const inputRef=useRef()
    const textRef=useRef()
    const text2Ref=useRef()
    return (
        <div>
            <h2  ref={titleRef}>1</h2>
            <input ref={inputRef} type="text" />
            <TestCpn ref={textRef} />
            {/* <TestCpn2 ref={text2Ref}/> */}
            <button onClick={e=>changeDom()}>修改DOM</button>
        </div>
    )
   
}




class TestCpn extends PureComponent {
    render() {
        return (
            <div>
                <h2>222</h2>
            </div>
        )
    }
}


function TestCpn2() {
    return (
        <div>
            <h2>666666666666</h2>
        </div>
    )
}
