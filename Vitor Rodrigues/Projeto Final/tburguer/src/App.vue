<template>
  <div>
    <NavBarComponent />
<<<<<<< HEAD
    <BannerComponent />
    <div v-if="$route.path === '/'">
      <VitrineComponent />
    </div>
    
    <router-view />
=======
    <BannerCompanent/>
    <router-view />
    
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
  </div>
</template>

<script>
<<<<<<< HEAD
import NavBarComponent from "./components/NavBarComponent.vue";
import BannerComponent from "./components/BannerComponent.vue";
import VitrineComponent from './components/VitrineComponent.vue';
=======
import BannerCompanent from "./components/BannerCompanent.vue";
import NavBarComponent from "./components/NavBarComponent.vue";
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155

export default {
  name: "App",
  components: {
    NavBarComponent,
<<<<<<< HEAD
    BannerComponent,
    VitrineComponent,
=======
    BannerCompanent,
    
    
>>>>>>> 77b102aa185a10e650b8bd32a6b6d5855491b155
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>