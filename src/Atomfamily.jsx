import React from "react";
import { atom, RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomfamily } from "./atoms";

// const tododAtom = atom({
//   key: "todoAtom",
//   default: {
//     id: 1,
//     title: "go to gym",
//     description: "hit the gym from 7-9 days",
//   },
// });
function Atomfamily() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={1} />
      <Todo id={1} />
      <Todo id={3} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomfamily(id));
  return (
    <>
      <h3>{currentTodo.title}</h3>
      <h3>{currentTodo.description}</h3>
    </>
  );
}

export default Atomfamily;
