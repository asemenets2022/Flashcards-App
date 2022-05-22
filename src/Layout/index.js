//THIS IS STARTING DOC, WILL NEED TO HAVE AT LEAST 7 ROUTES

import React, { Fragment } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import StudyPage from "../data/Study/StudyPage";
import CreateDeck from "../data/CreateDeck/CreateDeck";
import DeckOverview from "../data/DeckOverview/DeckOverview";
import EditPage from "../data/EditPage/EditPage";
import CreateCard from "../data/CreateCard/CreateCard";
import EditCard from "../data/EditCard/EditCard";


function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyPage />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route exact={true} path={"/decks/:deckId"}>
            <DeckOverview />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditPage />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <CreateCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route>
          <NotFound />
          </Route>

        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
