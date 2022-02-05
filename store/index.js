const state = () => ({
    events: [],
  });
  
  const getters = {
    events: (state) => {
      return state.events;
    },
    eventById: (state) => {
      return (id) => {
        return state.events.find(x => x.id == id);
      };
    },
  };
  
  const mutations = {
    SET_EVENTS: (state, payload) => {
      state.events = payload;
    },
  
    // ADD_SERVICE: (state, payload) => {
    //   state.events.push(payload);
    // },
  };
  
  const actions = {
    async GET_EVENTS (context, payload) {
      let data = await this.$axios.$get('/api/elonus/events');
      context.commit('SET_EVENTS', data);
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