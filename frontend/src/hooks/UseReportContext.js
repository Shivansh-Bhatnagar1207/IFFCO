import { useContext } from "react";
import { ReportContext } from "../Contexts/ReportContext";
export const useReportContext = ()=>{
    const context = useContext(ReportContext);

    if(context=== undefined){
        throw new Error("useReportContext must be used within a ReportContextProvider");
    }
    return context
}