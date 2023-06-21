import React from "react";

import { TaskDetailPageContainer } from "../../containers/task-detail-page-container";
import { getTask, completeTask } from "../../services/task";

function TaskDetailPage() {
  return <TaskDetailPageContainer />;
}

export const taskDetailPageLoader = async ({ params }) => {
  return getTask(params.id);
};

export const updateTaskDetailAction = async ({ params }) => {
  return completeTask(params.id);
};

export { TaskDetailPage };
