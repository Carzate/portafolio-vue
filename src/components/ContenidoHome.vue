<template>
    <div>
        <div class="principal">
            <agile :nav-buttons="false" :autoplay-speed="4000" :speed="1500" fade="fade" autoplay="autoplay">
                <img class="slide" src="https://images.unsplash.com/photo-1509549649946-f1b6276d4f35?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
                <img class="slide" src="https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9"/>
                <img class="slide" src="https://images.unsplash.com/photo-1511135232973-c3ee80040060?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9"/><img class="slide" src="https://images.unsplash.com/photo-1511231683436-44735d14c11c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9"/><img class="slide" src="https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9"/>
            </agile>
        </div>

        <div class="acerca-home" data-aos="fade-right" data-aos-delay="300" data-aos-duration="900">
            <v-container>
                <v-row>
                    <v-col cols="12" md="7">
                        <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" width="100%">
                    </v-col>
                    <v-col cols="12" md="5">
                        <p class="heading">Bienvenido</p>
                        <h3 class="acerca-home-title "> Mi nombre es christian arzate</h3>
                        <p>Soy ingeniero en computación egresado de la Facultad de Ingeniería de la UNAM. Me apasiona el desarrollo web y cuento con experiencia profesional en Front-End</p>
                        <v-expansion-panels class="mb-3">
                        <v-expansion-panel>
                        <v-expansion-panel-header>Educación</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <ul>
                                <li>Ingeniería en Computación - UNAM </li>
                                <li>Diplomado en E-commerce - UNAM </li>
                            </ul>
                        </v-expansion-panel-content>
                        </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div class="acerca-home" data-aos="fade-right" data-aos-delay="300" data-aos-duration="900">
            <v-container>
                <p class="heading"> ¿A qué me dedico?</p>
                <h3 class="acerca-home-title mb-9">Algo de mi experiencia</h3>
                <v-row>
                    <v-col cols="12" md="6" sm="6" v-for="item in exp" :key="item.icon">
                        <div class="d-flex">
                            <div class="espaciado">
                             <v-icon flat large class="iconos-home" color="green">{{item.icon}}</v-icon>
                             </div>
                        <div class="texto-iconos">
                            <p class="bold">{{item.title}}</p>
                            <p class="">{{item.descripcion}}</p>
                        </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="900">
        <v-container>
            <p class="heading"> Mi trabajo</p>
            <h3 class="acerca-home-title mb-9">Trabajos recientes</h3>
            <v-row>
                <v-col md="6" v-for="item in portafolio" :key="item.sitio">
                    <v-hover v-slot:default="{ hover }">
                        <v-img v-bind:src="item.picture" v-bind:alt="item.alt" class="img-port">
                            <v-expand-transition>
                                <v-overlay v-if="hover" absolute color="black">
                                    <p class="white--text">Sitio web de venta online</p>
                                    <v-btn absolute right round color="black">Ver proyecto</v-btn>
                                </v-overlay>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
        </div>

        <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="900">
            <div class="fondo-gris">
                <v-container>
                    <h3 class="display-1">Trabajemos juntos</h3>
                    <h4 class="body-1 mt-9">Conecta conmigo si necesitas un desarrollador web o tienes una pregunta </h4>
                    <v-btn color="black" dark rounded class="mt-9">Contacto</v-btn>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
    name: 'ContenidoHome',
    components: {
        agile: VueAgile
    },
    data(){
    return {
        dialog: false,
        exp: [
            {icon: 'mdi-home', title: 'Desarrollo Web', descripcion: 'Me gusta planificar las cosas y que todo tenga un orden progresivo'},
            {icon: 'mdi-arrow-left', title: 'Diseño Web', descripcion: 'Holas jsgfhevma  sbckebk chdvkjv  ev,e cuando espero esta tarde un sol enomre'},
            {icon: 'mdi-magnify', title: 'Branding', descripcion: 'Holas jsgfhevma  sbckebk chdvkjv  ev,e cuando espero esta tarde un sol enomre'},
            {icon: 'mdi-arrow-right', title: 'SEO', descripcion: 'Holas jsgfhevma  sbckebk chdvkjv  ev,e cuando espero esta tarde un sol enomre'},
            {icon: 'mdi-dashboard', title: 'Google Ads', descripcion: 'Holas jsgfhevma  sbckebk chdvkjv  ev,e cuando espero esta tarde un sol enomre'}
        ],
        portafolio: [
            {sitio: 'Sitio web de e-commerce', picture: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png', alt:'Proyecto Urbaby'},
            {sitio: 'Sitio web de Venta', picture: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png', alt:'Proyecto Urbaby'},
            {sitio: 'Sitio web de e-commerce', picture: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png', alt:'Proyecto Urbaby'},
            {sitio: 'Sitio web de Venta', picture: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png', alt:'Proyecto Urbaby'}
        ]
    }
    },
}
</script>