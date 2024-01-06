import React, { useState } from "react";

import * as S from "./styles";
import { Form } from "react-router-dom";

function CreateTaskPageContainer() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <S.CreateTaskPageContainer>
      <Form method="post">
        <input
          type="text"
          name="task-name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
          placeholder="Task name.."
        />
        <textarea
          name="task-description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          required
          placeholder="Description.."
        />
        <button disabled={!taskDescription || !taskDescription} type="submit">
          Submit
        </button>
      </Form>
    </S.CreateTaskPageContainer>
  );
}

export { CreateTaskPageContainer };
