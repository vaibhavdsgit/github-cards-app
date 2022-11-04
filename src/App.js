import './App.css';
import React, { useState } from 'react';
import CardList from './components/CardList';
import Form from './components/form';

const App = () => {

    // const testData = [
    //   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    //   {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    //   {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    // ];

    const [profiles, setProfiles] = useState([]);

    const addNewProfile = (profileData) =>{
      console.log("APP", profileData)
      setProfiles(prevState => (
        [...prevState,profileData]
      ))
    }

    return(
      <>
        <div className='header'>Github Cards App</div>
        <Form onSubmit={addNewProfile}/>
        <CardList profiles={profiles}/>
      </>
    )
  
}

export default App;
