<template>
   <div class="container rounded-sm">
     <section tabindex="0">
    <p v-if="isLoading">Cargando...</p>
    <table class="table table-dark table-striped table-bordered" v-else>
      <thead>
        <tr>
          <th>Simbolo</th>
          <th><input type="text" v-model="search" placeholder="Buscar por nombre" aria-label="Buscar..."></th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
         <tr v-for="a in filteredAssets" :key="a.id">
          <td>{{ a.symbol }}</td>
          <td>{{ a.name }}</td>
          <td>$ {{ parseFloat(a.priceUsd).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </section>
   </div>
</template>

<script>
import { getAssets } from '@/services/coincap'
export default {
  name: 'coinList',

  data () {
    return {
      search: '',
      assets: [],
      isLoading: true
    }
  },
  computed: {
    filteredAssets () {
      if (!this.search) {
        return this.assets
      }

      return this.assets
        .filter(a => a.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  },

  created () {
    getAssets()
      .then(({ data }) => {
        this.assets = data
        this.isLoading = false
      })
  }
}

</script>


<style scoped>
h3{
  color:blue
}
</style>
