import { atom, atomFamily, selector } from "recoil";
import { TODOS } from "./todos";
export const newtworkAtom = atom({
  key: "newtworkAtom",
  default: 76,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationsAtom",
  default: 76,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 76,
});

export const meAtom = atom({
  key: "meAtom",
  default: 0,
});

// export const notifications = atom({
//   key: "notificationAtom",
//   default: {
//     network: 4,
//     jobs: 6,
//     messaging: 3,
//     notification: 7,
//   },
// });

export const notifications = atom({
  key: "notificationAtom",
  //   default: async () => {
  //     const res = await axios.get("https://sum-server.100xdevs.com/notification");
  //     return res.data;
  //   },
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      //setting an artificial delay here
      //   screen will be blank white for 5 seconds
      await new Promise((r) => setTimeout(r, 5000));
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notification"
      );
      return res.data;
    },
  }),
});
export const totalSelector = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const allNotification = get(notifications);
    return (
      allNotification.messaging +
      allNotification.jobs +
      allNotification.notification +
      allNotification.network
    );
  },
});
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkCount = get(newtworkAtom);
    const jobListCount = get(jobsAtom);
    const messageCount = get(messageAtom);
    const notificationCount = get(notificationAtom);

    return notificationCount + jobListCount + networkCount + messageCount;
  },
});

// const tododAtom = atom({
//   key: "todoAtom",
//   default: {
//     id: 1,
//     title: "go to gym",
//     description: "hit the gym from 7-9 days",
//   },
// });

// it just a way to create multiple atoms
export const todosAtomfamily = atomFamily({
  key: "todosfamily",
  //it tells which should be rendered
  //   if id =1 below logic will run for id =1
  //   if id =2 , below logic will run for id =2
  default: (id) => {
    let foundTodo = null;

    for (let i = 0; i < TODOS.length; i++) {
      if (TODOS[i].id === id) {
        foundTodo = TODOS[i];
      }
    }
    return foundTodo;
  },

  // same as above
  // default: (id) => {
  //   return TODOS.find((X) => X.id === id);
  // },
});
