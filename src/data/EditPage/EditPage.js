import React, { useEffect, useState } from "react";
import { readDeck, updateDeck } from "../../utils/api";
import { Link, useParams, useHistory } from "react-router-dom";
import CardForm from "../DeckForm";

export default function EditPage() {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    const ac = new AbortController();

    async function loadDeck() {
      try {
        const data = await readDeck(deckId, ac.signal);
        setDeck(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadDeck();
    return () => ac.abort();
  }, [deckId]);

  function submitHandler(deck) {
    const ac = new AbortController();

    async function callUpdateDeck() {
      try {
        const updatedDeck = await updateDeck(deck, ac.signal);
        history.push(`/decks/${updatedDeck.id}`)
      } catch (error) {
        console.log(error);
      }
    }
    callUpdateDeck();
    return () => ac.abort();
  }

  function cancelHandler() {
      history.push(`/decks/${deckId}`);
  }

  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item">Edit Deck</li>
          </ol>
        </nav>
      </div>

      <h1>Edit Deck</h1>

      <CardForm deck={deck} submitHandler={submitHandler} cancelHandler={cancelHandler} />
    </div>
  );
}
