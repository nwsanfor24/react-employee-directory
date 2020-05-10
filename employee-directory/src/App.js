import React from "react";
import Jumbotron from "./components/Jumbotron";
import Table from "./components/Table";

function App() {
    return (
        <div>
            <Jumbotron />
            <Table
                employees={[
                    { id: 1, name: 'Dwight Schrute', role: 'Salesman', dob: 'January 20th, 1966' }
                ]}
            />
        </div>

    );
}

export default App;