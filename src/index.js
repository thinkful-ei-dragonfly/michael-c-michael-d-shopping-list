import $ from 'jquery';
import api from './api';
import store from './store';
import shoppingList from './shopping-list';
import './index.css';

$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    // eslint-disable-next-line no-console
    .catch(err => console.log(err.message));
});


