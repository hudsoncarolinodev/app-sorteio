<template>
    <div class="resultado" id="painelResultado">
        <span id="btnFecharResultado">X</span>
        <h3>Resultado:</h3>
        <p id="resultado">1-2-3-4</p>
    </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.resultado{
    position: absolute;
    top: 0;
    left: -100%;
    background-color: rgb(4 20 62 / 89%);
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .5s;
}
.resultado span{
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    border-radius: 100%;
    border: solid 2px #fff;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
.resultado.mostrarResultado{
    left: 0;
    transition: .5s;
}

.resultado h3{
    font-weight: bold;
}

.resultado p{
    font-size: 26px;
    font-weight: bold;
}
</style>
