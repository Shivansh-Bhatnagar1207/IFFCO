import { useContext } from "react";
import { ProjectContext } from "../Contexts/ProjectContext";
export const useProjectContext = () => {
    const context = useContext(ProjectContext);

    if (context === undefined) {
        throw new Error("useProjectContext must be used within a ProjectContextProvider");
    }

    return context;
};
