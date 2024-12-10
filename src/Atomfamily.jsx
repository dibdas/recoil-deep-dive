import React, { useEffect } from "react";
import {
  atom,
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
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
      <UpdateComponent />
      <Todo id={1} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function UpdateComponent() {
  const updateTodo = useSetRecoilState(todosAtomfamily(2));

  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: "2",
        title: "new todo updated",
        description: " new todo description",
      });
    }, 5000);
  }, []);
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
