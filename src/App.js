import React, {useState} from 'react';

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [userList, setUserList] = useState([]);

    function addUserHandler(username, age){
        setUserList(
            (prevUserList) =>
            {
                return [...prevUserList, {name: username, age: age, id: Math.random().toString()}];
            }
        );
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={userList}/>
        </div>
    );
}

export default App;
