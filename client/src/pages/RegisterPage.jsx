import React from 'react';
import MyInput from "../component/UI/MyInput/MyInput";
import registerPage from "./styles/registerPage.css";
import MyButton from "../component/UI/MyButton/MyButton";

const RegisterPage = () => {
    return (
        <div className={"registerPage"}>
            <div className={'eventForm'}>
                <h2>Registration event</h2>
                <form>
                    <p>Full name</p>
                    <MyInput type="text" placeholder="Daniil..."/>

                    <p>Email</p>
                    <MyInput type="email" placeholder="teodaniil2@gmail.com..."/>

                    <p>Date of birth</p>
                    <MyInput type="date"/>

                    <MyButton>Send</MyButton>
                </form>
            </div>
</div>
)
    ;
};

export default RegisterPage;