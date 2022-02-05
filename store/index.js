const state = () => ({
  title: "",
  events: [],
  eventsCounter: 0,
  home: {},
  about: {},
  eventsForm: {},
});

const getters = {
  title: (state) => {
    return state.title;
  },
  events: (state) => {
    return state.events;
  },
  eventsCounter: (state) => {
    return state.eventsCounter;
  },
  eventById: (state) => {
    return (id) => {
      return state.events.find((x) => x.id == id);
    };
  },
  home: (state) => {
    return state.home;
  },
  about: (state) => {
    return state.about;
  },
  eventsForm: (state) => {
    return state.eventsForm;
  },
};

const mutations = {
  SET_TITLE: (state, payload) => {
    state.title = payload;
  },
  SET_EVENTS: (state, payload) => {
    state.events = payload;
    state.eventsCounter = payload.length;
  },
  SET_PAGES_DATA: (state, payload) => {
    state.home = payload[0];
    state.about = payload[1];
    state.eventsForm = payload[2];
  },

  // ADD_SERVICE: (state, payload) => {
  //   state.events.push(payload);
  // },
};

const actions = {
  async GET_PAGES_DATA(context, payload) {
    let home = await this.$axios.$get("/home_page");
    let about = await this.$axios.$get("/about_page");
    let eventsForm = await this.$axios.$get("/events/form");
    context.commit("SET_PAGES_DATA", [home, about, eventsForm]);
    console.log(payload); //temp - never used
  },
  async GET_EVENTS(context, payload) {
    let data = await this.$axios.$get("/events");
    context.commit("SET_EVENTS", data);
    console.log(payload); //temp - never used
  },

  SEND_FORM_DATA(context, {type, date, victims, additionalData}) {
    let payload = new FormData();
    payload.append("type", type);
    payload.append("date", date);
    payload.append("victims", victims);

    switch (true) {
      case type==="acid_rain":
        payload.append("acid_power", additionalData.acid_power);
      break;
      case type==="hurricane":
        payload.append("wind_speed", additionalData.wind_speed);
      break;
      case type==="earthquake":
        payload.append("earthquake_power", additionalData.earthquake_power);
      break;
    }

    this.$axios.$post("/events", payload)
    .then((res) => {
    })
    .catch((err) => console.log(err));
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
