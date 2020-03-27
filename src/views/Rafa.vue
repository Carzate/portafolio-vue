<template>
    <div> 
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container >
                <p class="heading">Portafolio</p>
                <h3 class="acerca-home-title mt-5">Proyecto Rafael Gual Artista</h3>
                <v-row>
                    <v-col cols="12" md="8" sm="8">
                        <img src="@/assets/images/Rafa-home.jpg" width="100%">
                        <img src="@/assets/images/Rafa-home-2.jpg" width="100%">
                        <img src="@/assets/images/Rafa-galeria.jpg" width="100%">
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-banner sticky elevation="2">
                            <h2 class="mt-5">Rafael Gual</h2>
                            <p class="mt-3 mb-3 lateral-subtitulo">Portafolio</p>
                            <p class="lateral-texto">El artista buscaba tener presencia en internet, donde pudiera mostrar sus obras, reconocimientos y su carrera artística por lo cual diseñé su sitio de una manera que lo importante resalte y se pueda apreciar de la mejor manera.</p>
                            <p class="lateral-texto">Cada fotografía se puede expandir para verse en tamaño grande, tiene un formulario de contacto y traducción al inglés.</p>
                            <v-btn color="black" dark href="http://www.rafagualartista.com/" target="_blank">Vista de sitio</v-btn>
                        </v-banner>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Rafa'
}
</script>