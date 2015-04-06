Lighthouse Labs assignment
Week 6 
Day 1 


Part I - Logic
Write a single-player betting game that runs in the browser. The player starts off with $100 and is asked to place a bet between $5 and $10. They then enter a number between 1 and 10 in order to guess the correct number. If they get the number exactly, they double their money. If they are only off by 1, they get to keep their bet. Otherwise they lose their bet. The game ends if the player loses all their money.

Use prompt and alert to communicate with the user.

Tips: * Recall your very first 2-player math game with Ruby and how you built it incrementally * Don't worry about an object-oriented solution, but do use your intuition and experience to break the code into smaller functions * Use console.log for printing debugging messages to the Chrome DevTools' Console

Part II - UI
Add jQuery to the page and change the game so that instead of using prompt and alert for I/O, it uses form fields and the DOM respectively.

You can reference jQuery via any CDN, like Google's CDN.

You will have to add a script tag inside your html <head> tag.

<head>
  ...
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
</head>
Use this opportunity to experiment and get more comfortable with layout, CSS and even UI/UX.

Part II - Enhancements (with UI changes)
Enhnance the game in whichever way is interesting to you. Some ideas:

Ability to restart the game (restart button shows at the end)
Represend the player's money as inidividual DOM elements that fade away as the player loses money. When the player gets more money, additional DIVs appear in their bank account.