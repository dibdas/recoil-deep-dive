import React, { useEffect } from "react";
import {
  atom,
  RecoilRoot,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
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
  // const currentTodo = useRecoilValue(todosAtomfamily(id));
  // const [currentTodo,setCurrentTodo]= useRecoilValue(todosAtomfamily(id))
  // const [currentTodo, setCurrentTodo] = useRecoilStateLoadable(
  //   todosAtomfamily(id)
  // );
  // if you just need only the values
  const currentTodo = useRecoilValueLoadable(todosAtomfamily(id));
  //  currenttodo from the above {contents,state}
  console.log(currentTodo.state);
  // putting a checking while its loading or taking the time to fetch the data
  if (currentTodo.state.loading === "loading") {
    return <div>loading </div>;
  } else if (currentTodo.state.loading === "hasValue") {
    return (
      <>
        <h3>{currentTodo.title}</h3>
        <h3>{currentTodo.description}</h3>
      </>
    );
  } else if (currentTodo.state == hasError) {
    return (
      <div>
        {" "}
        <h3>{currentTodo.title}</h3>
        <h3>{currentTodo.description}</h3>
      </div>
    );
  }
  return (
    <>
      <h3>{currentTodo.title}</h3>
      <h3>{currentTodo.description}</h3>
    </>
  );
}

export default Atomfamily;
