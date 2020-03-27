<template>
    <div> 
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container >
                <p class="heading">Portafolio</p>
                <h3 class="acerca-home-title mt-5"> Cultiva Futuro</h3>
                <v-row>
                    <v-col cols="12" md="8" sm="8">
                        <img src="@/assets/images/Cultiva-home.jpg" width="100%">
                        <img src="@/assets/images/Cultiva-cultiva.jpg" width="100%">
                        <img src="@/assets/images/Cultiva-seminarios.jpg" width="100%">
                        <img src="@/assets/images/Cultiva-eventos.jpg" width="100%">
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-banner sticky elevation="2">
                            <h2 class="mt-5">Cultiva Futuro</h2>
                            <p class="mt-3 mb-3 lateral-subtitulo">Noticias</p>
                            <p class="lateral-texto">La página web tiene como objetivo que cualquier usuario pueda interesarse por el tema de agricultura, ya que se incluyen noticias, blog, productos y eventos relacionados.</p>
                            <p class="lateral-texto">Todo el contenido se va actualizando por el usuario administrador, que tiene el control de la página y las secciones.</p>
                            <p class="lateral-texto">Para la mejor experincia de usuario, tiene imágenes y videos en forma de sliders, colores llamativos e interatividad con efectos.</p>
                            <v-btn color="black" dark href="https://cultivafuturo.com/" target="_blank">Vista de sitio</v-btn>
                        </v-banner>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Cultiva'
}
</script>