import { createContext, useReducer } from "react";

// Creating the Project context
export const ProjectContext = createContext();

// Reducer function to manage project state
export const ProjectReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return {
        Project: [action.payload, ...state.Project]
      }

    case "SET_PROJECT":{
      return {
        Project : action.payload
      }
    }
    case "DELETE_PROJECT":{
      return{
        Project : state.Project.filter((p)=> p._id !== action.payload._id)
      }
    }
    default:
      return state;
  }
};

// ProjectContextProvider component
export const ProjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProjectReducer, { Project: [] });

  return (
    <ProjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};