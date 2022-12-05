import { useReducer } from "react"
import { Route, Routes } from "react-router-dom"
import { TaskContext } from "../context/TaskContext"
import { FocusScreen, HomeScreen, TodosScreen, Donation ,Donar} from "../pages"
import { ChatScreen } from "../pages/ChatScreen"
import { tasksReducer } from "../reducers/tasksReducer"


export const DashboardRouter = () => {

    const [tasks, taskDispatch] = useReducer(tasksReducer, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            taskDispatch
        }} >
            <Routes>
                <Route path='/todos' element={<TodosScreen />} />
                
                <Route path='/focus-ref' element={<FocusScreen />} />
                <Route path='/chat' element={<ChatScreen />} />
                <Route path='/donation' element={<Donation/>} />
                <Route path='/donar' element={<Donar/>} />


                <Route path='/' element={<HomeScreen />} />
            </Routes>
        </TaskContext.Provider >
    )
}
