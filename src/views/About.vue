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
            <th> <h3> <v-icon x-small>mdi-checkbox-blank-circle</v-icon> {{item.skill}}</h3> </th> 
            <th> <h3> <v-icon x-small>mdi-checkbox-blank-circle</v-icon>  {{item.skill2}} </h3> </th> 
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
        {skill: 'E-commerce', skill2: 'Shopify'},
        {skill: 'HTML5', skill2: 'CSS3' },
        {skill: 'JavaScript ES6', skill2: 'Vue.js' },
        {skill: 'Woocommerce', skill2: 'Wordpress'},
        {skill: 'Git', skill2: 'Photoshop'},
        {skill: 'Responsive Web Design', skill2: 'PHP & SQL'},
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