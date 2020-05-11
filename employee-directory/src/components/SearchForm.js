// import React, { useState} from "react";

// const employees = [
//     "Dwight Schrute",
//     "Jim Halpert",
//     "Pam Beesly",
//     "Michael Scott",
//     "Ryan Howard",
//     "Kelly Kapoor",
//     "Creed Bratton",
//     "Angela Martin"
// ]



// const SearchForm = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//     const handleChange = event => {
//         setSearchTerm(event.target.value);
//     };

//     React.useEffect(() => {
//         const results = employees.filter(employee =>
//             employee.toLowerCase().includes(searchTerm)
//         );
//         setSearchResults(results);
//     }, [searchTerm]);

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={handleChange}
//             />
//             <ul>
//                 {searchResults.map(employee => (
//                     <li>{employee}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default SearchForm;