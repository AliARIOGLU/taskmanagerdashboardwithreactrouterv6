import React, { useEffect, useState } from "react";
import { useLoaderData, useFetcher, useNavigate } from "react-router-dom";

import * as S from "./styles";
import { Loading } from "../../components/loading";
import { deleteTask } from "../../services/task";

function TaskDetailPageContainer() {
  const task = useLoaderData();
  const fetcher = useFetcher();
  const navigate = useNavigate();

  const [isSubmitting, setSubmitting] = useState(false);

  const updateCompleted = () => {
    setSubmitting(true);
    fetcher.submit(null, { method: "put" });
  };

  const deleteTaskHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteTask(id);
      navigate("/tasks");
    }
  };

  useEffect(() => {
    setSubmitting(false);
  }, [task]);

  return (
    <S.TaskDetailPageContainer>
      <S.EditButton to={`/tasks/${task.id}/edit`}>Edit</S.EditButton>
      <S.TaskDetail>
        <fetcher.Form method="put">
          <S.Status completed={task.completed}>
            <input
              hidden
              type="checkbox"
              name="task-completed"
              onChange={updateCompleted}
              defaultChecked={task.completed}
            />
            {task.completed ? "Completed" : "Not Completed"}
            {isSubmitting && <Loading />}
          </S.Status>
        </fetcher.Form>
        <S.Name>{task.name}</S.Name>
        <S.Description>{task.description}</S.Description>
        <S.DeleteButton onClick={() => deleteTaskHandler(task.id)}>
          Delete
        </S.DeleteButton>
      </S.TaskDetail>
    </S.TaskDetailPageContainer>
  );
}

export { TaskDetailPageContainer };
