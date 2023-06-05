import { Button } from 'rsuite';
import Table  from '../../components/Table';
import'rsuite/dist/rsuite.css';

const Clientes = () => {
    return (
        <div className="col p-5 overflow-auto h-100">
            <div className ="row">
                <div className="col-12">
                    <div className="w-100 d-flex justify-content-between">
                        <h2 className="mb-4 mt-0">Clientes</h2>
                        <div>
                            <button className="btn btn-primary btn-lg">
                                <span className="mdi mdi-plus">Novo Cliente</span>
                            </button>
                        </div>                   
                    </div>
                    <Table data={clientes}
                    config={[
                        {label: 'Nome', key:'firstName',width:200, fixed: true},
                    ]}
                    actions={(cliente)=>(
                        <Button color="blue" size="xs">Ver informações</Button>
                    )}
                    onRowClick={(item)=> {}}
                    />
                </div>
            </div>
        </div>
    )
};

export default Clientes;