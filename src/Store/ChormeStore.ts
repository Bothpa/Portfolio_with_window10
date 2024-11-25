import { create } from "zustand";

interface ChromeStoreInterface {
  isChromeOn: boolean;
  url : string;
  
  setUrl: (urlp: string) => void;
  setChromeOn: () => void;
  setChromeOFF: () => void;
}

const ChromeStore = create<ChromeStoreInterface>((set) => ({
  isChromeOn: false,
  url: 'https://jungsonghun.iptime.org',
  
  setUrl: (urlp: string) => set({url:urlp}),
  setChromeOn: () => set({isChromeOn: true}),
  setChromeOFF: () => set({isChromeOn: false}),
}));

export default ChromeStore;

// http://jungsonghun.iptime.org:9982/proxy?url=
