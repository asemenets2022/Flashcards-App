import React from "react";
import { Link } from "react-router-dom";

export const DeckItem = ({deck, handleDeleteDeck}) => (
    <div className="card" style={{ width: 'auto' }}>
    <div className="card-body">
        <div className="row">
            <div className="col-md-10">
            <h1 className="card-title">{deck.name}</h1>
            </div>
            <div className="col-md-2">
            <h5 className="card-subtitle">{deck.cards.length} cards</h5>
            </div>
        </div>
    
      <p className="card-text">
        {deck.description}
      </p>
      <div className="row">
      <div className="col-md-10">
      <Link to={`/decks/${deck.id}`} className="btn btn-secondary">View</Link>
      <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
      </div>
      <div className="col-md-2">
      <button className="btn btn-danger" onClick={() => handleDeleteDeck(deck.id)}>Delete</button>
      </div>
      </div>
    </div>
  </div>
);

export default DeckItem;
