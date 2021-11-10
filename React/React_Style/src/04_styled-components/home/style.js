import styled from "styled-components";
// styled里面有一个div属性是,调用之后返回的是一个组件
const HomeWrapper= styled.div`
   font-size: 50px;
  color: red;
  .banner{
    background-color: blue;
    span{
      color: white;
      &.active{//这里表示的意思是在span里面寻找带有active类名
        color: red;
      }
      &:hover{
        color: pink;
      }
      &::after{
        content: 'bbbbbb';
      }
    }
    /* .active{
      color: brown;
    } */
  }
`;
const TitleWrapper=styled.h2`
text-decoration: underline;
color: ${props=>props.theme.themeColor};
font-size: ${props=>props.theme.fontSize};
`
export{HomeWrapper,TitleWrapper}