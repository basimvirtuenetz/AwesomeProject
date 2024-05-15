import {observable, action} from 'mobx';

const API_KEY = 'j3ErGd52ZYB2T8X-J81S-zM8HuO5KJr3K5qPJVLI_Cg';

class Store {
  @observable
  text = '';

  @action
  updateText = (text: string) => {
    this.text = text;
  };

  @observable
  data = null;

  @action
  searchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=1&query=${this.text}&orientation=landscape`,
    )
      .then(response => response.json())
      .then(data => this.setData(data));
  };

  @action
  setData = (data: any) => {
    this.data = data;
  };
}

export default new Store();
