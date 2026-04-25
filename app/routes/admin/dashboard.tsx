import React from 'react'
import {maintainSelection} from "@syncfusion/ej2-react-maps";
import {Header} from "../../../components";

const Dashboard = () => {
    const user = {name: "Angeline"};
    return (
        <main className="dashboard wrapper">
            <Header
                title = {`Welcome ${user?.name ?? 'Guest'} 🥀`}
                description = "Track activity and book great deals"
            />
            Dashboard Page content
        </main>
    )
}
export default Dashboard
