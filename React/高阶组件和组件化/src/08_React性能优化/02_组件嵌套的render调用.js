import React, { Component } from 'react'
// header
    class Header extends Component {
        render() {
            console.log("Header render");
            return (
                <div>
                    <h1>我是header组件</h1>
                    <Banner/>
                </div>
            )
        }
    }
    class Banner extends Component {
        render() {
            console.log("Banner render");
            return (
                <div>
                    <h5>我是Banner组件</h5>
                </div>
            )
        }
    }
    // main
    class Main extends Component {
        render() {
            console.log("Main render");
            return (
                <div>
                    <h1>我是Main组件</h1>
                </div>
            )
        }
    }

    // footer
    class Footer extends Component {
        render() {
            console.log("Footer render");
            return (
                <div>
                    <h1>我是Footer组件</h1>
                </div>
            )
        }
    }

    export default class App extends Component {
        state={
            counter:0
        }
        render() {
            console.log("App render");
            return (
                <div>
                    <h2>当前计数:{this.state.counter}</h2>
                    <button onClick={()=>{this.add()}}>+1</button>
                    <Header/>
                    <Footer/>
                    <Main/>
                </div>
            )
        }
        add(){
            this.setState({
                counter:this.state.counter+1
            })
        }
    }
