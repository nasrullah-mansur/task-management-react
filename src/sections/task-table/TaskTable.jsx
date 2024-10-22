
import Container from '../../components/Container'
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import TaskItem from './TaskItem';
import TaskTableHeader from './TaskTableHeader';
import { useState } from 'react';
import { ModalPopup } from '../../components/ModalPopup';


function NoData() {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className="text-center">No data Found</Table.Cell>
        </Table.Row>
    )
}


function TaskTable() {
    let [openModal, setOpenModal] = useState(false);
    let [tasks, setTasks] = useState([]);

    let createHandler = (item) => {
        let updateTasks = [
            ...tasks,
            {
                ...item,
                id: tasks.length + 1
            }
        ];

        setTasks(updateTasks.reverse());

    }

    return (
        <Container className="mt-3">
            <div className="flex justify-end w-full">
                <Button onClick={() => setOpenModal(true)} className='mr-2' color="success">Add Task</Button>
                <Button color="failure">Clear Tasks</Button>
            </div>
            <div className="p-3 rounded-sm border dark:border-[#666] my-3">
                <TaskTableHeader />

                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>#</Table.HeadCell>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell>Assigned To</Table.HeadCell>
                            <Table.HeadCell>Priority</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">

                            {tasks.length == 0 ? <NoData /> : tasks.map((item, index) => <TaskItem data={item} index={index} key={item.id} />)}


                        </Table.Body>
                    </Table>
                </div>
            </div>
            <ModalPopup onCreate={createHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
        </Container>
    )
}

export default TaskTable