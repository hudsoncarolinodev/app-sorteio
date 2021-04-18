<template>
   <div class="input-model-nomes">
       {{sorteioEstado}}
        <label for="nomes">Adicione os nomes</label>
        <textarea v-on:keypress="pegarNomes" id="nomes" 
        placeholder="Adicione os nomes separados por vírgula (João, Maria, José)"></textarea>
    </div>
</template>

<script>
export default {
 props: ['sorteioEstado'],

data(){
    return {
        nomes:"",
        listaNomes:[],
    }
},
methods:{
    pegarNomes(e){
        this.nomes = e.target.value
     
    },
    tratarNomes(){
       console.log(this.nomes.split(","))
    }
},
watch:{
    sorteioEstado(novo){
        if(novo){
            this.tratarNomes()
        }
    }
}

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
