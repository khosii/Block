let nomaCoin = new CryptoBlockchain();
nomaCoin.addNewBlock(new CryptoBlock(1, "28/04/2024", {sender:
"Tatiana Maks", recipient: "Lambo Maks", quantity: 100}));

nomaCoin.addNewBlock(new CryptoBlock(2, "29/04/2024", {sender:
"Kamogelo Mole", recipient: "Ntokozo Lamb", quantity: 200}));

console.log(JSON.stringify(nomaCoin, null, 4));
