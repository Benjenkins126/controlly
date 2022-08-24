import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import NotificationBell from "../../assets/img/notification-icon.webp";
import NotificationItem from "./Navbar/NotificationItem";
import { useState } from "react";

const Navbar = () =>{
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        showNotifications ? setShowNotifications(false) : setShowNotifications(true);
    }
    
    const notifications = [
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" },
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" },
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" },
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" },
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" },
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" },
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" },
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" },
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" },
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" },
        { name: "Someone is at your front door", timestamp: "19/08/2022 06:53" }
    ]

    return (
        <nav className="border-b border-black/10 h-nav border-box pr-11 relative">
            <input type="text" id="TopSearch_Field" name="TopSearch_Field" placeholder="Search for devices, automations or groups..." className="pl-24 h-nav bg-transparent w-1/2 font-sans text-sm text-black/50 placeholder:text-black/50"  />
            <span className="text-2xl text-black/50 absolute left-12 top-7"><FontAwesomeIcon icon={faSearch} /></span>

            <div className="float-right relative mt-7 cursor-pointer" onClick={toggleNotifications}>
                <img src={NotificationBell} className="w-8" alt="Notifications" draggable="false" />
                <span className="bg-purpleControlly text-white font-semibold text-sm px-1.5 py-0.5 rounded-full absolute -top-1.5 -right-1">4</span>
            </div>

            <div className={`absolute overflow-y-scroll scroll-m-3 bg-white w-80 h-72 right-11 z-10 shadow-card rounded-lg top-16 px-6 py-2 transition-opacity ease-in-out duration-500 ${showNotifications ? "h-auto opacity-100" : "opacity-0 h-0"}`}>
                {notifications.map((notify => (
                    <NotificationItem name={notify.name} timestamp={notify.timestamp} />
                )))}
            </div>
        </nav>
    );
}

export default Navbar;