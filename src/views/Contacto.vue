<template>
    <div>
        <v-container>
          <v-form
            action="https://formspree.io/xlednaej"
            method="POST"
            ref="form"
            v-model="valid"
            lazy-validation
            class="ml-9 mr-9 mt-11"
          >
          <input type="hidden" name="contacto" value="contacto" />
            <v-text-field
              v-model="name"
              name="nombre"
              :counter="20"
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              name="E-mail"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea
              v-model="textarea"
              name="Mensaje"
              :rules="textRules"
              label="Mensaje"
              required
            ></v-textarea>
            
            <div data-netlify-recaptcha="true"></div>

            <v-btn
              dark
              :disabled="!valid"
              color="black"
              class="mr-4"
              @click="validate"
            >
              <input type="submit">
            </v-btn>

          </v-form>
        </v-container>
    </div>
</template>

<script>
  export default {
      name: "Contacto",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 20) || 'El nombre debe contener menos de 10 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'El e-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'El e-mail debe ser válido',
      ],
      textarea: '',
      textRules: [
          v => !!v || 'El mensaje es requerido',
      ]

    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
    },
  }
</script>

<style>
.v-application .primary--text{
    color: black !important;
}

</style>