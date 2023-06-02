import types from "./types"
export function filterAgendamentos(start,end){
    return{
        type:types.FILTER_AGENDAMENTOS,
        start,
        end,
    }
}