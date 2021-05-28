import React, {useEffect, useState} from 'react';
import Cards from "./Cards";

function Page({blogs}) {

    return (
        <>
            {blogs.map(b => (
                <Cards blogs={b}/>
            ))}
        </>
    );
}

export default Page;