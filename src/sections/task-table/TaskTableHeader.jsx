import { TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";


function TaskTableHeader({ onSearch }) {

  let changeHandler = (e) => {
    let val = e.target.value;
    onSearch(val);
  }


  return (
    <div className="flex justify-between items-center mt-2 mb-3">
      <h2 className="text-2xl pl-3 font-bold dark:text-white">Your Tasks</h2>
      <div className="max-w-lg">
        <TextInput onChange={changeHandler} id="email4" type="email" rightIcon={FiSearch} required />
      </div>
    </div>
  )
}

export default TaskTableHeader