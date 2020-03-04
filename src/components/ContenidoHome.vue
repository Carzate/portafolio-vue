<template>
    <div>
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <div class="principal">
                <agile :nav-buttons="false" :autoplay-speed="4000" :speed="1500" fade="fade" autoplay="autoplay">
                    <img class="slide" src="@/assets/images/desk-3.jpg"/>
                    <img class="slide" src="@/assets/images/code-2.jpg"/>
                    <img class="slide" src="@/assets/images/desk-2.jpg"/>
                    <img class="slide" src="@/assets/images/code.jpg"/>
                </agile>
            </div>
        </div>
        <div class="acerca-home" data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container>
                <v-row>
                    <v-col cols="12" md="7">
                        <img src="@/assets/images/port.jpg" width="100%">
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
                        <v-expansion-panel>
                        <v-expansion-panel-header>Descargar CV</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-btn color="black" dark rounded target="_blank" to="//drive.google.com/file/d/1TfZ4fm0aYeJzyXcaSvjiCeCt6c-YhFJS/view?usp=sharing">Descargar</v-btn>
                        </v-expansion-panel-content>
                        </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div class="acerca-home" data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container>
                <p class="heading"> ¿A qué me dedico?</p>
                <h3 class="acerca-home-title mb-9">Algo de mi experiencia</h3>
                <v-row>
                    <v-col cols="12" md="6" sm="6" v-for="item in exp" :key="item.icon">
                        <div class="d-flex">
                            <div class="espaciado">
                             <v-icon flat large class="iconos-home" color="black">{{item.icon}}</v-icon>
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

        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
        <v-container>
            <p class="heading"> Mi trabajo</p>
            <h3 class="acerca-home-title mb-9">Trabajos recientes</h3>
            <v-row>
                <v-col cols="12" sm="6" md="6" v-for="item in portafolio" :key="item.sitio">
                    <v-hover v-slot:default="{ hover }">
                        <v-img position="top" v-bind:src="require(`@/assets/images/${item.picture}`)" v-bind:alt="item.alt" class="img-port">
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
            {icon: 'mdi-code-tags', title: 'Desarrollo Web', descripcion: 'Con las nuevas tecnologías creo desde páginas sencillas hasta aplicaciones web.'},
            {icon: 'mdi-border-color', title: 'Diseño Web', descripcion: 'Con las tendencias del diseño hago páginas adaptables a todos los dispositivos.'},
            {icon: 'mdi-currency-usd', title: 'E-commerce', descripcion: 'Creación de tiendas en línea utilizando Wordpress y Shopify'},
            {icon: 'mdi-google', title: 'Google Ads', descripcion: 'Para posicionar las páginas en los primeros resultados de Google.'},
            {icon: 'mdi-facebook', title: 'Social Media', descripcion: 'Publicación de contenido incluyendo Facebook Ads y tráfico segmentado a web.'},
        ],
        portafolio: [
            {sitio: 'E-commerce Urbaby', picture: 'Urbaby.jpg', alt:'Proyecto Urbaby', link:'/urbaby' },
            {sitio: 'Portafolio Akurat-Arq', picture: 'Akurat.jpg', alt:'Proyecto Akurat', link: '/akurat'},
            {sitio: 'Web de tablas de surf ', picture: 'Jetsurf.jpg', alt:'Proyecto Urbaby', link: '/jetsurf'},
            {sitio: 'Noticias de Agricultura', picture: 'Cultiva.jpg', alt:'Proyecto Cultiva Futuro', link: '/cultiva'}
        ]
    }
    },
}
</script>