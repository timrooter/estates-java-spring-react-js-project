import React from 'react'
import { Form, Icon, Button } from 'semantic-ui-react'

function EstateForm({estateTitle, estatePoster, estateDescription, estateContact, estatePrice, estateAddress, handleInputChange, handleAddEstate }) {
  const createBtnDisabled = estateTitle.trim() === ''
  return (
      <Form onSubmit={handleAddEstate}>
        <Form.Field>
          <label>Название</label>
          <Form.Input
              name='estateTitle'
              placeholder='Название'
              value={estateTitle}
              onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Ссылка на фото</label>
          <Form.Input
              name='estatePoster'
              placeholder='Ссылка на фото'
              value={estatePoster}
              onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Описание</label>
          <Form.Input
              name='estateDescription'
              placeholder='Описание'
              value={estateDescription}
              onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Контакт</label>
          <Form.Input
              name='estateContact'
              placeholder='Контакт'
              value={estateContact}
              onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Цена</label>
          <Form.Input
              name='estatePrice'
              placeholder='Цена за м^2'
              value={estatePrice}
              onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Адрес</label>
          <Form.Input
              name='estateAddress'
              placeholder='Адрес'
              value={estateAddress}
              onChange={handleInputChange}
          />
        </Form.Field>
        <Button icon labelPosition='right' disabled={createBtnDisabled}>
          Create<Icon name='add' />
        </Button>
      </Form>
  )
}

export default EstateForm
