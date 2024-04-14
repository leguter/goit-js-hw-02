function checkForSpam(message) {
    const updateMessage = message.toLowerCase();
    const spamword = 'spam';
    const spamword2 = 'sale';
    const includeBanWord = updateMessage.includes(spamword)
    const includeBanWord2 = updateMessage.includes(spamword2)
    const includesBanWords = includeBanWord || includeBanWord2;
    if (includesBanWords) {
        return true;
    } else {
        return false;
    }
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));