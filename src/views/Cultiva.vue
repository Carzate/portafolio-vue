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
                            <p class="lateral-texto">Un sitio web donde se incluyen noticias, blog, productos, eventos, todo relacionado a la agricultura.</p>
                            <p class="lateral-texto">Tiene espacios para incluir Ads, espacios para suscribirse a un newsletter para hacer e-mail marketing.</p>
                            <p class="lateral-texto">Se puede agregar fácilmente nuevas entradas de blog, todos los espacios tiene sliders para que sea agradable la vista de los articulos.</p>
                            <v-btn color="black" dark href="https://www.urbaby.mx" target="_blank">Vista de sitio</v-btn>
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