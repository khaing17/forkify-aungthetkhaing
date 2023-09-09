// @ts-ignore
import icons from 'url:../../img/icons.svg';
import View from './View';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _msg = 'Recipe was successfully uploaded.';

  constructor() {
    super();
    this._addHandlerShowModal();
    this._addHandlerHideWindow();
  }

  toggleModal() {
    this._overlay?.classList.toggle('hidden');
    this._window?.classList.toggle('hidden');
  }

  _addHandlerShowModal() {
    this._btnOpen?.addEventListener('click', this.toggleModal.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose?.addEventListener('click', this.toggleModal.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement?.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
  _generateMarkup() {}
}

export default new AddRecipeView();
