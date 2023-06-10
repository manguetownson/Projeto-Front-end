import { Table} from "rsuite";
const{Column,HeaderCell,Cell} = Table;

const TableComponent = ({data,config,actions, content,onRowClick}) =>{
return(<Table data={data} height={400} onRowClick={onRowClick}>

    {config.map((c)=>(
    <Column flexGrow={!c.width? 1:0} width={c.width} align="center" fixed={c.fixed}>
        <HeaderCell>{c.label}</HeaderCell>
        {!c.content ?(
        < Cell dataKey={c.key} />
        ) : (
            <Cell>{(item) => c.content(item)}</Cell>
        )}
    </Column>))}

    <Column width={150} fixed="right">
        <HeaderCell>Ações</HeaderCell>
        <Cell>{(item)=> actions(item)}</Cell>
    </Column>

</Table>)

}

export default TableComponent;