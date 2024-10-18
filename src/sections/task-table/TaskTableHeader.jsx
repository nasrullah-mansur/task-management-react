import { TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";


function TaskTableHeader() {
  return (
    <div className="flex justify-between items-center mt-5 mb-8">
        <h2 className="text-2xl font-bold">Your Tasks</h2>
        <div className="max-w-lg">
            <TextInput id="email4" type="email" rightIcon={FiSearch} required />
        </div>
    </div>
  )
}

export default TaskTableHeader