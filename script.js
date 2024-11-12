function navigateTo(pageId) {
    // Hide all pages
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('meritsPage').classList.add('hidden');
    document.getElementById('creditsPage').classList.add('hidden');

    // Show the selected page
    document.getElementById(pageId).classList.remove('hidden');
}

function calculateMerits() {
    // Get the input values
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    // Convert to merits using the formula
    const merits = ((hours * 60 + minutes) * 60) + seconds;

    // Calculate the total cost of sending merits with 0.5% fee
    const totalCost = Math.ceil(merits * 1.005);

    // Display the results
    document.getElementById('meritsResult').innerText = `Merits To Send: ${merits}`;
    document.getElementById('meritsCost').innerText = `Total Cost (with 0.5% fee): ${totalCost}`;
}

function calculateCreditSplit() {
    // Replace with JS input for total credits and number of people
    const totalCredits = parseFloat(document.getElementById('totalCredits').value) || 1000; // Default value for total credits
    const totalPlayers = parseInt(document.getElementById('totalPlayers').value) || 4; // Default value for number of players
    const taxRate = 0.005; // Tax rate of 0.5%

    // Calculate the value of A using the given formula
    const A = (totalCredits * (1 - taxRate)) / (totalPlayers - taxRate);
    
    // Calculate the value of S using the given formula
    const S = Math.floor(totalCredits - (totalPlayers-1)*(totalCredits/(totalPlayers-taxRate)))
    const senderAmount = Math.floor(S)
    const receiverAmount = Math.floor(A)



    // Display the result in the HTML (or modify as needed)
    document.getElementById('splitResult').innerHTML = 
        `Each player receives: ${receiverAmount} credits<br>` +
        `Sender loses: ${senderAmount*totalPlayers} credits`;
}


function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
}
