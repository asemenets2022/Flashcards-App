import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function DeckForm({deck, submitHandler}) {

const [deckInfo, setDeckInfo] = useState(deck);

useEffect(() => {
    setDeckInfo(deck);
}, [deck]);

const updateForm = (event) => {
    const { name, value } = event.target;
    setDeckInfo({...deckInfo, [name]: value });
}

const submit = (event) => {
    event.preventDefault();
    submitHandler(deckInfo);
}

    return (
    <div>
          <form onSubmit={submit}>
            <div className="form-group" className="mb-3">
              <label>Name</label>
              <input type="text" className="form-control" placeholder="Deck Name" name="name" value={deckInfo?.name || "" } onChange={updateForm} />
            </div>
            <div className="form-group" className="mb-3">
              <label>Description</label>
              <textarea as="textarea" className="form-control" rows='3' name="description" placeholder="Brief description of the deck" value={deckInfo?.description || "" } onChange={updateForm} />
            </div>
            <Link to="/" className="btn btn-secondary">Cancel</Link>
            <a className="btn btn-primary" type="submit">Submit</a>
          </form>
        </div>
      );
    }
