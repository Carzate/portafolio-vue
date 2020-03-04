<template>
    <div> 
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container >
                <p class="heading">Portafolio</p>
                <h3 class="acerca-home-title mt-5">Proyecto Nico</h3>
                <v-row>
                    <v-col cols="12" md="8" sm="8">
                        <img src="@/assets/images/Nico-home.jpg" width="100%">
                        <img src="@/assets/images/Nico-home-2.jpg" width="100%">
                        <img src="@/assets/images/Nico-home-3.jpg" width="100%">
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-banner sticky elevation="2">
                            <h2 class="mt-5">Nicolás</h2>
                            <p class="mt-3 mb-3 lateral-subtitulo">Invitación</p>
                            <p class="lateral-texto">Un sitio web para invitación a la fiesta de Nicolás, donde los asistentes pueden registarse con su nombre y diciendo con cuantas personas van al evento.</p>
                            <p class="lateral-texto">Incluye el mapa de Google Maps, galería de imágenes, como llegar al lugar.</p>
                            <v-btn color="black" dark href="https://nico.netlify.com/" target="_blank">Vista de sitio</v-btn>
                        </v-banner>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Nico'
}
</script>