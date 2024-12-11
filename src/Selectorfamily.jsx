import { atomFamily, selectorFamily } from "recoil";

export const todosAtomfamily = atomFamily({
  key: "todosfamily",
  //it tells which should be rendered
  //   if id =1 below logic will run for id =1
  //   if id =2 , below logic will run for id =2
  default: selectorFamily({
    key: "todoselectorfamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdev.com/todod?id=%${id}`
        );
        return res.data.todo;
      },
  }),
});
