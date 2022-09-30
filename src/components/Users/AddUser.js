import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

function AddUser(props) {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null);


    function addUserHandler(event) {
        event.preventDefault();

        if (username.trim().length === 0 || age.trim().length === 0) {
            console.log('both username and age must not be empty');
            setError(
                {
                    title: "Invalid input",
                    message: "Please enter a valid name and age (non-empty values)."
                }
            );
            return;
        }
        if (age < 1 || isNaN(+age)) {
            console.log('number not valid');
            setError(
                {
                    title: "Invalid input",
                    message: "Please enter a valid age (greater than 0)."
                }
            );
            return;
        }

        console.log(username, age);
        props.onAddUser(username, age);

        setUsername('');
        setAge('');
    }

    function usernameChangeHandler(event) {
        setUsername(event.target.value);
        console.log(username);
    }

    function ageChangeHandler(event) {
        setAge(event.target.value);
        console.log(age);
    }

    function errorHandler() {
        setError(null);
    }

    return (
        <div>
            {error ? <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> : null}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="text" value={age} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;