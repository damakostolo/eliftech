import React, {useEffect, useState} from 'react';
import EventsList from "../component/EventsList";
import eventPage from "./styles/eventPage.css"
import EventsFilter from "../component/EventsFilter";
import {useSearchEventAndSort, useSortEvents} from "../hooks/useSortEvent";
import {eventGet} from "../http/event";

const EventsPage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        eventGet().then(date => setEvents(date))
        eventGet().then(date => console.log(date))
    }, []);

    const [filter, setFilter] = useState({sort:'', search:''});
    const sortAndFilter = useSearchEventAndSort(events, filter.sort, filter.search);

    return (
        <div className={"eventPage"}>
            <div>
                <div className={'eventFilter'}>
                    <p>Filter</p>
                    <EventsFilter filter={filter} setFilter={setFilter}/>
                </div>
                <div className={"eventList"}>
                    <EventsList events={sortAndFilter}/>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;