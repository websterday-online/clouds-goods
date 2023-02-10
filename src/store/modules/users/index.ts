import { UserInterface } from "@/interface/user.interface";

import { GetterTree, MutationTree, ActionContext, CommitOptions } from "vuex";

// Declare state
export type State = {
  users: UserInterface[]
}

// Create initial state
export const state: State = {
  users: [],
};

/*
   ---------------------- Mutations this is your code----------------------------
*/

export type MutationPayload = {
  SET_USERS: UserInterface[],
  REMOVE_USER: string
}

export const mutations: MutationTree<State> & Mutations = {
  SET_USERS(state, payload) {
    state.users = payload;
  },
  REMOVE_USER(state, id) {
    const index = state.users.findIndex(item => item.id === id)
    state.users.splice(index, 1)
  }
};

/*
   ---------------------- Getters -------------------------------
*/

export type Getters = {
  allUsers(state: State): UserInterface[]
}

export const getters: GetterTree<State, State> & Getters = {
  allUsers: (state: State) => state.users.length ? state.users : [],
};
/*
   ---------------------- Actions -------------------------------
*/

export type ActionsPayload = {
  setUsers: [payload: UserInterface[], returnVal: void]
  removeUser: [payload: string, returnVal: void]
}

export const actions: Actions = {
  setUsers({ commit }, payload) {
    commit("SET_USERS", payload);
  },
  removeUser({commit}, id) {
    commit("REMOVE_USER", id)
  }
};

/*
   ---------------------- Actions no change code -----------------------------
*/

type Actions = {
  [Property in keyof ActionsPayload]: (
      augContext: AugmentedActionContext,
      payload: ActionsPayload[Property][0],
  ) => ActionsPayload[Property][1]
}

type AugmentedActionContext = {
  commit<K extends keyof MutationPayload>(
      key: K,
      payload: MutationPayload[K],
      options?: CommitOptions,
  ): void
} & Omit<ActionContext<State, State>, "commit">

/*
   ---------------------- Mutations - no change code ------------------------
*/

type Mutations = {
  [Property in keyof MutationPayload]: (state: State, payload: MutationPayload[Property]) => void
}
