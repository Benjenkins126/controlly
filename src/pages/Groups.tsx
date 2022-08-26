import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

import LightOff from "../assets/img/devices/light-off.svg";
import LightOn from "../assets/img/devices/light-on.svg";
import GroupItem from "../components/groups/GroupItem";
import Modal from "../components/ui/modal/Modal";
import DangerButton from "../components/ui/buttons/DangerButton";
import SecondaryButton from "../components/ui/buttons/SecondaryButton";
import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import TextInput from "../components/ui/input/TextInput";

const Groups = () => {
    
    const [removeGroupOpen, setRemoveGroupOpen] = useState(false);
    const [addGroupOpen, setAddGroupOpen] = useState(false);

    let breadcrumbsPast = ["Home", "Configuration"];

    let tabsList = [
        {
            name: "Active",
            active: true,
            link: "/groups"
        }
    ];

    const removeGroup = () => {
        setRemoveGroupOpen(true);
    }

    const addGroup = () => {
        setAddGroupOpen(true);
    }

    const cancelModal = () => {
        setRemoveGroupOpen(false);
        setAddGroupOpen(false);
    }

    useEffect(() => {
        document.title = "Controlly - Groups";
    });

    let groupDemoDevices = [
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOn, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOn, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOn, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
        { name: "Bedroom 1", image: LightOff, id: "bedroom_1" },
    ];

    return (
        <DashboardLayout
            title="Groups"
            active="Groups"
            breadcrumbsActive="Groups"
            breadcrumbsPast={breadcrumbsPast}
            tabs={tabsList}
        >
            <PrimaryButton text="+ Add Group" id="Create_Group" classes="mb-4" clickEvent={addGroup}></PrimaryButton>
            <div className="gap-5 grid grid-cols-2">
                <GroupItem name="Downstairs Lights" devices={groupDemoDevices} id="downstairs_lights" openModal={removeGroup} />
                <GroupItem name="Bedroom Lights" devices={groupDemoDevices} id="bedroom_lights" openModal={removeGroup} />
                <GroupItem name="Office Lights" devices={groupDemoDevices} id="office_lights" openModal={removeGroup} />
                <GroupItem name="Hallway Lights" devices={groupDemoDevices} id="hallway_lights" openModal={removeGroup} />
            </div>

            <Modal show={removeGroupOpen} closeModal={cancelModal}>
                <h3 className="font-sans font-medium text-base text-center">Are you sure you want to remove (NAME)?</h3>
                <DangerButton id="removeModal">Remove</DangerButton>
                <SecondaryButton id="cancelModal" clickEvent={cancelModal}>Cancel</SecondaryButton>
            </Modal>

            <Modal show={addGroupOpen} closeModal={cancelModal}>
                <h3 className="font-sans font-medium text-lg">Create Group</h3>
                <TextInput label="Group Name" type="text" id="CreateGroup_Name" name="CreateGroup_Name" />
                <PrimaryButton text="Create" id="CreateGroup_Submit" url="/edit-group" classes="block text-center mt-4 !mr-0 !py-1.5 border-2 border-purpleControlly !text-base" />
                <SecondaryButton id="cancelAddGroupModal" clickEvent={cancelModal}>Cancel</SecondaryButton>
            </Modal>
        </DashboardLayout>
    );
}

export default Groups;