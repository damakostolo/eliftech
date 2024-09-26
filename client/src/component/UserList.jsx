import React from 'react';
import UserItem from "./UserItem";


const UserList = (users) => {
    console.log(users)

    return (
        <div className={"eventList"}>
            {
                users.map(user => (
                    <UserItem user={user} key={user.id}/>
                ))
            }
        </div>
    );
};

export default UserList;