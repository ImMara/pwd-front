import React from 'react';
import Header from "../../components/layouts/header/Header";
import Mentions from "../../components/mentions/Mentions";

function Index(props) {
    return (
        <div style={{minHeight:"100vh"}}>
            <Header height={"400px"} screen={true}>
                <img src="/images/conditions-header.jpg" alt="header-cond"
                     style={{
                         width:"100%",
                         height:"100%",
                         objectFit:'cover'
                     }}/>
            </Header>
            <div className={'wrapper'}>
                <Mentions/>
            </div>
        </div>
    );
}

export default Index;