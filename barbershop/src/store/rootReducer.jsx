import { combineReducers } from "@reduxjs/toolkit";

import agendamento from './modules/agendamento/reducer';
import clientes from './modules/cliente/reducer';

export default combineReducers({
    agendamento: agendamento,
    clientes: clientes,
});