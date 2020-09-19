import React, {useState, useEffect} from 'react'
import '../Css/TinderCards.css'
import TinderCard from 'react-tinder-card'
import database from '../firebase'

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const unscbscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => (
                    doc.data()
                ))
            )
        ))

        return () => {
            unscbscribe()
        }
    },[people])

    const swiped = (direction, nameToDelete) => {
        console.log("Removing" + nameToDelete);
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen !!")
    }
    
    return (
        <div class="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage : `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards
