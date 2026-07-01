<template>
  <div>
    <h1>Menu</h1>
    <div id="scroll-horizontal">
<<<<<<< HEAD
      <div class="card-acai" v-for="acai in listaBasesAcai" :key="acai.id">
        <div class="foto-acai">
          <img :src="acai.foto" :alt="acai.nome" />
        </div>
        
        <div class="card-coluna">
          <p id="nome-content">{{ acai.nome }}</p>
          <p id="preco-content">R$ {{ acai.valor }},00</p>
          <p id="descricao-content" class="descricao">{{ acai.descricao }}</p>
          
          <button class="botao-selecionar" @click="selecionarAcai(acai)">
            Selecionar
          </button>
=======
      <div
        id="card-content"
        v-for="burguer in listaMenuHamburgues"
        :key="burguer.id"
      >
        <div id="card-linha">
          <div class="foto-hamburguer">
            <img :src="burguer.foto" alt="nome do burguer" />
            <div class="card-coluna">
              <p id="nome-content">{{ burguer.nome }}</p>
              <p id="preco-content">R$ {{ burguer.valor }},00</p>
              <p id="descricao-content">{{ burguer.descricao }}</p>
              <button @click="selecionarBurguer(burguer)">Selecionar</button>
            </div>
          </div>
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuView",
  data() {
    return {
<<<<<<< HEAD
      listaBasesAcai: [],
=======
      listaMenuHamburgues: [],
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
    };
  },
  methods: {
    async consultarMenu() {
      const response = await fetch(`${this.$apiUrl}/menu`);
      const dados = await response.json();
<<<<<<< HEAD
      this.listaBasesAcai = dados.bases_acai || [];
      console.log(this.listaBasesAcai);
    },
    selecionarAcai(acaiSelecionado) {
      const param = JSON.stringify(acaiSelecionado);
      const acaiJson = encodeURIComponent(param);
      this.$router.push({ path: "/config", query: { acai: acaiJson } });
    },
=======
      this.listaMenuHamburgues = dados.burgues;
      console.log(this.listaMenuHamburgues);
    },
    selecionarBurguer(burguerSelecionado){
        const param = JSON.stringify(burguerSelecionado);
        const burguerJson = encodeURIComponent(param);
        this.$router.push({path: '/config', query: {burguer : burguerJson}});
    }
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
  },
  mounted() {
    this.consultarMenu();
  },
};
</script>
<<<<<<< HEAD

<style scoped>
=======
<style scoped>
#card-content {
  display: inline-block;
  width: 280px;
  min-height: 500px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 4px 8px #444;
  position: relative;
  overflow: hidden;
}

>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
#scroll-horizontal {
  flex: 1;
  overflow-x: auto;
  white-space: nowrap;
  width: 700px;
  margin: 0 auto;
  box-shadow: inset -10px 0px 15px -15px grey;
}

<<<<<<< HEAD
.card-acai {
  display: inline-flex;
  flex-direction: column;
  width: 280px;
  min-height: 520px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 4px 8px #444;
  overflow: hidden;
  background-color: white;
  vertical-align: top;
}

.foto-acai img {
  width: 100%;
  object-fit: cover;
  max-height: 200px;
}

.card-coluna {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
}

#nome-content {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 12px 5px; 
  line-height: 1.2;  
  min-height: 48px;  
  display: flex;
  align-items: center;
  justify-content: center;
}
=======
.foto-hamburguer img {
  width: 100%;
  object-fit: cover;
  max-height: 200px;
  border-radius: 10px 0 0;
}

#nome-content {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin: 12px;
}

>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
#preco-content {
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  color: green;
  margin: 16px;
}

<<<<<<< HEAD
.descricao {
=======
#descricao-content {
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
  font-size: 16px;
  text-align: left;
  color: gray;
  margin: 16px;
<<<<<<< HEAD
  flex-grow: 1; /* Faz a descrição preencher o espaço disponível */
  white-space: pre-line;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.botao-selecionar {
  margin-top: auto; /* Empurra o botão para a base do card */
=======
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}

.card-coluna button {
  margin-top: auto;
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
  padding: 10px;
  background-color: rgb(53, 108, 121);
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  width: 80%;
<<<<<<< HEAD
  margin: 20px auto;
=======
  margin: 20px;
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
  cursor: pointer;
  transition: 0.5s;
}

<<<<<<< HEAD
.botao-selecionar:hover {
  background-color: transparent;
  color: darkslategray;
=======
.card-coluna button:hover {
  background-color: transparent;
  color: darkslategray;
  border-radius: 8px;
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
  border: solid 1px rgb(53, 108, 121);
}
</style>