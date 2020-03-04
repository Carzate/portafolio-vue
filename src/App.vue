<template>
  <v-app>
    <Header></Header>
      <v-content>
         <router-view></router-view>
      </v-content>
  </v-app>
</template>

<style>
  @import './assets/styles/styles.css';
</style>

<script>
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import ContenidoHome from './components/ContenidoHome';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Header,
    ContenidoHome
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .theme--light.v-footer {
    background-color: transparent !important;
  }
</style>