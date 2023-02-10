import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  createLogger,
} from "vuex";

import * as moduleUsers from "./modules/users";

export const store = createStore({
  state: { ...moduleUsers.state },
  mutations: { ...moduleUsers.mutations },
  getters: { ...moduleUsers.getters },
  actions: { ...moduleUsers.actions },
  plugins: [createLogger()],
});

type MutationPayload = moduleUsers.MutationPayload

type ActionsPayload = moduleUsers.ActionsPayload

type Getters = moduleUsers.Getters

type State = moduleUsers.State

/*
  ---------------------- no change code ----------------------
*/

export type Store = Omit<VuexStore<State>,
    "getters" | "commit" | "dispatch"> & {
  commit<K extends keyof MutationPayload>(
      key: K,
      payload: MutationPayload[K],
      options?: CommitOptions,
  ): void
} & {
  dispatch<K extends keyof ActionsPayload>(
      key: K,
      payload: ActionsPayload[K][0],
      options?: DispatchOptions,
  ): ActionsPayload[K][1]
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export function useStore(): Store {
  return store as Store;
}
