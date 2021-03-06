import { createGlobalStyle } from "styled-components";

const darkTheme = {
  text: "hsl(234, 39%, 85%)",
  bodyBackground: "hsl(235, 21%, 11%)",
  todoBackground: "hsl(235, 24%, 19%)",
  todoBorder: "hsl(237, 14%, 26%)",
  checkboxBorder: "hsl(234, 11%, 52%)",
  placeholderAndCompletedTask: "hsl(234, 11%, 52%)",
  clearCompletedBtnHover: "hsl(234, 39%, 85%)",
  filtersBtnHover: "hsl(236, 33%, 92%)",
};

const lightTheme = {
  text: "hsl(235, 21%, 11%)",
  bodyBackground: "hsl(236, 33%, 92%)",
  todoBackground: "hsl(0, 0%, 98%)",
  todoBorder: "hsl(233, 11%, 84%)",
  checkboxBorder: "hsl(236, 9%, 61%)",
  placeholderAndCompletedTask: "hsl(236, 9%, 61%)",
  clearCompletedBtnHover: "hsl(235, 19%, 35%)",
  filtersBtnHover: "hsl(235, 21%, 11%)",
};

const GlobalStyles = createGlobalStyle`

	body {
		background-color: ${(props) => props.theme.bodyBackground};
	}

  .todo-input,
  .items-filters-clear-container,
  .for-mobile .filters,
  .todo-container::-webkit-scrollbar-track{
    background: ${(props) => props.theme.todoBackground};
  }
  
  .add-btn,
  .todo-checkbox{
    border: 1px solid ${(props) => props.theme.checkboxBorder};
  }
  
  .todo-input input{
    color: ${(props) => props.theme.text}
  }
  
  .todo-input input::placeholder,
  .todo-checkbox.completed ~ .todo-task,
  .items-left,
  .clear-completed-btn,
  .filters button,
  .drag-drop-line{
    color: ${(props) => props.theme.placeholderAndCompletedTask}
  }

  .todo{
    background: ${(props) => props.theme.todoBackground};
    color: ${(props) => props.theme.text};
    border-bottom: 2px solid ${(props) => props.theme.todoBorder};
  }

  .clear-completed-btn:hover,
  .clear-completed-btn:focus{
    color: ${(props) => props.theme.clearCompletedBtnHover};
  }

  .filters button:focus,
  .filters button:hover{
    color: ${(props) => props.theme.filtersBtnHover};
  }

  .todo-container{
    scrollbar-color: hsl(233, 13%, 49%) ${(props) =>
      props.theme.todoBackground};
  }

`;

export { darkTheme, lightTheme, GlobalStyles };
