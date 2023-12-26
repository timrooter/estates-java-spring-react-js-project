import React, {useEffect, useState} from 'react'
import {Navigate} from 'react-router-dom'
import {Container, Statistic, Icon, Image, Segment, Dimmer, Loader, Header} from 'semantic-ui-react'
import { Grid } from "semantic-ui-react";
import {useAuth} from '../context/AuthContext'
import AdminTab from './AdminTab'
import {estateApi} from '../misc/EstateApi'
import {handleLogError} from '../misc/Helpers'


function AdminPage() {
    const Auth = useAuth()
    const user = Auth.getUser()
    const isAdmin = user.data.rol[0] === 'ADMIN'

    const [users, setUsers] = useState([])
    const [estates, setEstates] = useState([])
    const [estateTitle, setEstateTitle] = useState('')
    const [estatePoster, setEstatePoster] = useState('')
    const [estateDescription, setEstateDescription] = useState('')
    const [estateContact, setEstateContact] = useState('')
    const [estatePrice, setEstatePrice] = useState('')
    const [estateAddress, setEstateAddress] = useState('')
    const [estateTextSearch, setEstateTextSearch] = useState('')
    const [userUsernameSearch, setUserUsernameSearch] = useState('')
    const [isUsersLoading, setIsUsersLoading] = useState(false)
    const [isEstatesLoading, setIsEstatesLoading] = useState(false)
    const [numberOfUsers, setNumberOfUsers] = useState(0)
    const [numberOfEstates, setNumberOfEstates] = useState(0)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        handleGetUsers()
        handleGetEstates()
        // async function fetchData() {
        //     setIsLoading(true)
        //     try {
        //         let response = await estateApi.numberOfUsers()
        //         const users = response.data
        //
        //         response = await estateApi.numberOfEstates()
        //         const estates = response.data
        //
        //         setNumberOfUsers(users)
        //         setNumberOfEstates(estates)
        //     } catch (error) {
        //         handleLogError(error)
        //     } finally {
        //         setIsLoading(false)
        //     }
        // }
        // fetchData()
    }, [])



    // if (isLoading) {
    //     return (
    //         <Segment basic style={{marginTop: window.innerHeight / 2}}>
    //             <Dimmer active inverted>
    //                 <Loader inverted size='huge'>Loading</Loader>
    //             </Dimmer>
    //         </Segment>
    //     )
    // }
    const handleInputChange = (e, {name, value}) => {
        if (name === 'estateTitle') {
            setEstateTitle(value)
        } else if (name === 'estatePoster') {
            setEstatePoster(value)
        } else if (name === 'estateDescription') {
            setEstateDescription(value)
        } else if (name === 'estateContact') {
            setEstateContact(value)
        } else if (name === 'estatePrice') {
            setEstatePrice(value)
        } else if (name === 'estateAddress') {
            setEstateAddress(value)
        } else if (name === 'estateTextSearch') {
            setEstateTextSearch(value)
        } else if (name === 'userUsernameSearch') {
            setUserUsernameSearch(value)
        }
    }

    const handleGetUsers = async () => {
        try {
            setIsUsersLoading(true)
            const response = await estateApi.getUsers(user)
            setUsers(response.data)
        } catch (error) {
            handleLogError(error)
        } finally {
            setIsUsersLoading(false)
        }
    }

    const handleDeleteUser = async (username) => {
        try {
            await estateApi.deleteUser(user, username)
            await handleGetUsers()
        } catch (error) {
            handleLogError(error)
        }
    }

    const handleSearchUser = async () => {
        try {
            const response = await estateApi.getUsers(user, userUsernameSearch)
            const data = response.data
            const users = Array.isArray(data) ? data : [data]
            setUsers(users)
        } catch (error) {
            handleLogError(error)
            setUsers([])
        }
    }

    const handleGetEstates = async () => {
        try {
            setIsEstatesLoading(true)
            const response = await estateApi.getEstates(user)
            setEstates(response.data)
        } catch (error) {
            handleLogError(error)
        } finally {
            setIsEstatesLoading(false)
        }
    }

    const handleDeleteEstate = async (id) => {
        try {
            await estateApi.deleteEstate(user, id)
            await handleGetEstates()
        } catch (error) {
            handleLogError(error)
        }
    }

    const handleAddEstate = async () => {
        const trimmedTitle = estateTitle.trim()
        const trimmedPoster = estatePoster.trim()
        const trimmedDescription = estateDescription.trim()
        const trimmedContact = estateContact.trim()
        const trimmedPrice = estatePrice.trim()
        const trimmedAddress = estateAddress.trim()

        if (!(trimmedDescription && trimmedTitle)) {
            return
        }

        const estate = {
            title: trimmedTitle,
            poster: trimmedPoster,
            description: trimmedDescription,
            contact: trimmedContact,
            price: trimmedPrice,
            address: trimmedAddress
        }

        try {
            await estateApi.addEstate(user, estate)
            clearEstateForm()
            await handleGetEstates()
        } catch (error) {
            handleLogError(error)
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

    const clearEstateForm = () => {
        // setEstateId('')
        setEstateTitle('')
        setEstatePoster('')
        setEstateDescription('')
        setEstateContact('')
        setEstatePrice('')
        setEstateAddress('')
    }

    if (!isAdmin) {
        return <Navigate to='/'/>
    }

    return (
        <Container>
            <AdminTab
                isUsersLoading={isUsersLoading}
                users={users}
                userUsernameSearch={userUsernameSearch}
                handleDeleteUser={handleDeleteUser}
                handleSearchUser={handleSearchUser}
                isEstatesLoading={isEstatesLoading}
                estates={estates}
                estateTitle={estateTitle}
                estatePoster={estatePoster}
                estateDescription={estateDescription}
                estateContact={estateContact}
                estatePrice={estatePrice}
                estateAddress={estateAddress}
                estateTextSearch={estateTextSearch}
                handleAddEstate={handleAddEstate}
                handleDeleteEstate={handleDeleteEstate}
                handleSearchEstate={handleSearchEstate}
                handleInputChange={handleInputChange}
            />
            {/*<div>*/}

            {/*<Grid stackable columns={2}>*/}
            {/*  <Grid.Row>*/}
            {/*    <Grid.Column textAlign='center'>*/}
            {/*      <Segment color='purple'>*/}
            {/*        <Statistic>*/}
            {/*          <Statistic.Value><Icon name='user' color='grey' />{numberOfUsers}</Statistic.Value>*/}
            {/*          <Statistic.Label>Users</Statistic.Label>*/}
            {/*        </Statistic>*/}
            {/*      </Segment>*/}
            {/*    </Grid.Column>*/}
            {/*    <Grid.Column textAlign='center'>*/}
            {/*      <Segment color='purple'>*/}
            {/*        <Statistic>*/}
            {/*          <Statistic.Value><Icon name='laptop' color='grey' />{numberOfEstates}</Statistic.Value>*/}
            {/*          <Statistic.Label>Estates</Statistic.Label>*/}
            {/*        </Statistic>*/}
            {/*      </Segment>*/}
            {/*    </Grid.Column>*/}
            {/*  </Grid.Row>*/}
            {/*</Grid>*/}

            {/*</div>*/}
        </Container>
    )
}

export default AdminPage