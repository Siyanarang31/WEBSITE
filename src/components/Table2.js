import React from 'react';
import { useTable } from 'react-table';
import carrier from './images/carrier.png';

function Table2() {

 const data = React.useMemo(
     () => [
       {
         col1: 'Mass of Carrier ',
         col2: '610g',
         
       },
       {
         col1: 'Mass of whole cansat',
         col2: '1130g',
         
       },
       {
         col1: 'Width (wings deployed)',
         col2: '539.67mm',
         
       },
       {
        col1: 'Width (wings not deployed)',
        col2: '210mm',
        
      },
     ],
     []
 )

 const columns = React.useMemo(
     () => [
       {
         Header: 'Constraints',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Values',
         accessor: 'col2',
       },
       
     ],
     []
 )

 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
 } = useTable({ columns, data })

 return (
   <>
  
     <div>
       
       <table {...getTableProps()} style={{ border: 'solid 1px grey', marginLeft:"880px", marginBottom:"100px" }}>
         <thead>
         {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                   <th
                       {...column.getHeaderProps()}
                       style={{
                         borderBottom: 'solid 7px blue',
                         color: 'white',
                         fontSize:'30px'
                       }}
                   >
                     {column.render('Header')}
                   </th>
               ))}
             </tr>
         ))}
         </thead>
         <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
               <tr {...row.getRowProps()}>
                 {row.cells.map(cell => {
                   return (
                       <td
                           {...cell.getCellProps()}
                           style={{
                             padding: '18px',
                             border: 'solid 1px gray',
                             color:'white',
                             fontSize:'25px',


                           }}
                       >
                         {cell.render('Cell')}
                       </td>
                   )
                 })}
               </tr>
           )
         })}
         </tbody>
       </table>
        <img src={carrier} style={{width:"900px", height:"670px",border:"black",marginLeft:"-60px",position:"absolute",top:"331%"}} /> 
     </div>
     </>
 );
}

export default Table2;