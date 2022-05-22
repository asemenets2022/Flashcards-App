import React, { useEffect, useState } from "react";
import { deleteDeck, listDecks } from "../utils/api";
import DeckItem from "../data/Decks/DeckItem";
import { Link } from "react-router-dom";

export default function Home() {

    const [decks, setDecks] = useState([]);

    useEffect(() => {
        const ac = new AbortController();

        async function fetchDecks() {
            try {
                const data = await listDecks();
                setDecks(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDecks();
        return () => ac.abort();
    }, []);
    
    async function handleDeleteDeck(id) {
        if (window.confirm("Delete this deck? You will not be able to recover it.") === true) {
            await deleteDeck(id);
            setDecks(() => decks.filter((deck) => deck.id !== id));
        }
    }
    

return (
    <div>
        <div>
            <Link to="/decks/new" className="btn btn-secondary"> + Create Deck</Link>
            </div>
            <br></br>
         <div>
                {decks.map(deck => 
                    <DeckItem key={deck.id} deck={deck} handleDeleteDeck={handleDeleteDeck} />
                    )}
        </div> 
    </div>
) 
}

