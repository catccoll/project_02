import React, { PureComponent } from "react";

export default class Son extends PureComponent {
  state = {
    hobby: [],
  };
  render() {
    const { hobby } = this.state;
  
    return (
      <div>
        <label htmlFor="ping">
          {" "}
          乒乓球{" "}
          <input
            type="checkbox"
            id="ping"
            value="乒乓球"
            onChange={(e) => {
              this.setState({ hobby: [e.target.value, ...hobby] });
            }}
          />
        </label>
        <label htmlFor="lan">
          {" "}
          篮球{" "}
          <input
            type="checkbox"
            id="lan"
            value="篮球"
            onChange={(e) => {
              this.setState({ hobby: [e.target.value, ...hobby] });
            }}
          />
        </label>
        <label htmlFor="zu">
          {" "}
          足球{" "}
          <input
            type="checkbox"
            id="zu"
            value="足球"
            name="篮球"
            onChange={(e) => {
              this.setState({ hobby: [e.target.value, ...hobby] });
            }}
          />
        </label>
      <button onClick={()=>{this.btnClick()}}>提交爱好</button>
      </div>
    );
  }
  btnClick(){
    const {HobbyList}=this.props
    HobbyList(this.state.hobby)
  }
}
