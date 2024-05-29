import { BrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './public.route'

export function Routes() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  )
}
