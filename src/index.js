'use strict';
/* global shoppingList, store, api */
import $ from 'jquery';
// import shoppingList from 'shopping-list';
// import store from 'store';
// import api from 'api';
// import './styles/index.css';
console.log('adding hot reload to console log');



$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message))
});


