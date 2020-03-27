<template>
    <div> 
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container >
                <p class="heading">Portafolio</p>
                <h3 class="acerca-home-title mt-5"> Proyecto Jetsurf</h3>
                <v-row>
                    <v-col cols="12" md="8" sm="8">
                        <img src="@/assets/images/Jetsurf-home.jpg" width="100%">
                        <img src="@/assets/images/Jetsurf-home-2.jpg" width="100%">
                        <img src="@/assets/images/Jetsurf-single.jpg" width="100%">
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-banner sticky elevation="2">
                            <h2 class="mt-5">Jetsurf</h2>
                            <p class="mt-3 mb-3 lateral-subtitulo">Presentación de productos</p>
                            <p class="lateral-texto">El diseño está pensado para que el usuario tenga la misma sensación de adrenalina cuando está arriba de las tablas motorizadas. </p>
                            <p class="lateral-texto">Se utilizaron fotos reales con el uso de las tablas. Cada producto tiene sus descripción, precio, galería de fotos y un menú de fácil acceso que te acompaña en todo momento sin estorbar. </p>
                            <p class="lateral-texto">En este sitio web se presentan los productos que se venden en el negocio, incluye datos de contacto, redes sociales y la ubiación con Google Maps. </p>
                            <v-btn color="black" dark href="https://www.jetsurfcdmx.com" target="_blank">Vista de sitio</v-btn>
                        </v-banner>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Jetsurf'
}
</script>