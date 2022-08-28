import DashboardLayout from "../components/layout/DashboardLayout";

import { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import AutomationItem from "../components/automations/AutomationItem";
import Modal from "../components/ui/modal/Modal";
import DangerButton from "../components/ui/buttons/DangerButton";
import SecondaryButton from "../components/ui/buttons/SecondaryButton";
import TextInput from "../components/ui/input/TextInput";
import TextareaInput from "../components/ui/input/Textarea";

const Automations = () => {

    const [removeAutomationOpen, setRemoveAutomationOpen] = useState(false);
    const [newAutomationOpen, setNewAutomationOpen] = useState(false);

    let breadcrumbsPast = ["Home", "Configuration"];

    let tabsList = [
        {
            name: "Active",
            active: true,
            link: "/automations"
        },
        {
            name: "Templates",
            active: false,
            link: "/automation-templates"
        }
    ]

    const removeAutomation = () => {
        setRemoveAutomationOpen(true);
    }

    const newAutomation = () => {
        setNewAutomationOpen(true);
    }

    const cancelModal = () => {
        setRemoveAutomationOpen(false);
        setNewAutomationOpen(false);
    }

    useEffect(() => {
        document.title = "Controlly - Automations";
    });

    return (
        <DashboardLayout
            title="Automations"
            active="Automations"
            breadcrumbsActive="Automations"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <PrimaryButton text="New Automation" id="New_Automation" classes="mb-4" clickEvent={newAutomation} />
            <div className="gap-5 grid grid-cols-3">
                <AutomationItem id="temp_id_1" name="On Return Home, Turn Lights On" removeEvent={removeAutomation}>When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home</AutomationItem>
                <AutomationItem id="temp_id_1" name="On Return Home, Turn Lights On" removeEvent={removeAutomation}>When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home</AutomationItem>
                <AutomationItem id="temp_id_1" name="On Return Home, Turn Lights On" removeEvent={removeAutomation}>When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home</AutomationItem>
                <AutomationItem id="temp_id_1" name="On Return Home, Turn Lights On" removeEvent={removeAutomation}>When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home</AutomationItem>
                <AutomationItem id="temp_id_1" name="On Return Home, Turn Lights On" removeEvent={removeAutomation}>When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home</AutomationItem>
                <AutomationItem id="temp_id_1" name="On Return Home, Turn Lights On" removeEvent={removeAutomation}>When I return home using the motion sensor turn on downstairs lights. It will set lights to blue to get the attention of whoever is at home</AutomationItem>
            </div>

            <Modal show={newAutomationOpen} closeModal={cancelModal}>
                <h3 className="font-sans font-medium text-lg">Create Automation</h3>
                <TextInput label="Name" type="text" id="CreateAutomation_Name" name="CreateAutomation_Name" />
                <TextareaInput label="Description" id="CreateAutomation_Description" name="CreateAutomation_Description" />
                <PrimaryButton text="Create" id="CreateAutomation_Submit" url="/edit-automation" classes="block text-center mt-4 !mr-0 !py-1.5 border-2 border-purpleControlly !text-base" />
                <SecondaryButton id="cancelAddAutomationModal" clickEvent={cancelModal}>Cancel</SecondaryButton>
            </Modal>

            <Modal show={removeAutomationOpen} closeModal={cancelModal}>
                <h3 className="font-sans font-medium text-base text-center">Are you sure you want to delete this automation?</h3>
                <DangerButton id="removeModal">Remove</DangerButton>
                <SecondaryButton id="cancelModal" clickEvent={cancelModal}>Cancel</SecondaryButton>
            </Modal>
        </DashboardLayout>
    );
}

export default Automations;