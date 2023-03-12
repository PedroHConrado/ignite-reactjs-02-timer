import { HeaderContainer } from './styles'
import LogoIgnite from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
