import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { connect } from "react-redux";

import Layout from "../components/Layout";

const Contact = ({languageActif})=>{
    const translate = require(`../translations/${languageActif}/contact.json`);
    const [name, setName]= useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');
    const [inputError, setInputError]=useState('');

    const regex = /^[a-z0-9.-]+@+[a-z-]+[.]+[a-z]{2,6}$/;

    const onFormSubmit = (event)=>{
        event.preventDefault();
        if(name==='') return setInputError('name');
        if(email==='' || !regex.test(email)) return setInputError('email');
        if(message==='') return setInputError('message');
        setInputError('');

        const contactFormRequest = async()=>{
            try{
                const payload = { name, email, message};
                await axios.post('/api/contact', payload);
                toast('Your message has been sent successfully', 'success');
                setName('');
                setEmail('');
                setMessage('');
            }catch(error){
                toast('Something went wrong', 'error');
                console.log(error);
            };
        }
        contactFormRequest();
    };

    return(
        <Layout>
            <div className="h-screen">
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_gaplvsns.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
            </div>
            <div className="w-screen flex justify-center font-montserrat px-2">
                <form className="w-full sm:w-1/2 bg-secondary shadow-lg p-10 rounded">
                    <h1 className="text-2xl font-semibold border-b-2 border-theme">{translate.formTitle}</h1>
                    <input type="text" className={`${inputError==='name'&&'border-red-500 border-2'} w-full border-1 bg-white my-3 p-2 rounded`} placeholder={translate.name} value={name} onChange={(event)=>setName(event.target.value)} />
                    <p className={`-mt-2 text-red-500 font-semibold text-sm ${inputError==='name'?'block':'hidden'}`}>Please provide a valid name</p>
                    <input type="text" className={`${inputError==='email'&&'border-red-500 border-2'} w-full border-1 bg-white my-3 p-2 rounded`} placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value.toLowerCase())} />
                    <p className={`-mt-2 text-red-500 font-semibold text-sm ${inputError==='email'?'block':'hidden'}`}>Please provide a valid email</p>
                    <textarea className={`${inputError==='message'&&'border-red-500 border-2'} w-full border-1 bg-white my-3 p-2 rounded`} rows="5" placeholder={translate.message} value={message} onChange={(event)=>setMessage(event.target.value)}></textarea>
                    <p className={`-mt-2 text-red-500 font-semibold text-sm ${inputError==='message'?'block':'hidden'}`}>Please add a message</p>
                    <button type="submit" className="bg-theme text-white py-2 px-4 my-3 font-semibold" onClick={onFormSubmit}>{translate.submit.toUpperCase()}</button>
                </form>
            </div>
        </Layout>
    );
};
const mapStateToProps=(state)=>{
    return {
        languageActif: state.languageActif
    }
}

export default connect(mapStateToProps)(Contact);