import React from "react";
import { useLoaderData } from "react-router-dom";

import { EmptyTasks } from "./empty-screen";
import * as S from "./styles";

function TasksPageContainer() {
  const tasks = useLoaderData();

  return (
    <S.TasksPageContainer>
      {!tasks?.length ? (
        <EmptyTasks />
      ) : (
        <>
          <S.Button to="/tasks/create">Create Task</S.Button>
          <S.TasksList>
            {tasks.map((task) => (
              <S.TaskListItem key={task.id}>
                <S.Task
                  to={`/tasks/${task.id}`}
                  iscompleted={`${task.completed}`}
                >
                  <S.TaskCompleted>
                    {task.completed ? "Completed" : "Not completed"}
                  </S.TaskCompleted>
                  <S.TaskName>{task.name}</S.TaskName>
                  <S.TaskDescription>{task.description}</S.TaskDescription>
                </S.Task>
              </S.TaskListItem>
            ))}
          </S.TasksList>
        </>
      )}
    </S.TasksPageContainer>
  );
}

export { TasksPageContainer };
