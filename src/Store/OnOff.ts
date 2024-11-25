import { create } from "zustand";

interface OnOffStore {
  isFullScreen: boolean;
  isBoot: boolean;
  
  setIsFullScreen: (value: boolean) => void;
  setIsBoot: (value: boolean) => void;
}

const OnOff = create<OnOffStore>((set) => ({
  isFullScreen: true,
  isBoot: false,
  
  setIsFullScreen: (value: boolean) => set({isFullScreen: value}),
  setIsBoot: (value: boolean) => set({isBoot: value}),
}));

export default OnOff;
