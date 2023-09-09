import View from './View.js';
import previewView from './previewView.js';
// @ts-ignore
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMsg = 'No recipes found for your query! Please try again ;)';
  _msg = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join();
  }
}

export default new ResultsView();
