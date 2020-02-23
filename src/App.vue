<template>
  <v-app>
    <Header></Header>
      <router-view></router-view>
  </v-app>
</template>

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
