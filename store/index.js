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
    payload["id"] = state.eventsCounter + 1;
    state.events.push(payload);
    state.eventsCounter++;
  },
  REMOVE_EVENT: (state, payload) => {
    state.events.pop();
    state.eventsCounter--;
  },
  SET_PAGES_DATA: (state, payload) => {
    state.home = payload[0];
    state.about = payload[1];
    state.eventsCounter = payload[2]?.events;
    state.eventsForm = payload[3];
  },
};

const actions = {
  async GET_PAGES_DATA(context, payload) {
    let home = await this.$axios.$get("/home_page");
    let about = await this.$axios.$get("/about_page");
    let leftWidget = await this.$axios.$get("/left_widget");
    let eventsForm = await this.$axios.$get("/events/form");
    context.commit("SET_PAGES_DATA", [home, about, leftWidget, eventsForm]);
    console.log(payload); //temp - never used
  },
  async GET_EVENTS(context, payload = "action GET EVENTS") {
    let data = await this.$axios.$get("/events");
    context.commit("SET_EVENTS", data);
    console.log(payload); //temp - never used
  },

  async SEND_FORM_DATA(context, payload) {
    context.commit("ADD_EVENT", payload);
    await this.$axios
      .$post("/events", payload)
      .then((res) => {
        this.dispatch("GET_EVENTS"); // new events from others (updating)
      })
      .catch((err) => {
        console.log(err);
        context.commit("REMOVE_EVENT");
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
