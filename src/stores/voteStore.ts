import { defineStore } from "pinia";
import { EntryCategory } from "../types";
interface VoteStore {
    qualifyingVote: Map<String, Boolean>
    groupVote: Map<String, Boolean>
    addVote: string
}


export const useVoteStore = defineStore("vote", {
    state: (): VoteStore => ({
        qualifyingVote: new Map<String, Boolean>(),
        groupVote: new Map<String, Boolean>(),
        addVote: ""
    }),
    getters: {
        hasQualifyingVoteById: (state) => (VNDBId: String): Boolean => {
            return state.qualifyingVote.has(VNDBId) ? state.qualifyingVote.get(VNDBId)! : false;
        },
        hasGroupVoteByGroupId: (state) => (groupId: string): Boolean => {
            return state.groupVote.has(groupId) ? state.groupVote.get(groupId)! : false;
        },
        getAddVote: (state) => state.addVote,
        getAddVoteType: (state) => () => {
            return ({ "c": "character", "v": "vn", "s": "staff" }[state.addVote[0]]) as EntryCategory
        },
        isValidVote: (state) => (): Boolean => {
            // TODO: 没有写VNDBId的验证
            return Boolean(state.addVote.match(".*"))
        }
    },
    actions: {
        QualifyingVoteById(VNDBId: String) {
            this.qualifyingVote.set(VNDBId, true)
        },
        GroupVoteByGroupId(groupId: String) {
            this.groupVote.set(groupId, true)
        },
        setAddVote(voteId: string) {
            this.addVote = voteId
        }
    }
})