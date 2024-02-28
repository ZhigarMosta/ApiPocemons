import { createEffect } from "effector";
import api from "@/api/axiosClient";
import { createEvent, createStore } from "effector";

export const pocemonsStore = createStore([]);

export const resetPocemons = createEvent();
export const resetColors = createEvent();

export const getPocemonFx = createEffect(async (_with: number) => {
  try {
    const response = await api.get(`pokemon?limit=9&offset=${_with}`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
});

pocemonsStore
  .on(getPocemonFx.doneData, (state, pocemons) => pocemons)
  .reset(resetPocemons);