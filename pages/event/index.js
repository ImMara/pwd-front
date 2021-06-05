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
    console.log(events)
    return (
        <>
            <Header screen={true} height={'400px'}>
                <HeaderContent/>
            </Header>
            <div>
               <Events events={events} />
            </div>
        </>
    );
}

export default Index;