import React, {useEffect, useState} from 'react';
import { getEvents} from "../../actions";
import Header from "../../components/layouts/header/Header";
import HeaderContent from "../../components/events/HeaderContent";
import Events from "../../components/events/Events";
import Loader from "../../components/loader/loader";

export async function getInitialProps(){
    const events = await getEvents();
    return { props : { events }}
}

function Index({events}) {

    const [event,setEvent] = useState();
    const [loader,setLoader] = useState(false);

    useEffect( () =>{
        setTimeout(()=>{
            setEvent(events)
            setLoader(true)
        },500)
    },[])

    return (
        <div style={{minHeight:"77.5vh"}}>
            <Header screen={true} height={'400px'}>
                <HeaderContent/>
            </Header>
            { !loader ? (<Loader/>) :
                (
                <div style={{padding:"0 15px"}}>
                    <Events events={event} />
                </div>
                )
            }
        </div>
    );
}

export default Index;