<template>
  <div class="input-model-numeros">
        <label for="qtdResultados">O resultado terá quantos números?</label>
        <input type="number" placeholder="2" name="qtdResultados" id="qtdResultados">
        
        <label for="inBetweenNumber">Entre</label>
        <input type="number" placeholder="1" name="inBetweenNumber" id="inBetweenNumber">
        
        <label for="andNumber">e</label>
        <input type="number"  placeholder="10" name="andNumber" id="andNumber">
    </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main .formulario .input-model-nomes{
        display: none;
    }
    main>input[type="checkbox"]:checked ~ .formulario .input-model-nomes{
        display: block;
    }
    main>input[type="checkbox"]:checked ~ .formulario .input-model-numeros{
        display: none;
    }
    main .formulario label{
        display: block;
        font-size: 14px;
        font-weight: 400;
    }
    main .formulario input, main .formulario textarea{
        display: block;
        padding: 10px;
        width: 100%;
        height: 40px;
        margin:10px 0
    }
    main .formulario textarea{
        min-height: 150px;
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
