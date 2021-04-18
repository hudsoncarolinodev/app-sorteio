<template>
  <div>
    <button @click="sortear()" id="buttonSortear">{{btnNomeSortear}}</button>
    <button @click="limpar()" id="buttonLimpar">{{btnNomeLimpar}}</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      btnNomeSortear: "Sortear",
      btnNomeLimpar: "Limpar",
    }
  },
  methods:{
    sortear(){
      this.$emit('sortear',true)
    },
    limpar(){
      this.$emit('limpar',true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button{
    background-color: #1480fa;
    border: none;
    color:#fff;
    text-transform: uppercase;
    padding: 10px;
    font-weight: bold;
    cursor:pointer;
}
</style>
