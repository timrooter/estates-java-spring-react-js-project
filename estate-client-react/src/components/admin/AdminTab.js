import React from 'react'
import { Tab } from 'semantic-ui-react'
import UserTable from './UserTable'
import EstateTable from './EstateTable'

function AdminTab(props) {
  const { handleInputChange } = props
  const { isUsersLoading, users, userUsernameSearch, handleDeleteUser, handleSearchUser } = props
  const { isEstatesLoading, estates, estateTitle, estatePoster, estateDescription, estateContact, estatePrice, estateAddress, estateTextSearch, handleAddEstate, handleDeleteEstate, handleSearchEstate } = props

  const panes = [
    {
      menuItem: { key: 'users', icon: 'users', content: 'Users' },
      render: () => (
        <Tab.Pane loading={isUsersLoading}>
          <UserTable
            users={users}
            userUsernameSearch={userUsernameSearch}
            handleInputChange={handleInputChange}
            handleDeleteUser={handleDeleteUser}
            handleSearchUser={handleSearchUser}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 'estates', icon: 'building', content: 'Estates' },
      render: () => (
        <Tab.Pane loading={isEstatesLoading}>
          <EstateTable
            estates={estates}
            estateTitle={estateTitle}
            estatePoster={estatePoster}
            estateDescription={estateDescription}
            estateContact={estateContact}
            estatePrice={estatePrice}
            estateAddress={estateAddress}
            estateTextSearch={estateTextSearch}
            handleInputChange={handleInputChange}
            handleAddEstate={handleAddEstate}
            handleDeleteEstate={handleDeleteEstate}
            handleSearchEstate={handleSearchEstate}
          />
        </Tab.Pane>
      )
    }
  ]

  return (
    <Tab menu={{ attached: 'top' }} panes={panes} />
  )
}

export default AdminTab