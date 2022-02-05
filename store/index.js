const state = () => ({
  title: "",
  events: [],
  home: {},
  about: {},
});

const getters = {
  title: (state) => {
    return state.title;
  },
  events: (state) => {
    return state.events;
  },
  eventsCounter: (state) => {
    return state.events.length;
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
};

const mutations = {
  SET_TITLE: (state, payload) => {
    state.title = payload;
  },
  SET_EVENTS: (state, payload) => {
    state.events = payload;
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
    let home = await this.$axios.$get("/api/elonus/home_page");
    let about = await this.$axios.$get("/api/elonus/about_page");
    let eventsForm = await this.$axios.$get("/api/elonus/events/form");
    context.commit("SET_PAGES_DATA", [home, about, eventsForm]);
    console.log(payload); //temp - never used
  },
  async GET_EVENTS(context, payload) {
    let data = await this.$axios.$get("/api/elonus/events");
    context.commit("SET_EVENTS", data);
    console.log(payload); //temp - never used
  },

  // SAVE_SERVICE: async (context, payload) => {
  //   let {data} = await axios.post('/api/events.json');
  //   context.commit('ADD_TODO', payload);
  //   console.log(data); //temp - never used
  // },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
