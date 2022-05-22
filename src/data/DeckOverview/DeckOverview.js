import React, { useEffect, useState, useCallback, Fragment } from "react";
import { readDeck, deleteCard } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import CardDetails from "./CardDetails";

export default function DeckOverview() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });

  const fetchDecks = useCallback(async () => {
    try {
      const data = await readDeck(deckId);
      setDeck(data);
    } catch (error) {
      console.log(error);
      setDeck({ name: "Not Found" });
    }
  }, [deckId]);

  useEffect(() => {
    fetchDecks();
  }, [deckId, fetchDecks]);

  async function deleteHandler(id) {
    if (
      window.confirm(
        "Delete this card? You will not be able to recover it."
      ) === true
    ) {
      await deleteCard(id);
      fetchDecks();
    }
  }

  return (
    <Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">{deck.name}</Link>
          </li>
        </ol>
      </nav>

      <div>
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary">
          Edit
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
          Study
        </Link>
        <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary">
          Add Cards
        </Link>
        <a className="btn btn-danger" onClick={() => deleteHandler(deck.id)}>
          Delete {" "}
        </a>
      </div>

      <div>
        <h1>Cards</h1>
      </div>

      <div>
        {deck.cards.map((card, index) => (
          <CardDetails
            key ={index}
            id={card.id}
            front={card.front}
            back={card.back}
            deckId={deckId}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </Fragment>
  );
}
