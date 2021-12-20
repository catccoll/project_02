import React, { PureComponent } from "react";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import axios from "axios";
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
export default class App extends PureComponent {
  state = {
    divRef: React.createRef(),
    value: [],
    input1:'',
    input2:''
  };
  render() {
    return (
      <div>
        <input type="text" name="" id=""  value={this.state.input1} onChange={(e)=>{this.setState({input1:e.target.value})}} />
        <input type="text" name="" id=""  value={this.state.input2} onChange={(e)=>{this.setState({input2:e.target.value})}} />
        <button onClick={()=>{this.change()}}>修改数据</button>
        <div ref={this.state.divRef} style={{ width: 500, height: 500 }}></div>
      </div>
    );
  }
  change(){
     
      const newArray=[...this.state.value]
      newArray[parseInt(this.state.input1-1)]=parseInt(this.state.input2)
  console.log(newArray);
      this.setState({
          value:newArray
      },()=>{
          this.init()
      })
  }
  init(){
    var myChart = echarts.init(this.state.divRef.current);
    this.option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {},
      series: [
        {
          data:this.state.value,
          type: "line",
        },
      ],
    };
  
    this.option && myChart.setOption(this.option,true);
  }
  async componentDidMount() {
    const res = await axios.get("/api/arr");
    this.setState({ value: res.data });
    this.init()
  }
}
