import { QuestionsView } from '@/pages/questions/view/questionsView'
import { Route, Routes } from 'react-router-dom'

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" Component={QuestionsView} />
      <Route path="/questions" Component={QuestionsView} />
    </Routes>
  )
}
