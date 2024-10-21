
import { Button, Modal, Select, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";


export function ModalPopup({ onOpen, onClose }) {

    let [data, setData] = useState({
        title: '',
        description: '',
        assignTo: '',
        priority: ''
    });



    let [errors, setErrors] = useState({
        title: null,
        description: null,
        assignTo: null,
        priority: null
    });

    let changeHandler = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        let newObject = {
            ...data,
            [key]: value,
        }

        setData(newObject);

        setErrors({
            title: null,
            description: null,
            assignTo: null,
            priority: null
        })
    }

    console.log(data);


    // After submitting form
    let submitHandler = (event) => {
        event.preventDefault();

        if (data.title == '') {
            setErrors({
                ...errors,
                title: 'The title field is required.'
            });
        }

        else if (data.title.length < 10) {
            setErrors({
                ...errors,
                title: 'The title must have min 10.'
            });

        }
        else if (data.title.length > 20) {
            setErrors({
                ...errors,
                title: 'The title must have max 10.'
            });

        }
        else if ((typeof data.title) != 'string') {
            setErrors({
                ...errors,
                title: 'The title must be string type data.'
            });
        }
        else if (data.description === '') {
            setErrors({
                ...errors,
                description: 'The description field is required.'
            });
        }
        else if (data.assignTo === '') {
            setErrors({
                ...errors,
                assignTo: 'The assignTo field is required.'
            });
        }
        else if (data.priority === '') {
            setErrors({
                ...errors,
                priority: 'The priority field is required.'
            });
        }

    }

    return (
        <>
            <Modal show={onOpen} onClose={() => onClose()}>
                <Modal.Header>Add Task</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form action="" className="flex flex-wrap" onSubmit={submitHandler}>
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Title" />
                                </div>
                                <TextInput name="title" onChange={changeHandler} id="title" type="text" />
                                {errors.title && <span className="text-red-500">{errors.title}</span>}
                            </div>
                            <div className="w-full mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description" />
                                </div>
                                <Textarea name="description" onChange={changeHandler} id="description" rows={4} />
                                {errors.description && <span className="text-red-500">{errors.description}</span>}
                            </div>

                            <div className="w-2/3 mt-2">
                                <div className="pr-2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="assign" value="Assign to" />
                                    </div>
                                    <Select id="assign" onChange={changeHandler} name="assignTo">
                                        <option value="Person One">Person One</option>
                                        <option value="Person Two">Person Two</option>
                                        <option value="Person Three">Person Three</option>
                                        <option value="Person Four">Person Four</option>
                                        <option value="Person Five">Person Five</option>
                                    </Select>
                                    {errors.assignTo && <span className="text-red-500">{errors.assignTo}</span>}
                                </div>
                            </div>
                            <div className="w-1/3 mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="assign" value="Priority" />
                                </div>
                                <Select id="assign" onChange={changeHandler} name="priority">
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </Select>
                                {errors.priority && <span className="text-red-500">{errors.priority}</span>}
                            </div>
                            <Button type="submit" className="mt-4">Add Task</Button>
                        </form>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}
