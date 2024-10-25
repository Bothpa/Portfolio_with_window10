import { create } from "zustand";

interface TaskBarStore {
  isLogin: boolean;
  
  setLogin: () => void;
  setLogout: () => void;
}

const TaskBarStore = create<TaskBarStore>((set) => ({
  isLogin: false,

  setLogin: () => set({}),
  setLogout: () => set({}),
}));

export default TaskBarStore;
