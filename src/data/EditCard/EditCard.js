import React, { useEffect, useState } from "react";
import { readDeck, readCard, updateCard } from "../../utils/api";
import { Link, useParams, useHistory } from "react-router-dom";
import CardForm from "../CreateCard/CardForm";

export default function EditCard() {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

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

    async function loadCard() {
        try {
            const cardInfo = await readCard(cardId, ac.signal);
            console.log(cardInfo);
            setCard(cardInfo);
        } catch (error) {
            console.log(error);
        }
    }

    loadDeck();
    loadCard();
    return () => ac.abort();
  }, [deckId, cardId]);



  async function submitHandler(card) {
      try {
        await updateCard(card);
        history.push(`/decks/${deckId}`)
      } catch (error) {
        console.log(error);
      }
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
            <li className="breadcrumb-item">Edit Card {cardId}</li>
          </ol>
        </nav>
      </div>

      <h1>Edit Card</h1>

      <CardForm card={card} submitHandler={submitHandler} cancelHandler={cancelHandler} />
    </div>
  );
}
