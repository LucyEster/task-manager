import './TaskItem.css';

import React, { useContext } from 'react'

import Button from '../Button/Button';
import { ViewContext } from '../../App';

const TaskItem = ({ item }) => {

    const { tasks, setTasks } = useContext(ViewContext);

    const handleDelete = async (itemId) => {
        const newTaskList = tasks?.filter((item) => item.id !== itemId)
        setTasks(newTaskList)
    };

    const handleComplete = async (itemId) => {
        const newTaskList = tasks?.map((item) => {
            if (item.id == itemId) return { ...item, completed: !item.completed };
            return item;
        })
        setTasks(newTaskList)
    }

    const completed = item.completed ? 'TaskItem-completed' : '';
    const headerLayout = `TaskItem-header ${completed}`;

    return (
        <div className="TaskItem">
            <div className={headerLayout}>
                <h4> {item.title} </h4>

                <div className="TaskItem-actions">
                    {item.hideActions ? (
                        <>
                            <h4> status </h4>
                            <h4> complete </h4>
                            <h4> remove </h4>
                        </>

                    ) : (
                        <>
                            <p> {item.completed ? "completed" : "pending"}</p>
                            <Button
                                id={item.id}
                                active={item.completed}
                                handleFunc={handleComplete}
                                className="CheckButton"
                                icon="fa-solid fa-circle-check"
                            />
                            <Button
                                id={item.id}
                                handleFunc={handleDelete}
                                className="DeleteButton"
                                icon="fa fa-trash-can"
                            />
                        </>

                    )}
                </div>
            </div>
        </div>
    );
}

export default TaskItem;