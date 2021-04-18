<template>
  <main>
    <h3>{{titulo}}</h3>
    <p>{{subTitulo}}</p>
    <hr>

    <label for="selecaoNome">Selecionar o sorteio por nome</label>
    <input type="checkbox" checked id="selecaoNome">

    <div class="formulario">
      <app-input-numeros />
      <app-input-nomes :sorteioEstado="sorteioEstado" />
      <app-controles 
      
      @sortear="pegarValor()" @limpar="limparCampo()"/>
      <app-resultados />
    </div>
  </main>
</template>

<script>

import InputNumeros from "../components/InputNumeros";
import InputNomes from "../components/InputNomes";
import Controles from "../components/Controles";
import Resultados from "../components/Resultados";

export default {
  components:{
    "app-input-numeros":InputNumeros,
    "app-input-nomes":InputNomes,
    "app-controles":Controles,
    "app-resultados":Resultados,
  },
  
  data(){
    return {
      sorteioEstado: false,
      titulo:"Sortear números",
      subTitulo:"Crie o sorteio de números facilmente utilizando essa opção, você poderá salvar o sorteio e compartilhar o link com outras pessoas."
      
    }
  },
  methods:{
    pegarValor(){
      this.sorteioEstado = true
      
    },
    limparCampo(){

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
     
</style>
