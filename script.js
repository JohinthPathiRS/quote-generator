// Array of programming quotes
const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    "It’s not a bug – it’s an undocumented feature.",
    "Simplicity is the soul of efficiency.",
    "Programming is the art of telling another human what one wants the computer to do.",
    "The only way to learn a new programming language is by writing programs in it.",
    "Good code is its own best documentation.",
    "The computer was born to solve problems that did not exist before.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomIndex];
    document.getElementById('quote-text').textContent = quoteText;
}

// Event listener for the quote button
document.getElementById('quote-button').addEventListener('click', generateQuote);
