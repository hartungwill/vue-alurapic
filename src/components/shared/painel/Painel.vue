<template>
    <div class="painel">

      <h2 @click="visivel= !visivel" class="painel-titulo">{{title }}</h2>
      <transition name="painel-fade">
        <div class="painel-conteudo" v-show="visivel">
          <slot></slot>
          <!-- <slot name="painel-individual" ></slot> -->
        </div>
      </transition>
      
    </div>
</template>

<script>

export default {
    props: ['title'],

    data(){
      return {
        visivel:true
      }
    }
}
</script>
<style scoped>
 .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

* {
    box-shadow: 5px 5px 5px black;
}

.painel-fade-enter, .painel-fade-leave-active {
  opacity: 0
}

.painel-fade-enter-active, .painel-fade-leave-active {
  transition: opacity .4s
}

.painel-conteudo {
    overflow: hidden;
  }
</style>