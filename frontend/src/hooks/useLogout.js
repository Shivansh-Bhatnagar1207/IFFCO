import { useAuthContext } from './UseAuthContext'
import { useProjectContext } from './UseProjectContext'
import { useReportContext } from './UseReportContext'


export const useLogout = () => {

    const { dispatch } = useAuthContext()
    const { dispatch: Project } = useProjectContext()
    const { dispatch: Report } = useReportContext()

    const logout = () => {
        localStorage.removeItem('user')

        dispatch({ type: 'LOGOUT' })
        Project({ type: "SET_PROJECT", payload: null })
        Report({ type: "SET_REPORT", payload: null })

    }

    return { logout }
}