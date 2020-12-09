import Vue from 'vue';
import Vuex from 'vuex';

import APIClient from './apiClient';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    kudos: {},
    repos: [],
  },
  mutations: {
    resetRepos (state, repos) {
      state.repos = repos;
    },
    resetKudos(state, kudos) {
      state.kudos = kudos;
    }
  },
  getters {
    allKudos(state) {
      return Object.values(state.kudos);
    },
    kudos(state) {
      return state.kudos;
    },
    repos(state) {
      return state.repos;
    },
    isKudo(state) {
      return (repo) => {
        return !!state.kudos[repo.id];
      };
    }
  },
})