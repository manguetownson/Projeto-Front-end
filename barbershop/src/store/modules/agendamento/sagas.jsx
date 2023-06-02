import {all, takeLatest} from 'redux-saga/effects';
import types from './types';
import api from '../../../services/api';
import consts from '../../../consts';

export function* filterAgendamento(start,end){
    try {
        const res = yield call(api.post('/agendamento/filter',{
            salaoId:consts.salaoId,
            periodo:{
                inicio:start,
                final:end,
            },
        }));
        return res;
    } catch (error) {
        alert(error.message);
    }
}

export default all ([
    takeLatest(types.FILTER_AGENDAMENTOS,filterAgendamento)
]);