import React from 'react';
import {getBlogs, getEvents} from "../../actions";

export async function getServerSideProps(){
    const events = await getEvents();
    return { props : { events }}
}

function Index({events}) {
    console.log(events)
    return (
        <div>
            { events.map( el => (
                el.name
            ))}
        </div>
    );
}

export default Index;