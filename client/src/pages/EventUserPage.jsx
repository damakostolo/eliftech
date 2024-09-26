import React, {useEffect, useState} from 'react';
import eventPage from "./styles/eventPage.css"
import {useSearchUserAndSort} from "../hooks/useSortEvent";
import UserFilter from "../component/UserFilter";
import UserList from "../component/UserList";
import {userGet} from "../http/user";
import {useParams} from "react-router-dom";

const EventUser = () => {
    const [users, setUsers] = useState([])

    const {id} = useParams()

    useEffect(() => {
        userGet(id).then(date => setUsers(date.user))
    }, []);

    console.log(users);

    const [filter, setFilter] = useState({sort:'', search:''});
    //const sortAndFilter = useSearchUserAndSort(users, filter.sort, filter.search);

    return (
        <div className={"eventPage"}>
            <div>
                <div className={'eventFilter'}>
                    <p>Filter</p>
                    <UserFilter filter={filter} setFilter={setFilter}/>
                </div>
                <div className={"eventList"}>

                </div>
            </div>
        </div>
    );
};

export default EventUser;