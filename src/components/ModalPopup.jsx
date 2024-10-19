
import { Button, Modal, Select, Label, TextInput, Textarea } from "flowbite-react";


export function ModalPopup({ onOpen, onClose }) {


    return (
        <>
            <Modal show={onOpen} onClose={() => onClose()}>
                <Modal.Header>Add Task</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form action="" className="flex flex-wrap">
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Title" />
                                </div>
                                <TextInput id="title" type="text" required />
                            </div>
                            <div className="w-full mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description" />
                                </div>
                                <Textarea id="description" rows={4} required />
                            </div>

                            <div className="w-2/3 mt-2">
                                <div className="pr-2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="assign" value="Assign to" />
                                    </div>
                                    <Select id="assign" required>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="w-1/3 mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="assign" value="Assign to" />
                                </div>
                                <Select id="assign" required>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                </Select>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button >Add Task</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
