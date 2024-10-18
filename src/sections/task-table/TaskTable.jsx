
import Container from '../../components/Container'
import { Button, Label, TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";
import { Table } from "flowbite-react";
import TaskItem from './TaskItem';
import TaskTableHeader from './TaskTableHeader';


function NoData () {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className="text-center">No data Found</Table.Cell>
        </Table.Row>
    )
}


function TaskTable() {
  return (
    <Container className="mt-8">
        <div className="flex justify-end w-full">
            <Button className='mr-2' color="success">Add Task</Button>
            <Button color="failure">Clear Tasks</Button>
        </div>
        <div className="p-2 rounded-sm border my-6">
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
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <NoData />
                    
                    </Table.Body>
                </Table>
            </div>
        </div>
    </Container>
  )
}

export default TaskTable