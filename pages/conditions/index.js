import React from 'react';
import Conditions from "../../components/conditions/Conditions";
import Header from "../../components/layouts/header/Header";

function Index(props) {
    return (
        <div style={{minHeight:"100vh"}}>
            <Header height={"200px"} screen={true}>
                <img src="/images/conditions-header.jpg" alt="header-cond"
                     style={{
                         width:"100%",
                         height:"100%",
                         objectFit:'cover'
                     }}/>
            </Header>
            <Conditions />
        </div>
    );
}

export default Index;