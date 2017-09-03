<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg | reverseStr }}</h1>
    <h1>keyToVal {{test | keyToVal(testObj)}}</h1>
    <h1>keyToVal {{test | keyToVal(testArr)}}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: '1',
      testObj: {
        '1': '111',
        '2': '222'
      },
      testArr: [{
        id: '1',
        label: '333'
      }, {
        id: '1',
        label: '333'
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
