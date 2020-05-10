import React from "react";

function SearchForm(props) {
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="employees">Employees:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="employee"
                    list="employees"
                    type="text"
                    className="form-control"
                    placeholder="Type in an employee to find"
                    id="employee"
                />
                <datalist id="employees">
                    {props.employees.map(employee => (
                        <option value={employee} key={employee} />
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Success
                </button>
            </div>
        </form>
    );
}

export default SearchForm;