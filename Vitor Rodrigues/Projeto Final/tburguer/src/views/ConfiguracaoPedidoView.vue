<template>
<<<<<<< HEAD
  <div>
    <h1>Configuração do Pedido</h1>
    <pedido-component-vue :baseAcai="this.baseAcaiSelecionada" />
  </div>
=======
    <div>
        <h1>Configuração do Pedido</h1>
        <pedido-component-vue :burguer="this.hamburguerSelecionado"/>
    </div>
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
</template>

<script>
<<<<<<< HEAD
import PedidoComponentVue from "@/components/PedidoComponent.vue";

export default {
  name: "ConfiguracaoPedidoView",
  components: {
    PedidoComponentVue,
  },
  data() {
    return {
      // Renomeado para fazer sentido com o negócio de açaí
      baseAcaiSelecionada: null,
    };
  },
  mounted() {
    const query = this.$route.query;
    // Mudamos o parâmetro esperado da URL de 'burguer' para 'acai'
    if (query.acai) {
      const decodeAcai = JSON.parse(decodeURIComponent(query.acai));
      this.baseAcaiSelecionada = decodeAcai;
    }
  },
};
=======
import PedidoComponentVue from '@/components/PedidoComponent.vue';

    export default {
        name: 'ConfiguracaoPedidoView',
        components: 
        { PedidoComponentVue,
            
         },
        data() {
            return {
                hamburguerSelecionado: null,
            };
        },
        mounted() {
            const query = this.$route.query;
            if(query.burguer) {
                const decodeBurguer = JSON.parse(decodeURIComponent(query.burguer));
                this.hamburguerSelecionado = decodeBurguer;
            }
        }
    };
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
</script>

<style scoped></style>