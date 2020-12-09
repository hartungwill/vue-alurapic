<template>
    <button @click="disparaAcao()" class="botao" :class="estiloClass" :type="tipo">{{rotulo}} </button>
</template>
['tipo', 'rotulo', 'confirmacao', 'estilo']
<script>
    export default {
        props: {

            tipo:{
                required: true,
                type: String
            },

            rotulo:{
                required:true,
                type:String
            },

            confirmacao: Boolean,
            estilo: String
        },
        methods: {
            disparaAcao(){

                if(this.confirmacao){
                    if (confirm('Confirma operação?')){
                        this.$emit('MetodoCustom', 'calopsita');
                    }
                    return;
                } 

                this.$emit('MetodoCustom', 'calopsita');
            }
        },

        computed:{
            estiloClass(){
                // se o valor é padrão ou não passou nada para estilo
                if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';

                if(this.estilo == 'perigo') return 'botao-perigo';
            }
        }
    }
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>