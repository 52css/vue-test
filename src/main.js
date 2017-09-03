/**
 * @Author: weijie
 * @Date:   2017-09-03T08:20:23+08:00
 * @Email:  weijie@rongyi.com
 * @Filename: main.js
 * @Last modified by:   weijie
 * @Last modified time: 2017-09-03T18:10:40+08:00
 */



import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'

Vue.filter('reverseStr', function(value) {
  return value.split('').reverse().join('')
});

Vue.filter('keyToVal', function(value, obj, keyName, valName) {
  if ($.type(obj) === 'object') {
    return obj[value] || '';
  } else if ($.type(obj) === 'array') {
    for (let i = 0, len = obj.length; i < len; i ++ ) {
      let item = obj[i];
      keyName = keyName || 'id';
      valName = valName || 'label';

      if (item[keyName] === value) {
        return item[valName];
      }
    }
    return '';
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
