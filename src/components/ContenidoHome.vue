<template>
    <div>
        <v-container>
            <v-row>
                <v-col md="4" sm="6" v-for="item in cards" :key="item.titulo">
                    <v-card data-aos="fade-right" data-aos-delay="300" data-aos-duration="900">
                        <v-img  class="white--text align-end"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
                        <v-card-title >
                        {{item.titulo}}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ item.subtitulo }}
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn color="success" @click="dialog = true">Ver más <v-icon class="ml-3">mdi-plus</v-icon></v-btn>
                    </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-card>
                    <v-card-title primary-title>
                        Ejemplo
                    </v-card-title>
                </v-card>
            </v-row>
        </v-container>
        

        <!-- Dialogo -->
        <v-dialog
            v-model="dialog"
            persistent :overlay="false"
            max-width="600px"
            transition="dialog-transition"
        >
            <v-card>
                <v-card-title primary-title>
                    Ejemplo modal
                </v-card-title>
                <v-card-text> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sint maiores culpa numquam eveniet a et perspiciatis laboriosam? Quos accusantium delectus nisi tempore officia reiciendis incidunt necessitatibus provident autem ducimus.</v-card-text>
                <v-divider></v-divider>
                <v-btn block color="error" large @click="dialog = false">Cerrar</v-btn>
            </v-card>
        </v-dialog>
        <!-- Fin Dialogo -->

    </div>
</template>

<script>
export default {
    name: 'ContenidoHome',
    data(){
    return {
        dialog: false,
        cards: [
            {titulo: 'Card One', subtitulo: 'Descripcion de card one'},
            {titulo: 'Lorem', subtitulo: 'Descripcion de card two'},
            {titulo: 'Card Two', subtitulo: 'Descripcion de card two'},
        ]
    }
    },
}
</script>