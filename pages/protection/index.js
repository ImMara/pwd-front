import React from 'react';
import Header from "../../components/layouts/header/Header";
import Protection from "../../components/protection/Protection";

function Index(props) {
    return (
        <div style={{minHeight:'100vh'}}>
            <Header height={"200px"} screen={true}>
                <img src="/images/conditions-header.jpg" alt="header-cond"
                     style={{
                         width:"100%",
                         height:"100%",
                         objectFit:'cover'
                     }}/>
            </Header>
            <div className={'wrapper'}>
                <Protection/>
            </div>
        </div>
    );
}

export default Index;