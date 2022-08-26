import SidebarCategory from "./Sidebar/SidebarCategory";
import SidebarItem from "./Sidebar/SidebarItem";

import logo from "../../assets/img/controlly_sidebar_logo.svg";
import DashboardsIcon from "../../assets/img/categories/dashboards-icon.svg";
import DevicesIcon from "../../assets/img/categories/devices-icon.svg";
import GroupsIcon from "../../assets/img/categories/groups-icon.svg";
import AutomationsIcon from "../../assets/img/categories/automations-icon.svg";
import WidgetsIcon from "../../assets/img/categories/widgets-icon.svg";
import IntegrationsIcon from "../../assets/img/categories/integrations-icon.svg";
import ThemeConfigurationIcon from "../../assets/img/categories/theme-configuration-icon.svg";
import DisplayControllersIcon from "../../assets/img/categories/display-controllers-icon.svg";
import SettingsIcon from "../../assets/img/categories/settings-icon.svg";
import DocumentationIcon from "../../assets/img/categories/documentation-icon.svg";
import ForumsIcon from "../../assets/img/categories/forums-icon.svg";
import MarketplaceIcon from "../../assets/img/categories/marketplace-icon.svg";
import ReportIssueIcon from "../../assets/img/categories/report-issue-icon.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import SidebarDropdown from "./Sidebar/SidebarDropdown";

interface SidebarProps {
    active?: string;
}

const Sidebar = (props: SidebarProps) => {
    let emailAddress = "c7afd37a8d3e826035a982e70b4f9f63";

    return (
        <section className="w-72 h-full bg-backgroundColor basis-sidebar overflow-y-scroll">
            <div className="border-b border-white/10 h-nav">
                <img src={logo} alt="Controlly Logo" className="py-7 mx-auto" draggable="false" />
            </div>
            <div className="border-b border-white/10 px-5 h-nav cursor-pointer">
                <img src={"https://gravatar.com/avatar/" + emailAddress} alt="Ben J's Icon" draggable="false" className="rounded-full bg-purpleControlly w-12 float-left mt-5" />
                <div className="inline-block mt-5 ml-3">
                    <p className="text-white font-sans font-semibold">Ben Jenkins</p>
                    <p className="text-white/50 font-sans font-medium text-sm">Administrator</p>
                </div>
                <span className="text-2xl text-white/75 float-right mt-7"><FontAwesomeIcon icon={faAngleDown} /></span>
            </div>
            {/* User Logged In */}
            <div className="pb-8">
                <SidebarCategory>Site</SidebarCategory>
                {/* Dropdown Nav Item */}
                <SidebarDropdown active={props.active === "Dashboards"} name="Dashboards" icon={DashboardsIcon} links={[{name: "Downstairs 1", route: "/dashboard/downstairs-1"},{name: "Kitchen Tablet", route: "/dashboard/kitchen-tablet"},{name: "Bedroom [New]", route: "/dashboard/bedroom-new"}]} />

                <SidebarCategory>Configuration</SidebarCategory>
                <SidebarItem active={props.active === "Devices"} name="Devices" route="/devices" icon={DevicesIcon} />
                <SidebarItem active={props.active === "Groups"} name="Groups" route="/groups" icon={GroupsIcon} />
                <SidebarItem active={props.active === "Automations"} name="Automations" route="/automations" icon={AutomationsIcon} />
                <SidebarItem active={props.active === "Widgets"} name="Widgets" route="/widgets" icon={WidgetsIcon} />
                <SidebarItem active={props.active === "Integrations"} name="Integrations" route="/integrations" icon={IntegrationsIcon} />

                <SidebarCategory>Maintenance</SidebarCategory>
                <SidebarItem active={props.active === "Theme Configuration"} name="Theme Configuration" route="/theme-configuration" icon={ThemeConfigurationIcon} />
                <SidebarItem active={props.active === "Display Controllers"} name="Display Controllers" route="/display-controllers" icon={DisplayControllersIcon} />
                <SidebarItem active={props.active === "Settings"} name="Settings" route="/settings" icon={SettingsIcon} />

                <SidebarCategory>Help</SidebarCategory>
                <SidebarItem active={false} name="Documentation" route="https://docs.controlly.co.uk" icon={DocumentationIcon} />
                <SidebarItem active={false} name="Forums" route="https://controlly.co.uk/community/" icon={ForumsIcon} />
                <SidebarItem active={false} name="Marketplace" route="https://controlly.co.uk/marketplace/" icon={MarketplaceIcon} />
                <SidebarItem active={false} name="Report Issue" route="https://controlly.co.uk/report-issue" icon={ReportIssueIcon} />
            </div>
        </section>
    );
}

export default Sidebar;