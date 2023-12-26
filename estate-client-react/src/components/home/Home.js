import React, {useState, useEffect} from 'react'
import {Statistic, Icon, Grid, Container, Image, Segment, Dimmer, Loader} from 'semantic-ui-react'
import {estateApi} from '../misc/EstateApi'
import {handleLogError} from '../misc/Helpers'
import "./Home.css"
import Footer from "../Footer";

function Home() {

    return (
        <Container>
            <div>
                <div className='presentation'></div>
                <div className='info-about'>
                <h1 id='main-title'>Добро пожаловать в Dixon Estate</h1>
                <p>Мы успешно продвигаемся вперед в своих амбициозных целях. Мы гордимся достигнутыми результатами,
                    вызвавшими заметное движение на рынке недвижимости в сторону смещения акцентов на качество и
                    доступность.</p>

                <h2> МИССИЯ</h2>

                <p> Миссия компании заключается в том, чтобы внедрить на строительный рынок Казахстана новые стандарты
                    качества, создать новое поколение объектов жилой недвижимости, призванные изменить профиль города и
                    обеспечить гражданам достойный уровень комфорта и безопасности.

                    Компания реализует проекты, которые гармонично сочетают в себе все ключевые составляющие для
                    достойной жизни казахстанцев: качество – комфорт – эстетика – доступность.
                    <p/>
                    <h2>СТРАТЕГИЯ</h2>

                    <p>Все составляющие миссии компании обеспечены продуманной стратегией в развитии проектов. Стратегия
                    DIXON ESTATE включает в себя участие банка-партнёра, который предоставил специальные условия для
                    кредитования клиентов. Комфорт и эстетику обеспечивают стратегические зарубежные партнёры:
                    консультанты по архитектуре и планированию жилой недвижимости. Качество гарантировано работой
                    внутреннего отдела контроля качества и международной командой проект-менеджеров. </p>
                </p>
                </div>
                <div><Footer/></div>

            </div>
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

            {/*<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />*/}
            {/*<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />*/}
        </Container>
    )
}

export default Home