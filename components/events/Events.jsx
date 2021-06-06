import React, {useState} from 'react';
import styles from './Events.module.scss';
import Pagination from "../pagination/Pagination";
import Link from "next/link";

function Events({events}) {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 3

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }
    const paginatedEvents = Pagination.getData(events, currentPage, itemsPerPage)

    return (
        <div className={"wrapper"}>
            <h2 className={styles.top}>Trouver des évènement</h2>
            <div className={styles.lastEvents}>
                {paginatedEvents.map(event => (
                    <>
                        <Link href={"/events/"+event._id}>
                            <div className={styles.hero} key={event._id} style={{cursor:'pointer'}}>
                                <div className={styles.image}>
                                    <img src={`http://api.energydrink.eraertsalan.be/images/events/resized/${event.image}`} alt=""/>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.title}>{event.name}</div>
                                    <div className={styles.date}>{event.date.toString().substring(0, 10)} - {event.endDate && event.endDate.toString().substring(0,10)}</div>
                                    <div className={styles.address}>{event.address}</div>
                                </div>
                                <hr/>
                            </div>
                        </Link>
                    </>
                ))}
                { itemsPerPage < events.length &&
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        length={events.length}
                        onPageChanged={handlePageChange}
                    />
                }
            </div>
        </div>
    );
}

export default Events;