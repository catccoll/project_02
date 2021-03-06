import React, { PureComponent } from "react";
import "./CSSTransition.css";
import { CSSTransition } from "react-transition-group";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  state = {
    isShow: true,
  };
  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}>显示/隐藏</button>
        {/* 必须加一个timeout属性  不然会报错  in传入的是一个不布尔值*/}
        <CSSTransition
          unmountOnExit={false} //如果设置为true，name该组件会在执行退出动画结束后被移除掉
          in={this.state.isShow} //当in为true时，触发进入状态，会添加-enter，-enter-active的class 当动画执行后，会移除这个两个class，增加 enter-done的class
          classNames="card" //动画的名称
          timeout={300} //过渡动画的时间
          appear={true} //是否在初次进入添加动画
          onEnter={(el) => console.log(el, "开始进入")} //生命个铺子
          onEntering={(el) => console.log(el, "正在进入")}
          onEntered={(el) => console.log(el, "进入完成")}
          onExit={(el) => console.log(el, "开始退出")}
          onExiting={(el) => console.log(el, "退出状态")}
          onExited={(el) => console.log(el, "退出完成")}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
  changeState() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
}
// 这个是动画的切换
