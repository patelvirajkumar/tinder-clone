import React, {useState, useEffect} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios'

function TinderCards() {

    const [people, setPeople] = useState([]);

const swiped=(direction, nameToDeelete)=>{
    console.log("removing : " + nameToDeelete);
   // setLastDirection(direction);
};

useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/cards')
        setPeople(req.data);
        }

        fetchData();
}, []);



const outOfFrame =(name)=>{
    console.log(name +"left to screen")
;}


    return (
        <div className="tinderCards">
            <div className="tinderContainer">
            {people.map((person)=>(
                <TinderCard 
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir)=>swiped(dir, person.name)}
                onCardLeftScreen={()=> outOfFrame(person.name)} >
                    <div 
                        style={{backgroundImage:`url(${person.imgUrl})`}}
                        className="card">
                            <h3>{person.name}</h3>
                        </div>

                </TinderCard>
            ))}

            </div>


            
        </div>
    )
}

export default TinderCards
