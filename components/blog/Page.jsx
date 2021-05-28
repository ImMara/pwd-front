import React, {useEffect, useState} from 'react';
import Cards from "./Cards";
import Header from "../layouts/header/Header";

function Page({blogs}) {

    return (
        <>
            <Header screen={true} color={"red"} height={"400px"}/>
            {blogs.map(b => (
                <>
                    <Cards blogs={b}/>
                </>
            ))}
        </>
    );
}

export default Page;