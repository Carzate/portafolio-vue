<template>
    <div> 
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container >
                <p class="heading">Landing Page</p>
                <h3 class="acerca-home-title mt-5">Proyecto Kumón Culiacán</h3>
                <v-row>
                    <v-col cols="12" md="8" sm="8">
                        <img src="@/assets/images/Kumon-home.jpg" width="100%">
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-banner sticky elevation="2">
                            <h2 class="mt-5">Kumón</h2>
                            <p class="mt-3 mb-3 lateral-subtitulo">Landing Page</p>
                            <p class="lateral-texto">Con este proyecto web se busca que las personas de Culiacán dejen sus datos para obtener más información del programa de clases extracurriculares ofertadas en los distintos centros kumón autorizados de este Estado.</p>
                            <p class="lateral-texto">Cada centro kumón tiene una persona encargada asi que cuando se selecciona alguno de ellos en el formulario les llega a un correo solamente a esta persona con la finalidad de darle seguimiento y así no saturar las bandejas de entrada de las demás personas encargadas de los centros restantes.</p>
                            <v-btn color="black" dark href="http://www.rafagualartista.com/" target="_blank">Próximamente en producción</v-btn>
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