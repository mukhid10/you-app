import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useZustandLogin = create(
    persist((set)=>({
        dataLogin: {},
        dispatchLogin: (params)=>set({dataLogin: params})
    }),
    {
        name: "login",
        storage: createJSONStorage(()=>localStorage)
    }
    )
)

export const useZustandToken = create(
    persist((set)=>({
        dataToken: {},
        dispatchToken: (params)=>set({dataToken: params})
    }),
    {
        name: "token",
        storage: createJSONStorage(()=>localStorage)
    }
    )
)