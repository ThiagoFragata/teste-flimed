import { logotipo } from '@/assets'
import { ToggleTheme } from '@/components/molecules/toggle-theme'
import { DialogQuestions } from '@/pages/questions/components/organism/dialog-questions'
import { ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface ContainerDefaultProps {
  children: ReactElement
}
export function ContainerDefault({ children }: ContainerDefaultProps) {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className="min-h-screen bg-teal-50 dark:bg-gray-950">
      <header className="flex items-center justify-between max-w-screen-xl p-8 mx-auto">
        <Link to={'https://flimed.com.br'} target="_blank">
          <img src={logotipo} />
        </Link>

        <nav>
          <ul className="flex gap-4 text-lg font-medium">
            <li className={`${pathname === '/' && 'text-teal-400'}`}>
              <Link to={'/'}>Inicio</Link>
            </li>
            <li className={`${pathname === '/questions' && 'text-teal-400'}`}>
              <Link to={'/questions'}>Questionário</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <ToggleTheme />
          <DialogQuestions />
        </div>
      </header>

      {children}
    </div>
  )
}
