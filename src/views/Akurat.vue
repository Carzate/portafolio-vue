<template>
    <div> 
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container >
                <p class="heading">Portafolio</p>
                <h3 class="acerca-home-title mt-5"> Proyecto Akurat</h3>
                <v-row>
                    <v-col cols="12" md="8" sm="8">
                        <img src="@/assets/images/Akurat-home.jpg" width="100%">
                        <img src="@/assets/images/Akurat-home-2.jpg" width="100%">
                        <img src="@/assets/images/Akurat-single.jpg" width="100%">
                        <img src="@/assets/images/Akurat-img.jpg" width="100%">
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-banner sticky elevation="2">
                            <h2 class="mt-5">Akurat</h2>
                            <p class="mt-3 mb-3 lateral-subtitulo">Portafolio</p>
                            <p class="lateral-texto">Un sitio web para mostrar los proyectos que la empresa ha trabajado, cada proyecto tiene su descripción e imágenes.</p>
                            <p class="lateral-texto">Tiene funcionalidades y efectos para que la experiencia del usuario sea agradable para ver toda la página.</p>
                            <v-btn color="black" dark href="http://www.akurat-arq.com" target="_blank">Vista de sitio</v-btn>
                        </v-banner>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Akurat'
}
</script>