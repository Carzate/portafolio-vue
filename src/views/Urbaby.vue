<template>
    <div> 
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container >
                <p class="heading">Portafolio</p>
                <h3 class="acerca-home-title mt-5">Proyecto Urbaby</h3>
                <v-row>
                    <v-col cols="12" md="8" sm="8">
                        <img src="@/assets/images/Urbaby-home.jpg" width="100%">
                        <img src="@/assets/images/Urbaby-productos.jpg" width="100%">
                        <img src="@/assets/images/Urbaby-single.jpg" width="100%">
                        <img src="@/assets/images/Urbaby-pago.jpg" width="100%">
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-banner sticky elevation="2">
                            <h2 class="mt-5">Urbaby</h2>
                            <p class="mt-3 mb-3 lateral-subtitulo">E-commerce</p>
                            <p class="lateral-texto"> Sitio web pensado para dar la sensación de seguridad y amor en las madres que tienen hijos pequeños, en el cual se venden productos útiles para el cuidado y desarrollo del niño.</p>
                            
                            <p class="lateral-texto">Tiene conectado Paypal para cobros en línea, está ligado con la paquetería para descargar las guías de envío y con el servicio de Mailchimp para e-mail Marketing.</p> 

                            <p class="lateral-texto">Los productos se pueden agregar fácilmente, controlar el stock y usar cupones de descuentos limitados.</p> 

                            <p class="lateral-texto">El sitio tiene visitas de 40-100 personas por día.</p>
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
    name: 'Urbaby'
}
</script>