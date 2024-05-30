import { QuestionsPage } from '@/pages/questions/screens/questionsPage'
import { Route, Routes } from 'react-router-dom'

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" Component={QuestionsPage} />
      <Route path="/questions" Component={QuestionsPage} />
    </Routes>
  )
}
