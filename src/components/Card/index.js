import './style.css';

function Card({ characters, handleAddVote }) {
    return (
        <>
            { characters.map(item => (
                <div className="card" key={item.id}>
                    
                    <h3>{item.name}</h3>
                    <img src={item.img} alt="" className="img-character"/>

                    <div className="buttons-card">
                        <button
                            className="button-green" 
                            onClick={() => handleAddVote(1, item.id)}
                         >+</button>
                        <button 
                            className="button-red" 
                            onClick={() => handleAddVote(-1, item.id)}
                        >-</button>
                    </div>

                </div>
                ))
            
            }
        </>
    );
}

export default Card;