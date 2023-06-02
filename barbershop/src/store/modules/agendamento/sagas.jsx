import {all, takeLatest,call,put} from 'redux-saga/effects';
import types from './types';
import api from '../../../services/api';
import consts from '../../../consts';
import { updateAgendamento } from './actions';

export function* filterAgendamento(start,end){
    try {
        const {data: res} = yield call(api.post('/agendamento/filter',{
            salaoId:consts.salaoId,
            periodo:{
                inicio:start,
                final:end,
            },
        }));
        if (res.error) {
            alert(res.message)
            return false;
        }
        
        yield put(updateAgendamento(res.agendamentos));

  
    } catch (err) {
        alert(err.message);
    }
}

export default all ([
    takeLatest(types.FILTER_AGENDAMENTOS,filterAgendamento)
]);