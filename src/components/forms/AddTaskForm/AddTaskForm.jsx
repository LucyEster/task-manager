import { useContext, useState } from 'react'
import './AddTaskForm.css';
import { ViewContext } from '../../../App';
import Button from '../../Button/Button';

const AddTaskForm = ({ active }) => {

    const { setShowAddTaskForm, setTasks, tasks } = useContext(ViewContext);

    const [task, setTask] = useState({ id: tasks?.length + 1, completed: false, userId: 1 });

    const handleTitleChange = (event) => setTask({ ...task, title: event.target.value });
    const handleDescChange = (event) => setTask({ ...task, description: event.target.value });

    const handleSendInfo = () => {
        setTasks([...tasks, task]);
        setTask({ id: tasks?.length + 1, completed: false, userId: 1 });
        setShowAddTaskForm(false);
    }

    const handleClose = () => {
        setTask({ id: tasks?.length + 1, completed: false, userId: 1 });
        setShowAddTaskForm(false);
    }

    return active ? (
        <div id="NewItem-Inputbg">
            <div className="NewItem-Input">
                <h2>New task</h2>
                <div className="NewItem-newInput">

                    <Button
                        handleFunc={handleClose}
                        className="CloseButton"
                        icon="fa fa-2x fa-xmark"
                    />

                    <input placeholder='Insert a title...' required maxLength="144" type="text" onChange={handleTitleChange} />

                    <textarea placeholder='Insert a description...' required maxLength="4000" name="descrip" onChange={handleDescChange}></textarea>
                    <Button
                        handleFunc={handleSendInfo}
                        className="NewItemButton"
                        icon="fa-solid fa-plus"
                        text="Add task"
                    />
                </div>

            </div>
        </div>


    ) : null
}

export default AddTaskForm