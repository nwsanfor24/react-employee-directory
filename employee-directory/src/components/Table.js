import React from "react";

const sortableData = (employees, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedEmployees = React.useMemo(() => {
        
    })
}

// function Table() {
//     return(
//         <div className="table-responsive">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">ID</th>
//                         <th scope="col">First Name</th>
//                         <th scope="col">Last Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th scope="row">1</th>
//                         <td>Michael</td>
//                         <td>Scott</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">2</th>
//                         <td>Dwight</td>
//                         <td>Schrute</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">3</th>
//                         <td>Jim</td>
//                         <td>Halpert</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

export default Table;