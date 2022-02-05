<template>
  <v-form v-if="eventsForm" ref="form" lazy-validation>
    <div v-for="(field, field_key) in eventsForm.fields" :key="field_key">
      <v-select
        v-if="field.type == 'select'"
        :items="field.values"
        v-model="formData[field_key]"
        :label="field.title"
        required
        :rules="rules(field.title)"
      />
      <v-text-field
        v-else
        v-model="formData[field_key]"
        :label="field.title"
        required
        :rules="rules(field.title)"
      />
    </div>
    <div
      v-for="(dynamic, dynamic_key) in Object.entries(
        eventsForm.reference_fields
      ).filter(
        ([key, value]) => key == dynamicField + '.' + formData[dynamicField]
      )"
      :key="dynamic_key"
    >
      <v-text-field
        v-for="(field, field_key) in dynamic[1]"
        :key="field_key"
        v-model="formData[field_key]"
        :label="field.title"
        required
        :rules="rules(field.title)"
      />
    </div>
    <v-btn @click="send" type="submit">Send</v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["eventsForm"]),
  },
  data: () => ({
    formData: {},
    dynamicField: "type",
  }),
  methods: {
    rules: function (title) {
      return [(v) => !!v || "Field `" + title + "` is required"];
    },
    send: function (evt) {
      evt.preventDefault();
      if (!this.$refs.form.validate()) return false;
      let result = JSON.parse(JSON.stringify(this.formData));
      this.$store.dispatch("SEND_FORM_DATA", result);
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>