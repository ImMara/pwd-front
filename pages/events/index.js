import React, {useEffect, useState} from 'react';
import { getEvents} from "../../actions";
import Header from "../../components/layouts/header/Header";
import HeaderContent from "../../components/events/HeaderContent";
import Events from "../../components/events/Events";
import Loader from "../../components/loader/loader";

export async function getStaticProps(){
    const events = await getEvents();
    return { props : { events }}
}

function Index({events}) {

    return (
        <div style={{minHeight:"77.5vh"}}>
            <Header screen={true} height={'400px'}>
                <HeaderContent/>
            </Header>
            <div style={{padding:"0 15px"}}>
                <Events events={events} />
            </div>
        </div>
    );
}

export default Index;