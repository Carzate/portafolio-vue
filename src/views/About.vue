<template>
  <div class="about">
    <v-container>
      <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
        <p class="heading"> Mi trabajo</p>
        <h3 class="acerca-home-title mb-9">Habilidades</h3>
        <v-row>
          <v-col cols="12" md="6">
            <img class="centar" src="@/assets/images/img.jpg" width="400px" alt="">
          </v-col>
          <v-col cols="12" md="6">
        <v-simple-table class="d-flex">
          <tbody>
            <tr v-for="item in skills" :key="item.skill">
            <th><h3>{{item.skill}}</h3> </th> 
            <th><v-rating small v-bind:value="item.valor" readonly color="black" background-color="grey"></v-rating> </th> 
            </tr>
          </tbody>
        </v-simple-table>
        </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import ContenidoHome from '@/components/ContenidoHome.vue'

export default {
  name: 'About',
  data () {
    return {
      skills: [
        {skill: 'HTML5', valor: 5 },
        {skill: 'JavaScript', valor: 4},
        {skill: 'CSS3', valor: 5},
        {skill: 'Vue.js', valor: 4},
        {skill: 'Wordpress', valor: 5},
        {skill: 'Git', valor: 4},
        {skill: 'Photoshop', valor: 3},
        {skill: 'Responsive Web Design', valor: 4},
        {skill: 'E-commerce', valor: 4},

      ]
    }
  },
  components: {
    ContenidoHome
  }
}
</script>

<style>
  th {
    border-bottom: transparent !important;
  }
  .theme--light.v-footer {
    background-color: transparent !important;
  }
</style>