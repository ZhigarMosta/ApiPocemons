import { createEffect } from "effector";
import api from "@/api/axiosClient";
import { createEvent, createStore } from "effector";

export const pocemonsSearchStore = createStore([]);

export const resetPocemonsSearch = createEvent();

export const getPocemonSearchFx = createEffect(async () => {
  try {
    const response = await api.get(`pokemon?limit=103&offset=0`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
});

pocemonsSearchStore
  .on(getPocemonSearchFx.doneData, (state, pocemons) => pocemons)
  .reset(resetPocemonsSearch);
