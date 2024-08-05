import { createContext, useReducer } from "react";

export const ReportContext = createContext();

export const ReportReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_REPORT":
            return {
                Report: [action.payload, ...state.Report]
            }
        case "SET_REPORT":
            return {
                Report: action.payload
            }
        case "DELETE_REPORT":
            return {
                Report: state.Report.filter((r) => r._id !== action.payload._id)
            }
        default:
            return state;
    }
};

export const ReportContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ReportReducer, { Report: [] });
    return (
        <ReportContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ReportContext.Provider>
    )
}