import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import EstateList from './EstateList'
import { useAuth } from '../context/AuthContext'
import { estateApi } from '../misc/EstateApi'
import { handleLogError } from '../misc/Helpers'
import Footer from "../Footer";

function UserPage() {
  const Auth = useAuth()
  const user = Auth.getUser()
  const isUser = user.data.rol[0] === 'USER'

  const [estates, setEstates] = useState([])
  const [estateTextSearch, setEstateTextSearch] = useState('')
  const [isEstatesLoading, setIsEstatesLoading] = useState(false)

  useEffect(() => {
    handleGetEstates()
  }, [])

  const handleInputChange = (e, { name, value }) => {
    if (name === 'estateTextSearch') {
      setEstateTextSearch(value)
    }
  }

  const handleGetEstates = async () => {
    setIsEstatesLoading(true)
    try {
      const response = await estateApi.getEstates(user)
      setEstates(response.data)
    } catch (error) {
      handleLogError(error)
    } finally {
      setIsEstatesLoading(false)
    }
  }

  const handleSearchEstate = async () => {
    try {
      const response = await estateApi.getEstates(user, estateTextSearch)
      const estates = response.data
      setEstates(estates)
    } catch (error) {
      handleLogError(error)
      setEstates([])
    }
  }

  if (!isUser) {
    return <Navigate to='/' />
  }

  return (
    <Container>
      <EstateList
        isEstatesLoading={isEstatesLoading}
        estateTextSearch={estateTextSearch}
        estates={estates}
        handleInputChange={handleInputChange}
        handleSearchEstate={handleSearchEstate}
      />
      <Footer/>
    </Container>
  )
}

export default UserPage