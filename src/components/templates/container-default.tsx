import { logotipo } from '@/assets'
import { ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ToggleTheme } from '../molecules/toggleTheme'
import { Button } from '../ui/button'

interface ContainerDefaultProps {
  children: ReactElement
}
export function ContainerDefault({ children }: ContainerDefaultProps) {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className="max-w-screen-xl p-8 mx-auto">
      <header className="flex items-center justify-between mb-8">
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
          <Button>Contato</Button>
        </div>
      </header>

      {children}
    </div>
  )
}