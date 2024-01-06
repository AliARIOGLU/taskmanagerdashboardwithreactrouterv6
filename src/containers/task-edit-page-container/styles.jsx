import styled from "styled-components";
import { Link, Form } from "react-router-dom";

export const TaskEditPageContainer = styled.section``;

export const EditTaskForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-m);
  input,
  textarea {
    border: 1px solid var(--border-color);
    background-color: var(--dark-blue-opaque);
    color: var(--white);
    padding: var(--space-m);
    outline: none;
    resize: none;
  }
`;

export const Title = styled.h2`
  font-size: var(--font-xl);

  b {
    font-weight: bolder;
    color: wheat;
  }
`;

export const BackButton = styled(Link)`
  background-color: var(--dark-blue);
  padding: var(--space-m);
  border-radius: var(--border-radius-s);
`;
