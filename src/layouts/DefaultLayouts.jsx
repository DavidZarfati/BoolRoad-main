import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TravelersCard from "../components/TravelersCard";

export default function DefaultLayouts() {
    return (
        <>
            <Header />
            <Outlet />
            <TravelersCard />
        </>
    )
}