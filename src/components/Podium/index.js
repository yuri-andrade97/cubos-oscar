import './style.css';
import {  useEffect, useState } from 'react';
import Card from '../Card';


function Podium({ characters, sortCharacterByVotes }) {
    const [podium, setPodium] = useState([]);

    useEffect(() => {
        const localCharacter = [...characters];
        const ordered = localCharacter.sort(sortCharacterByVotes).slice(0, 3);

        setPodium(ordered);
    }, [characters])

    return (
        <>
            <div className="container-podium">
                <Card characters={podium} />  
            </div>
        </>
    );
}

export default Podium;