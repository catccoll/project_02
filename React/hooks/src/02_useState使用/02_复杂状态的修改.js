import React, { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState(["kobe", "liLei"]);

  const [student, setStudent] = useState([
    { id: 110, name: "李四", age: 20 },
    { id: 111, name: "网二", age: 25 },
    { id: 112, name: "王五", age: 30 },
  ]);
  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button onClick={(e) => setFriends([...friends, "saigao"])}>
        添加朋友
      </button>
      <button onClick={(e) => addFriend()}>添加新朋友 </button>
      <ul>
        {student.map((item, index) => {
          return (
            <li key={item.id}>
              {item.name} : {item.age}{" "}
              <button onClick={(e) => changeAge(index)}>年龄+1</button>
            </li>
          );
        })}
      </ul>

      {/* <button onClick={e=>addFriend}>添加好朋友</button> */}
    </div>
  );
  //   错误的做法
  function addFriend() {
    friends.push("hmm");
    setFriends(friends);
  }
  function changeAge(index) {
    const newStudent = [...student];
    newStudent[index].age += 1;
    setStudent(newStudent);
  }
}
