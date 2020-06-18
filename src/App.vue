<template>
  <div id="app">
    <div class="alert alert-success" >
      <h1>Consumiendo API de Coins</h1>
    </div>
    <coinList/>

  </div>
</template>

<script>
import CoinList from './components/coinList.vue'

export default {
  name: 'App',
  components: {
    CoinList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background: #eee;
}
</style>
