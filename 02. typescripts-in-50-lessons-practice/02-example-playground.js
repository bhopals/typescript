function addVAT(price, vat) {
    return price * (1 + vat);
}
const vatPrice = addVAT(30, 0.2);
const vatPriceWrong = addVAT("this is so", "wrong");
