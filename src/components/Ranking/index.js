import { useEffect, useState } from 'react';
import './style.css';

function Ranking({ characters, sortCharacterByVotes }) {

    const [ranking, setRanking] = useState([])
   
    useEffect(() => {
        const localCharacter = [...characters];
        console.log(localCharacter)
       const ordered = localCharacter.sort(sortCharacterByVotes);

        setRanking(ordered);
    }, [characters]);


    return (
        <div className="container-ranking">
            <h3>Ranking</h3>
            { ranking.map(item => (
                <div className="character-ranking" key={item.id}>
                    <strong>{item.name}</strong>
                    <strong>{item.votes}</strong>
                </div>
            ))}
        </div>
    );
}

export default Ranking;