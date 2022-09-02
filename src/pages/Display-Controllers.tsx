import DashboardLayout from "../components/layout/DashboardLayout";

import { useEffect, useState } from "react";
import DisplayControllerItem from "../components/display-controllers/DisplayControllerItem";
import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import Modal from "../components/ui/modal/Modal";
import DangerButton from "../components/ui/buttons/DangerButton";
import SecondaryButton from "../components/ui/buttons/SecondaryButton";
import TextInput from "../components/ui/input/TextInput";
import Select from "../components/ui/input/Select";

const DisplayControllers = () => {
    
    const [removeDisplayControllerOpen, setRemoveDisplayControllerOpen] = useState(false);
    const [addDisplayControllerOpen, setAddDisplayControllerOpen] = useState(false);
    const [editDisplayControllerOpen, setEditDisplayControllerOpen] = useState(false);

    let breadcrumbsPast = ["Home", "Maintenance"];

    let tabsList = [
        {
            name: "Active",
            active: true,
            link: "/display-controllers"
        }
    ];

    let displayTypesList = [
        {
            value: "iPad Pro 12 Inch",
            text: "iPad Pro 12 Inch"
        }
    ];

    let dashboardViewList = [
        {
            value: "Kitchen Tablet",
            text: "Kitchen Tablet"
        }
    ];

    const removeDisplayController = () => {
        setRemoveDisplayControllerOpen(true);
    }

    const addDisplayController = () => {
        setAddDisplayControllerOpen(true);
    }

    const editDisplayController = () => {
        setEditDisplayControllerOpen(true);
    }

    const cancelModal = () => {
        setRemoveDisplayControllerOpen(false);
        setAddDisplayControllerOpen(false);
        setEditDisplayControllerOpen(false);
    }

    useEffect(() => {
        document.title = "Controlly - Display Controllers";
    });

    return (
        <DashboardLayout
            title="Display Controllers"
            active="Display Controllers"
            breadcrumbsActive="Display Controllers"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <PrimaryButton text="New Controller" id="Create_Display_Controller" classes="mb-4" clickEvent={addDisplayController} />
            <div className="grid grid-cols-5 gap-5">
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Offline" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Offline" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Offline" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Offline" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
                <DisplayControllerItem id="controller_1" dashboard="Downstairs 1" status="Online" name="Kitchen Tablet" removeEvent={removeDisplayController} editEvent={editDisplayController} />
            </div>

            <Modal show={removeDisplayControllerOpen} closeModal={cancelModal}>
                <h3 className="font-sans font-medium text-base text-center">Are you sure you want to delete this controller?</h3>
                <DangerButton id="removeModal">Remove</DangerButton>
                <SecondaryButton id="cancelModal" clickEvent={cancelModal}>Cancel</SecondaryButton>
            </Modal>

            <Modal show={addDisplayControllerOpen} closeModal={cancelModal}>
                <h3 className="font-sans font-medium text-lg">Create Display Controller</h3>
                <TextInput label="Name" type="text" id="CreateDisplayController_Name" name="CreateDisplayController_Name" />
                <Select label="Display Type" id="CreateDisplayController_DisplayType" name="CreateDisplayController_DisplayType" options={displayTypesList} />
                <Select label="Dashboard View" id="CreateDisplayController_DashboardView" name="CreateDisplayController_DashboardView" options={dashboardViewList} />
                <a href="https://controlly.co.uk/documentation/test" className="text-purpleControlly underline text-sm pb-3 pt-6 block">View our guide on the best way to setup Smart Homd Controllers</a>
                <PrimaryButton id="CreateDisplayController" text="Create" classes="w-full !py-1 text-base border-2 border-purpleControlly block text-center text-black !mt-4" />
                <SecondaryButton id="cancelModal" clickEvent={cancelModal}>Cancel</SecondaryButton>
            </Modal>

            <Modal show={editDisplayControllerOpen} closeModal={cancelModal}>
                <h3 className="font-sans font-medium text-lg">Edit Kitchen Tablet</h3>
                <TextInput label="Name" type="text" id="CreateDisplayController_Name" name="EditDisplayController_Name" />
                <Select label="Display Type" id="CreateDisplayController_DisplayType" name="EditDisplayController_DisplayType" options={displayTypesList} />
                <Select label="Dashboard View" id="CreateDisplayController_DashboardView" name="EditDisplayController_DashboardView" options={dashboardViewList} />
                <a href="https://controlly.co.uk/documentation/test" className="text-purpleControlly underline text-sm pb-3 pt-6 block">View our guide on the best way to setup Smart Homd Controllers</a>
                <PrimaryButton id="EditDisplayController" text="Submit" classes="w-full !py-1 text-base border-2 border-purpleControlly block text-center text-black !mt-4" />
                <SecondaryButton id="cancelModal" clickEvent={cancelModal}>Cancel</SecondaryButton>
            </Modal>
        </DashboardLayout>    
    );
}

export default DisplayControllers;