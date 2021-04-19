<template>
  <main>
    <h3>{{titulo}}</h3>
    <p>{{subTitulo}}</p>
    <hr>

    <label hidden for="selecaoNome">Selecionar o sorteio por nome</label>
    <input hidden type="checkbox" checked id="selecaoNome">

    <div class="formulario">
      <app-input-numeros 
        :sorteioEstado="sorteioEstado" 
      />
      <app-input-nomes 
        :sorteioEstado="sorteioEstado"
        @pegarLsitaNomes="listaSorteio = $event"
      />
      <app-resultados 
        :nomeSorteado="nomeSorteado"
        @sorteioEstado="sorteioEstado = $event"
      />

      <button @click="sortear()" id="buttonSortear">{{btnNomeSortear}}</button>
      <button @click="limpar()" id="buttonLimpar">{{btnNomeLimpar}}</button>
    </div>
    
  </main>
</template>

<script>

import InputNumeros from "../components/InputNumeros";
import InputNomes from "../components/InputNomes";
import Resultados from "../components/Resultados";

export default {
  components:{
    "app-input-numeros":InputNumeros,
    "app-input-nomes":InputNomes,
    "app-resultados":Resultados,
  },
  
  data(){
    return {
      sorteioEstado: false,
      titulo:"Sortear números",
      subTitulo:"Crie o sorteio de números facilmente utilizando essa opção, você poderá salvar o sorteio e compartilhar o link com outras pessoas.",
      btnNomeSortear: "Sortear",
      btnNomeLimpar: "Limpar",
      listaSorteio:[],
      numeroSorteio: 0,
      nomeSorteado: ""
    }
  },
  methods:{
    sortear(){
      this.sorteioEstado = true;
    },
    gerarsoteiroAleatorio(numeroInicial = 0,numeroFinal){
     this.numeroSorteio = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial
    },
    limpar(){
     this.sorteioEstado = false;
    },
    resultato(){
      this.nomeSorteado = this.listaSorteio[this.numeroSorteio]
    }
  },
  watch:{
    listaSorteio(arrayNomes){
      const arrayCumprimento =  arrayNomes.length
      this.gerarsoteiroAleatorio(0,arrayCumprimento-1)
    },
    numeroSorteio(){
      this.resultato()
    }
  }
}
</script>

<style scoped>
    main{
        background-color: #fff;
        color:gray;
        width: 80%;
        max-width: 550px;
        padding: 30px;
        margin: 0 auto;
        box-shadow: 5px 5px 5px grey;
        border-radius: 3px;
        position: relative;
        overflow: hidden;
    }

    main h3{
        font-weight: 400;
        font-size: 25px;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 10px;
    }
    main p{
        text-align: center;
        margin-bottom: 20px;
    }
    main>label{
        padding: 10px;
        cursor: pointer;
      
    }
    main>input{
        float: left;
        cursor: pointer;
    }
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
