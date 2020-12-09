<template>
  <div id="home">
    <h1 v-meu-transform.animate="5">{{ msg }}</h1>
    
    <input type="search" class="filtro" @input= "filtro = $event.target.value" placeholder="filtre pelo título da foto">
 
    <ul class="lista-fotos">

      <li class="lista-fotos-item" v-for="foto in fotosComFiltro">
        <meu-painel :title="foto.titulo">
          <!-- <imagem-responsiva slot="painel-individual" :url="foto.url" :title="foto.titulo" :id="foto._id" /> -->
           <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :title="foto.titulo" :id="foto._id" />
          <meu-botao rotulo="remover" 
          tipo="button" 
          @MetodoCustom="remover($event, foto)" 
          :confirmacao="false"
          estilo="perigo"
           />
        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from '../shared/painel/Painel.vue';
  import ImagemResponsive from '../shared/imagem-responsiva/ImagemResponsiva'
  import Botao from '../shared/botao/Botao';

  export default {
    
    components: {
      'meu-painel':Painel,
      'imagem-responsiva':ImagemResponsive,
      'meu-botao':Botao
    },
    
    name: 'app',

    data () {
      return {
        msg: 'Cursinho simples Alura',
        fotos:[],
        filtro: ''
      }
    },

methods:{
  remover($event, foto){
    alert($event);
    alert('Excluindo : ' + foto.titulo + '...');
  }
},

    computed: {
      fotosComFiltro(){
        if (this.filtro){
            let exp = new RegExp (this.filtro.trim(), 'i');
            return this.fotos.filter(foto => exp.test(foto.titulo));
        } else{
          return this.fotos;
        }
      }
    },

    created(){
      
      let _fotosArr = [];

      //get fotos
      this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err))
      .then(fotos => Insertfotos(fotos), err => console.log(err));

    }
  }

  function Insertfotos(fotos){
    const pug = {
      grupo: 99,
      titulo: "Pug",
      url: "./src/assets/images/pug.jpg",
      _id: "hSHVxI2cJ3BHywa3"
    };

    const img2 = {
      grupo: 98,
      titulo: "Pirata",
      url: "./src/assets/images/pirata.png",
      _id: "pirate2cJ3BHywa4"
    };
    
    const img3 = {
      grupo: 97,
      titulo: "logo",
      url: "./src/assets/images/logo.png",
      _id: "logoXe2cJ3BHywa5"
    };

    const img4 = {
      grupo: 96,
      titulo: "Avatar pug",
      url: "./src/assets/images/avatar.jpg",
      _id: "whgoXe2cJ3BHywa5"
    };

    fotos.push(pug);
    fotos.push(img2);
    fotos.push(img3);
    fotos.push(img4);

    return fotos;
  }
</script>

<style>
  
  h1, h2 {
    font-weight: normal;
  }

  .titulo {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
