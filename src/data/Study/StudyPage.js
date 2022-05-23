import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams, Link, useHistory } from "react-router-dom";

export default function Study() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState({ cards: [] });

  const [cardIndex, setCardIndex] = useState(0);

  const [isFlipped, setIsFlipped] = useState(false);

  const history = useHistory();

  function clickHandler() {
    setIsFlipped(!isFlipped);
  }

  function nextClickHandler() {
    if (cardIndex + 1 < deck.cards.length) {
      setCardIndex(cardIndex + 1);
    } else {
      if (window.confirm("Restart cards?") === true) {
        history.go(-{cardIndex});
      } else {
        history.push("/");
      }
    }
  }

  useEffect(() => {
    const ac = new AbortController();

    async function fetchCards() {
      try {
        const data = await readDeck(deckId);
        setDeck(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCards();
    return () => ac.abort();
  }, [deckId]);

  const card = deck.cards[cardIndex] || {};

  if (deck.cards.length <= 2) {
    return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">{deck.name}</Link>
          </li>
          <li className="breadcrumb-item">Study</li>
        </ol>
      </nav>

      <div>
        <h1>Study: {deck.name}</h1>
      </div>

    <h2>Not Enough cards.</h2>
    <p>You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.</p>
    <Link to="/decks/:deckId/cards/new" className="btn btn-primary">+ Add Cards</Link>
    </div>
    )

  } else {

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">{deck.name}</Link>
          </li>
          <li className="breadcrumb-item">Study</li>
        </ol>
      </nav>

      <div>
        <h1>Study: {deck.name}</h1>
      </div>

      <div className="card">
        <h3 className="card-title">
          Card {cardIndex + 1} of {deck.cards.length}
        </h3>
        <p className="card-text">
          {isFlipped ? card.back : card.front}
        </p>
        <button className="btn btn-secondary" onClick={clickHandler}>
          Flip
        </button>
        {isFlipped && cardIndex + 1 <= (deck.cards.length) ? <button className="btn btn-primary" onClick={nextClickHandler}>Next</button> : null}
      </div>
    </div>
  )

  }

}
