<template>
  <div>
    <nuxt-child />
    <v-btn v-model="fab" color="blue darken-2" dark fab absolute>
      <v-icon v-if="fab"> mdi-close </v-icon>
      <v-icon v-else> mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="fab" max-width="500px">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
    };
  },
};
</script>

<style>
</style>