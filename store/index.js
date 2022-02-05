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
    return [].concat(state.events).reverse();
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
  ADD_EVENT: (state, payload) => {
    state.events.push(payload);
  },
  SET_PAGES_DATA: (state, payload) => {
    state.home = payload[0];
    state.about = payload[1];
    state.eventsForm = payload[2];
  },
};

const actions = {
  async GET_PAGES_DATA(context, payload) {
    let home = await this.$axios.$get("/home_page");
    let about = await this.$axios.$get("/about_page");
    let eventsForm = await this.$axios.$get("/events/form");
    context.commit("SET_PAGES_DATA", [home, about, eventsForm]);
    console.log(payload); //temp - never used
  },
  async GET_EVENTS(context, payload="test") {
    let data = await this.$axios.$get("/events");
    context.commit("SET_EVENTS", data);
    console.log(payload); //temp - never used
  },

  SEND_FORM_DATA(context, payload) {
    // let payload = new FormData();
    // payload.append("type", type);
    // payload.append("date", date);
    // payload.append("victims", victims);

    // switch (type) {
    //   case "acid_rain":
    //     payload.append("acid_power", additionalData.acid_power);
    //     break;
    //   case "hurricane":
    //     payload.append("wind_speed", additionalData.wind_speed);
    //     break;
    //   case "earthquake":
    //     payload.append("earthquake_power", additionalData.earthquake_power);
    //     break;
    // }

    // let payload = {};
    // payload["type"] = type;
    // payload["date"] = date;
    // payload["victims"] = victims;

    // payload["acid_power"] = additionalData.acid_power;
    // payload["wind_speed"] = additionalText;
    // payload["earthquake_power"] = additionalText;

    this.$axios
      .$post("/events", payload)
      .then((res) => {
        console.log(payload);
      })
      .catch((err) => console.log(err));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
