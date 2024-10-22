import React from 'react'
import { Table } from "flowbite-react";

function TaskItem(props) {

  let { title, description, assignTo, priority } = props.data;

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>{props.index + 1}</Table.Cell>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{description}</Table.Cell>
      <Table.Cell>{assignTo}</Table.Cell>
      <Table.Cell>{priority}</Table.Cell>
      <Table.Cell>
        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3">
          Edit
        </a>
        <a href="#" className="font-medium text-rose-600 hover:underline dark:text-rose-500">
          Delete
        </a>
      </Table.Cell>
    </Table.Row>
  )
}

export default TaskItem