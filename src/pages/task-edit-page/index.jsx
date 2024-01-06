import { redirect } from "react-router-dom";
import { TaskEditPageContainer } from "../../containers/task-edit-page-container";
import { getTask, updateTask } from "../../services/task";

function TaskEditPage() {
  return <TaskEditPageContainer />;
}

export const taskEditPageLoader = ({ params }) => {
  return getTask(params.id);
};

export const updateTaskAction = async ({ request, params }) => {
  const formData = await request.formData();

  const name = formData.get("task-name");
  const description = formData.get("task-description");
  const completedStatus = formData.get("task-completed");

  const task = {
    id: params.id,
    name,
    description,
    completed: completedStatus ? true : false,
  };

  await updateTask(task);

  return redirect(`/tasks/${params.id}`);
};

export { TaskEditPage };
