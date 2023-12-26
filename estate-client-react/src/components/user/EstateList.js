import React from 'react'
import { Grid, Header, Form, Icon, Image, Input, Item, Segment } from 'semantic-ui-react'

function EstateList({ isEstatesLoading, estateTextSearch, estates, handleInputChange, handleSearchEstate }) {
  let estateList
  if (estates.length === 0) {
    estateList = <Item key='no-estate'>No Estate</Item>
  } else {
    estateList = estates.map(estate => {
      return (
        <Item key={estate.id}>
          <Image src={estate.poster} size='medium' bordered rounded />
          <Item.Content>
            <Item.Header>{estate.title}</Item.Header>
            <Item.Meta>{estate.contact}</Item.Meta>
            <Item.Description>{estate.description} </Item.Description>
            <Item.Extra>
              <p>Цена за кв.м.: {estate.price}₸</p>
              <p>Местоположение: {estate.address}</p>
            </Item.Extra>
          </Item.Content>
        </Item>
      )
    })
  }

  return (
    <Segment loading={isEstatesLoading} color='grey'>
      <Grid stackable divided>
        <Grid.Row columns='2'>
          <Grid.Column width='3'>
            <Header as='h2'>
              <Icon name='building' />
              <Header.Content>Estates</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Form onSubmit={handleSearchEstate}>
              <Input
                action={{ icon: 'search' }}
                name='estateTextSearch'
                placeholder='Search by ID or Title'
                value={estateTextSearch}
                onChange={handleInputChange}
              />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Item.Group divided unstackable relaxed link>
        {estateList}
      </Item.Group>
    </Segment>
  )
}

export default EstateList