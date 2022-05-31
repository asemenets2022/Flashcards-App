# Flashcard-o-matic

Flashcard-o-matic is an application intended for both teachers to use to create decks of flashcards for the subjects they teach, as well as for students to use to study the decks their teachers have created.

# Technology

JavaScript, React, HTML, CSS, Bootstrap, Open Iconic, and Google Fonts.

# Installation 
1. Fork and clone this repository.
2. Run npm install to install project dependencies.
3. Run npm run start to concurrently start the project's frontend and backend.

# Home Page
![image](https://user-images.githubusercontent.com/99997631/171073096-25ccd2aa-0be0-4b7a-8db9-921b1581aa61.png)

The home screen has the following features:

- Create Deck button that will take the user to the /decks/new page when clicked on.
- Existing decks are shown with the deck name, the number of cards in that deck, and a View, Study, and Delete buttons.
- Clicking the View button will take the user to the Deck screen, /decks/:deckId, where more information about that particular deck is stored.
- Clicking the Study button will take the user to the Study screen, decks/:deckId/study, where the user can begin to study the cards in that deck.
- Clicking the Delete button will prompt a warning message to appear, and give the user the option to delete the deck or cancel this action.

# Study Screen

![image](https://user-images.githubusercontent.com/99997631/171073332-0e5dc683-c65e-4c67-a48b-c7bb999184af.png)

The study screen has the following features:

- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck being studied and a link to that deck's screen, and finally, the text: Study.
- The deck's title is shown on the screen.
- Cards are shown one at a time, front-side first.
- A Flip button at the bottom of each card flips it to the other side when clicked on.

# Create Deck

![image](https://user-images.githubusercontent.com/99997631/171073507-eeb745d8-7a0b-4415-afcf-394a96dcdbfc.png)

The Create Deck screen has the following features:

- A breadcrumb navigation bar with a link to the Home page, followed by the text: Create Deck.
- A form is shown with the appropriate fields for creating a new deck.
- If the user cliks on the Submit button, the user is taken to this new deck's Deck screen.
- If the user clicks on the Cancel button, the user is taken back to the Home page.

# Deck Screen

![image](https://user-images.githubusercontent.com/99997631/171073617-a772558d-0e4c-4aa4-8ac9-ff77fb0ac62f.png)

The Deck screen has the following features:
- A breadcrumb navigation bar with a link to the Home page, followed by the name of the deck.
- This screen includes the deck's name and description.
- Below the description, there are Edit, Study, Add Cards, and Delete buttons. Each button results in a different outcome when clicked on.

Each Deck and each card can be studied, edited, added or deleted. 
