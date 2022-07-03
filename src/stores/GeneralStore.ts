import { observable, runInAction, makeObservable } from "mobx";
type tslotOptions = {
  [key: string]: string[];
};

class GeneralStore {
  slots: tslotOptions = { morning: [], afternoon: [], evening: [] };

  constructor() {
    makeObservable(this, {
      slots: observable,
    });
  }

  fetchSlots = (date: string) => {
    let slotList = [
      ["10:00 am", "10:15 am", "10:30 am", "10:45 am", "11:00 am"],
      ["12:00 pm", "12:15 pm", "12:30 pm", "12:45 pm", "01:00 pm"],
      ["08:00 pm", "08:15 pm", "08:30 pm", "08:45 pm", "09:00 pm"],
    ];
    runInAction(() => {
      this.slots = {
        morning: slotList[Math.floor(Math.random() * slotList.length)],
        afternoon: slotList[Math.floor(Math.random() * slotList.length)],
        evening: slotList[Math.floor(Math.random() * slotList.length)],
      };
    });
  };
}

const generalStore = new GeneralStore();
export default generalStore;
