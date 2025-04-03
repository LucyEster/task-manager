import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';

import React, { useContext, useEffect } from 'react'
import { ViewContext } from '../../App';

const TaskList = () => {

    const { tasks } = useContext(ViewContext);
    const headerText = { title: "Title", hideActions: true }

    return tasks ? (

        <div className="TaskList">
            <TaskItem item={headerText} />
            {tasks && tasks.map((item, index) =>
                <TaskItem key={item.id} item={item} />
            )}
        </div>

    ) : <> There is no tasks available. </>

}
export default TaskList;