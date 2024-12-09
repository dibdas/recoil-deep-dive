import { atom, selector } from "recoil";

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
