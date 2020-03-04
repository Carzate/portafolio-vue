<template>
    <div> 
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container >
                <p class="heading">Portafolio</p>
                <h3 class="acerca-home-title mt-5">Proyecto Rafael</h3>
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
                            <p class="lateral-texto">Un sitio web donde el artista puede enseñar las obras en las que trabaja, tiene traducción a inglés, un formulario de contacto, galería completa de todas sus obras y también sus reconocimientos.</p>
                            <v-btn color="black" dark href="http://rafagualartista.com/" target="_blank">Vista de sitio</v-btn>
                        </v-banner>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Urbaby'
}
</script>