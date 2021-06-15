import React, {useState} from 'react';
import styles from './Events.module.scss';
import Pagination from "../pagination/Pagination";
import Link from "next/link";

function Events({events}) {

    const [research, setResearch] = useState("");
    const [researchCat, setResearchCat] = useState("");

    const cleanWords = (word) => {
        word.toLowerCase()
        word = word.replace(/[\340-\346]/g, "a")
        word = word.replace(/[\350-\353]/g, "e")
        word = word.replace(/[\354-\357]/g, "i")
        word = word.replace(/[\362-\370]/g, "o")
        word = word.replace(/[\371-\374]/g, "u")
        word = word.replace(/[\361]/g, "n")
        word = word.replace(/[\347]/g, "c")
        word = word.replace(/\,|\'|\-/g, " ")
        word = word.replace(/[\s]{2,}/g, " ")
        return word.trim()
    }

    const handleChangeResearch = (event) => {
        const target = event.target
        const value = target.value.toLowerCase()
        const name = target.name
        const cleaned = cleanWords(value)

        setResearchCat(name)
        setResearch(cleaned)
    }

    const filters = (event) => {
        const wordLength = 2;
        switch (researchCat) {
            case 'name':
                if (research === "") {
                    return events
                }
                if (research.length > wordLength) {
                    return events.filter(event => event.name.toLowerCase().includes(research))
                }
                return events;
            case 'address' :
                return events.filter(event => event.address.toLowerCase().includes(research))
            case 'date':
                console.log(research)
                events.map(event => {
                    console.log(event.date.toString().substring(0, 5).replace(/\,|\'|\-/g,' '))
                } )
                return events.filter( event => event.date.toString().substring(0, 10).replace(/\,|\'|\-/g,' ').includes(research) )
            default:
                return events
        }
    }


    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 3

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    const paginatedEvents = Pagination.getData(filters(), currentPage, itemsPerPage)

    return (
        <div className={"wrapper"}>
            <h2 className={styles.top}>Trouver des évènements</h2>
            <div className={styles.form}>
                <label htmlFor="name">
                    Par nom :
                    <input type="text" name={"name"} onChange={handleChangeResearch}/>
                </label>
                <label htmlFor="">
                    Par adresse :
                    <input  type={"text"} name="address" id="" onChange={handleChangeResearch}/>
                </label>
                <label htmlFor="">
                    Par date :
                    <input type="date" name={"date"} onChange={handleChangeResearch}/>
                </label>
            </div>
            <div className={styles.last_events}>
                {paginatedEvents.map((event,index) => (
                    <>
                        <a href={event.link}  target="_blank" >
                            <div className={styles.hero} key={event._id} style={{cursor:'pointer'}}>
                                <div className={styles.image}>
                                    <img src={`http://vps-447d73c6.vps.ovh.net/images/events/resized/${event.image}`} alt=""/>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.title}>{event.name}</div>
                                    <div className={styles.date}>{event.date.toString().substring(0, 10)} - {event.endDate && event.endDate.toString().substring(0,10)}</div>
                                    <div className={styles.address}>{event.address}</div>
                                </div>
                                { index === itemsPerPage - 1 ? undefined : <hr/> }
                            </div>
                        </a>
                    </>
                ))}
                { itemsPerPage < filters().length &&
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        length={filters().length}
                        onPageChanged={handlePageChange}
                    />
                }
            </div>
        </div>
    );
}

export default Events;