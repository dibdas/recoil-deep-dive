import { useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import reactLogo from "./assets/react.svg";
import Atomfamily from "./Atomfamily";
import {
  jobsAtom,
  messageAtom,
  newtworkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
      <Atomfamily />
    </RecoilRoot>
  );
}

function MainApp() {
  const networknotificationCount = useRecoilValue(newtworkAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagesCount = useRecoilValue(messageAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <>
      <div>
        <button>Home</button>
        <button>my network {networknotificationCount}</button>
        <button>notifications {notificationCount}</button>
        <button>jobs {jobsCount}</button>
        <button>messages {messagesCount}</button>
        <button>me {totalNotificationCount}</button>
      </div>
    </>
  );
}

export default App;
