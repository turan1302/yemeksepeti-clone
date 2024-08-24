import { action, makeAutoObservable, observable } from "mobx";

class FavouriteStore{
  activeMenu = "restoran";

  constructor() {
    makeAutoObservable(this,{
      activeMenu : observable,
      changeActiveMenu : action
    });
  }

  changeActiveMenu = (menu)=>{
    this.activeMenu = menu;
  }
}

export default new FavouriteStore();
