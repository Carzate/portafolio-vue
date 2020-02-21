<template>
  <v-app>
    <Header></Header>
    <transition name="fadeDownBig">
      <router-view></router-view>
    </transition>
    
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
