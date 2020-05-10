import React, { useState, useMemo} from "react";

const SortableData = (employees, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedEmployees = useMemo(() => {
        let sortableEmployees = [...employees];
        if (sortConfig !== null) {
            sortableEmployees.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableEmployees;
    }, [employees, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { employees: sortedEmployees, requestSort, sortConfig };
};

const EmployeeTable = (props) => {
    const { employees, requestSort, sortConfig } = SortableData(props.employees);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table>
            <caption>Employee Directory</caption>
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className={getClassNamesFor('name')}
                        >
                        Name
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('role')}
                            className={getClassNamesFor('role')}
                        >
                        Role
                        </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('dob')}
                            className={getClassNamesFor('dob')}
                        >
                        Date of Birth
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.role}</td>
                        <td>{employee.dob}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default function Table() {
    return (
        <div className="Table">
            <EmployeeTable 
                employees={[
                    { id: 1, name: 'Dwight Schrute', role: "Salesman", dob: "January 20th, 1966" },
                    { id: 2, name: 'Jim Halpert', role: 'Salesman', dob: 'October 20th, 1979' },
                    { id: 3, name: 'Pam Beesly', role: 'Receptionist', dob: 'March 7th, 1974' },
                    { id: 4, name: 'Michael Scott', role: 'Regional Manager', dob: 'August 16th, 1962' },
                    { id: 5, name: 'Ryan Howard', role: 'Junior Salesman', dob: 'July 31st, 1979' },
                    { id: 6, name: 'Kelly Kapoor', role: 'Customer Service', dob: 'June 24th, 1979' },
                    { id: 7, name: 'Creed Bratton', role: 'Unknown', dob: 'February 8th, 1943' },
                    { id: 8, name: 'Angela Martin', role: 'Accounting', dob: 'June 25th, 1971' }
                ]}
            />
        </div>
    );
}