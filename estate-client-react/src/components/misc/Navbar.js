import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { getUser, userIsAuthenticated, userLogout } = useAuth()

  const logout = () => {
    userLogout()
  }

  const menuStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 0,
    border: 'none',
    fontFamily: 'Montserrat',
    marginTop: 10
  }

  const getUserName = () => {
    const user = getUser()
    return user ? user.data.name : ''
  }

  return (
      <Menu inverted color='teal' stackable size='massive' style={menuStyle}>
        <Container>
          <Menu.Item header style={{ color: 'black' }}>DIXON ESTATE</Menu.Item>
          <Menu.Item as={Link} exact='true' to="/" style={{ color: 'black' }}>Главная</Menu.Item>
          <Menu.Item as={Link} to="/adminpage" style={{ display: userIsAuthenticated() && getUser().data.rol[0] === 'ADMIN' ? 'block' : 'none', color: 'black' }}>Админ-панель</Menu.Item>
          <Menu.Item as={Link} to="/userpage" style={{ display: userIsAuthenticated() && getUser().data.rol[0] === 'USER' ? 'block' : 'none', color: 'black' }}>Смотреть квартиры</Menu.Item>
          <Menu.Item as={Link} to="/about" style={{  color: 'black' }}>О нас</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to="/login" style={{ display: userIsAuthenticated() ? 'none' : 'block', color: 'black' }}>Login</Menu.Item>
            <Menu.Item as={Link} to="/signup" style={{ display: userIsAuthenticated() ? 'none' : 'block', color: 'black' }}>Sign Up</Menu.Item>
            <Menu.Item header style={{ display: userIsAuthenticated() ? 'block' : 'none', color: 'black' }}>{`Hi ${getUserName()}`}</Menu.Item>
            <Menu.Item as={Link} to="/" style={{ display: userIsAuthenticated() ? 'block' : 'none', color: 'black' }} onClick={logout}>Выйти</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
  )
}

export default Navbar