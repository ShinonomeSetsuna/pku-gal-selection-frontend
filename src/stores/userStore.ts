import { defineStore } from "pinia";
import { EntryCategory } from "../types";


export const useUserStore = defineStore("vote", {
    state: () => ({
        userEmail: "",
        userSelect: "" as EntryCategory
    }),
    getters: {
        getUserEmail: (state) => state.userEmail,
        getUserSelect: (state) => state.userSelect,
        getStatus: (state) => (): boolean => {
            return Boolean(state.userEmail.match(/.*?@.*?\..*?/))
        }
    },
    actions: {
        setUserEmail(userInput: string) {
            this.userEmail = userInput
        },
        setUserSelect(userInput: EntryCategory) {
            this.userSelect = userInput
        }
    }
})