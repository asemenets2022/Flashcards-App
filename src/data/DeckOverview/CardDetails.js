import React from "react";
import { Link } from "react-router-dom";

export default function CardDetails({ id, front, back, deckId, deleteHandler}) {
    return (
        <div className="card" style={{ width: "auto" }}>
          <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>{front}</p>
            </div>
            <div className="col-md-6">
              <p>{back}</p>
            </div>
          </div>
          <div className="row" style={{textAlign: "right"}}>
            <Link to={`/decks/${deckId}/cards/${id}/edit`} className="btn btn-secondary">
              Edit
            </Link>
            <a className="btn btn-danger" onClick={() => deleteHandler(id)}>Delete</a>
          </div>
        </div>
        </div>
    )
}
