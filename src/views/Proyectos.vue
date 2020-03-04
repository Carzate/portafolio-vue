<template>
    <div> 
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900">
            <v-container >
                <p class="heading">Portafolio</p>
                <h3 class="acerca-home-title mt-5"> E-commerce Urbaby</h3>
                <v-row>
                    <v-col cols="12" md="8" sm="8">
                        <img src="@/assets/images/Urbaby-home.jpg" width="100%">
                        <img src="@/assets/images/Urbaby-productos.jpg" width="100%">
                        <img src="@/assets/images/Urbaby-single.jpg" width="100%">
                        <img src="@/assets/images/Urbaby-pago.jpg" width="100%">
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-banner sticky elevation="2">
                            <h2>Proyecto Urbaby</h2>
                            <p class="mt-3 mb-3 lateral-subtitulo">E-commerce</p>
                            <p class="lateral-texto">Un sitio web de venta en línea de productos para bebé, utlización de Paypal para completar los pagos, está conectado a una apliacion de paquetería, tiene Google analitycs y Mailchimp para hacer e-mail Marketing.</p>
                            <p class="lateral-texto">Los productos están organizados por categorías, dentro de cada uno tiene opciones para elegir el color, tamaño y agregar varios productos al carrito, al final se le agrega el costo de envío y se obtienen los datos del cliente.</p>
                            <p class="lateral-texto">Se puede agregar fácilmente productos nuevos, hacer descuentos por tiempo limitado, uso de cupones, contar con stock limitado de los productos, etc.</p>
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
    name: 'Proyectos'
}
</script>