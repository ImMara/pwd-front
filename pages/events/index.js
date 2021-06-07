import React from 'react';
import {getBlogs, getEvents} from "../../actions";
import Header from "../../components/layouts/header/Header";
import HeaderContent from "../../components/events/HeaderContent";
import Events from "../../components/events/Events";

export async function getServerSideProps(){
    const events = await getEvents();
    return { props : { events }}
}

function Index({events}) {
    return (
        <div style={{minHeight:"77.5vh"}}>
            <Header screen={true} height={'200px'}>
                <HeaderContent/>
            </Header>
            <div style={{padding:"0 15px"}}>
               <Events events={events} />
            </div>
        </div>
    );
}

export default Index;