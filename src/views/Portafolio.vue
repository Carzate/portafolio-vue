<template>
    <div>
         <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container>
                <p class="heading"> Mi trabajo</p>
                <h3 class="acerca-home-title mb-9">Trabajos Profesionales</h3>
                <v-row>
                    <v-col cols="12" sm="6" md="4" v-for="item in portafolio" :key="item.sitio">
                        <v-hover v-slot:default="{ hover }">
                            <v-img v-bind:src="require(`@/assets/images/${item.picture}`)" v-bind:alt="item.alt" class="img-port">
                                <v-expand-transition>
                                    <v-overlay v-if="hover" absolute color="black">
                                        <p class="white--text">{{item.sitio}}</p>
                                        <v-btn absolute right rounded color="black" :to="item.link" link>Ver proyecto</v-btn>
                                    </v-overlay>
                                </v-expand-transition>
                            </v-img>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Portafolio',
    data(){
    return {
        portafolio: [
            {sitio: 'Web de Tablas de Surf ', picture: 'Jetsurf.jpg', alt:'Proyecto Urbaby', link: '/jetsurf'},
            {sitio: 'Landing Page Kumón', picture: 'Kumon.jpg', alt:'Proyecto Akurat', link: '/kumon'},
            {sitio: 'Noticias de Agricultura', picture: 'Cultiva.jpg', alt:'Proyecto Cultiva Futuro', link: '/cultiva'},
            {sitio: 'E-commerce Urbaby', picture: 'Urbaby.jpg', alt:'Proyecto Urbaby', link:'/urbaby' },
            {sitio: '  Hospital San Diego', picture: 'Hospital.jpg', alt:'Proyecto HospitalSD', link: '/hospital'},
            {sitio: 'Portafolio Rafael Gual', picture: 'Rafa.jpg', alt:'Proyecto Rafa Gual', link: '/rafa'},
            {sitio: 'Portafolio Akurat-Arq', picture: 'Akurat.jpg', alt:'Proyecto Akurat', link: '/akurat'},
            {sitio: 'Portafolio Angular', picture: 'Angular.jpg', alt:'Proyecto Angular', link: '/angular'},
            {sitio: 'API de Rick & Morty', picture: 'Rick.jpg', alt:'Proyecto HospitalSD', link: '/hospital'},
        ]
    }
    }
}

</script>