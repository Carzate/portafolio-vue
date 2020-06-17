<template>
    <div> 
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container >
                <p class="heading">Página web</p>
                <h3 class="acerca-home-title mt-5">Hospital San Diego</h3>
                <v-row>
                    <v-col cols="12" md="8" sm="8">
                        <img src="@/assets/images/Hospital-home.jpg" width="100%">
                        <img src="@/assets/images/Hospital-espec.jpg" width="100%">
                        <img src="@/assets/images/Hospital-servicios.jpg" width="100%">
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-banner sticky elevation="2">
                            <h2 class="mt-5">Hospital San Diego</h2>
                            <p class="mt-3 mb-3 lateral-subtitulo">Página Web</p>
                            <p class="lateral-texto">Con este proyecto web se busca que los usuarios puedan conocer los servicios, los doctores, y noticias del hospital San Diego, con la finalidad de tener más clientes y dar información que les sirva.</p>
                            <p class="lateral-texto">Cada sección fue diseñada diferente, para ser encontrada con facilidade desde el menú principal y se den menos clicks, tiene un buscador que muestra resultados sin dar click y en médicos filtros sin recargar la página.</p>
                            <v-btn color="black" dark >Próximamente en producción</v-btn>
                        </v-banner>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>
<script>
export default {
    name: 'Kumon'
}
</script>