import React, { Fragment } from "react";
import { createDeck } from "../../utils/api";
import DeckForm from "../DeckForm";
import { useHistory, Link } from "react-router-dom";

export default function CreateDeckForm() {
  const history = useHistory();

  function submitHandler(deck) {
    const abortController = new AbortController();

    async function callCreateDeck() {
      try {
        const createdDeck = await createDeck(deck, abortController.signal);
        history.push(`/decks/${createdDeck.id}`);
      } catch (error) {
        console.log(error);
      }
    }
    callCreateDeck();
    return () => {
      abortController.abort();
    };
  }

  return (
    <Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">Create Deck</li>
        </ol>
      </nav>

      <div>
        <h1>Create Deck</h1>
      </div>

      <DeckForm submitHandler={submitHandler} />
    </Fragment>
  );
}
