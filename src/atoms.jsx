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
