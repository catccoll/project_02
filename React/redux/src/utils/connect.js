import React, { PureComponent } from "react";
import { StoreContext } from "./context";
// import store from "../store/index";

export function connect(mapStateToProps, mapDispatchToProp) {
  return function (WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      state = {
        storeState: mapStateToProps(this.context.getState()),
      };
      componentDidMount() {
        this.unSubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState()),
          });
        });
      }
      componentWillUnmount() {
        this.unSubscribe();
      }
      render() {
         
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProp(this.context.dispatch)}
          />
        );
      }
    }
    EnhanceComponent.contextType = StoreContext;
 
    return EnhanceComponent;
  };
}

// export function connect(mapStateToProps, mapDispatchToProp) {
//     return function (WrappedComponent) {
//        return class EnhanceComponent extends PureComponent {
//          state = {
//            storeState: mapStateToProps(store.getState()),
//          };
//          componentDidMount() {
//            this.unSubscribe = store.subscribe(() => {
//              this.setState({
//                storeState: mapStateToProps(store.getState()),
//              });
//            });
//          }
//          componentWillUnmount() {
//            this.unSubscribe();
//          }
//          render() {
//            return (
//              <WrappedComponent
//                {...this.props}
//                {...mapStateToProps(store.getState())}
//                {...mapDispatchToProp(store.dispatch)}
//              />
//            );
//          }
//        };

//      };
//    }
