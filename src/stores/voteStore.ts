import { defineStore } from "pinia";

interface VoteStore {
    qualifyingVote: Map<String, Boolean>
    groupVote: Map<String, Boolean>
}


export const useVoteStore = defineStore("vote", {
    state: (): VoteStore => ({
        qualifyingVote: new Map<String, Boolean>(),
        groupVote: new Map<String, Boolean>()
    }),
    getters: {
        hasQualifyingVoteById: (state) => (VNDBId: String): Boolean => {
            return state.qualifyingVote.has(VNDBId) ? state.qualifyingVote.get(VNDBId)! : false;
        },
        hasGroupVoteByGroupId: (state) => (groupId: string): Boolean => {
            return state.groupVote.has(groupId) ? state.groupVote.get(groupId)! : false;
        }
    },
    actions: {
        QualifyingVoteById(VNDBId: String) {
            this.qualifyingVote.set(VNDBId, true)
        },
        GroupVoteByGroupId(groupId: String) {
            this.groupVote.set(groupId, true)
        }
    }
})