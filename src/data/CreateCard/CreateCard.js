import React, { Fragment, useState, useEffect } from "react";
import { readDeck, createCard } from "../../utils/api";
import { Link, useParams, useHistory } from "react-router-dom";
import CardForm from "./CardForm";


export default function AddCard() {

    const { deckId } = useParams();
    const [deck, setDeck] = useState({});
    const history = useHistory();

    useEffect(() => {
        const ac = new AbortController();
    
        async function loadDeck() {
          try {
            const deckInfo = await readDeck(deckId, ac.signal);
            setDeck(deckInfo);
          } catch (error) {
            console.log(error);
          }
        }
    
        loadDeck();
    
        return () => ac.abort();
      }, [deckId]);

    async function submitHandler(card) {
        try {
            await createCard(deckId, card);
            history.push(`/decks/${deck.id}`)
          } catch (error) {
            console.log(error);
          } 
      }

    function cancelHandler() {
      history.push(`/decks/${deckId}`)
    }

    return (
        <Fragment>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
              <li className="breadcrumb-item">Add Card</li>
            </ol>
          </nav>
    
          <div>
            <h1>{deck.name}: Add Card</h1>
            </div>

            <CardForm submitHandler={submitHandler} cancelHandler={cancelHandler} />
    
    </Fragment>
    )
}