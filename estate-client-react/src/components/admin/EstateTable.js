import React, {Fragment} from 'react'
import {Button, Form, Grid, Image, Input, Table} from 'semantic-ui-react'
import EstateForm from './EstateForm'

function EstateTable({
                         estates,
                         estateId,
                         estateTitle,
                         estatePoster,
                         estateDescription,
                         estateContact,
                         estatePrice,
                         estateAddress,
                         estateTextSearch,
                         handleInputChange,
                         handleAddEstate,
                         handleDeleteEstate,
                         handleSearchEstate
                     }) {
    let estateList
    if (estates.length === 0) {
        estateList = (
            <Table.Row key='no-estate'>
                <Table.Cell collapsing textAlign='center' colSpan='5'>No estate</Table.Cell>
            </Table.Row>
        )
    } else {
        estateList = estates.map(estate => {
            return (
                <Table.Row key={estate.id}>
                    <Table.Cell collapsing>
                        <Button
                            circular
                            color='red'
                            size='small'
                            icon='trash'
                            onClick={() => handleDeleteEstate(estate.id)}
                        />
                    </Table.Cell>
                    <Table.Cell>
                        {estate.poster ?
                            <Image src={estate.poster} size='tiny' bordered rounded/> :
                            <Image src='/images/estate-poster.jpg' size='tiny' bordered rounded/>
                        }
                    </Table.Cell>
                    <Table.Cell>{estate.id}</Table.Cell>
                    <Table.Cell>{estate.title}</Table.Cell>
                    <Table.Cell>{estate.description}</Table.Cell>
                    <Table.Cell>{estate.contact}</Table.Cell>
                    <Table.Cell>{estate.price}</Table.Cell>
                    <Table.Cell>{estate.address}</Table.Cell>
                    <Table.Cell>{estate.createdAt}</Table.Cell>
                </Table.Row>
            )
        })
    }

    return (
        <Fragment>
            <Grid stackable divided>
                <Grid.Row columns='2'>
                    <Grid.Column width='5'>
                        <Form onSubmit={handleSearchEstate}>
                            <Input
                                action={{icon: 'search'}}
                                name='estateTextSearch'
                                placeholder='Search by Id or Title'
                                value={estateTextSearch}
                                onChange={handleInputChange}
                            />
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <EstateForm
                            estateId={estateId}
                            estateTitle={estateTitle}
                            estatePoster={estatePoster}
                            estateContact={estateContact}
                            estatePrice={estatePrice}
                            estateAddress={estateAddress}
                            estateDescription={estateDescription}
                            handleInputChange={handleInputChange}
                            handleAddEstate={handleAddEstate}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Table compact striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={1}/>
                        <Table.HeaderCell width={3}>Poster</Table.HeaderCell>
                        <Table.HeaderCell width={2}>ID</Table.HeaderCell>
                        <Table.HeaderCell width={3}>Title</Table.HeaderCell>
                        <Table.HeaderCell width={4}>Description</Table.HeaderCell>
                        <Table.HeaderCell width={2}>Contact</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Price</Table.HeaderCell>
                        <Table.HeaderCell width={2}>Address</Table.HeaderCell>
                        <Table.HeaderCell width={2}>CreatedAt</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {estateList}
                </Table.Body>
            </Table>
        </Fragment>
    )
}

export default EstateTable