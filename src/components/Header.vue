<template>
<div>
    <v-app-bar color="primary">
        <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title color="white">CEAF</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="success" class="mr-2">Ingresar</v-btn>
        <v-btn color="error">Salir</v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary>
        <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
    return {
        drawer: false,
        items: [
            { title: 'Home', icon: 'mdi-view-dashboard', link: '/' },
            { title: 'About', icon: 'mdi-account', link: '/about' },
            { title: 'Portafolio', icon: 'mdi-gavel', link: 'portafolio/1' },
        ]
    }
},
}

</script>

