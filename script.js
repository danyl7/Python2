function toggleSection(sectionNumber) {
    var section = document.getElementById("section" + sectionNumber);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function toggleCard(cardNumber) {
    var card = document.getElementById("card" + cardNumber);
    if (card.style.display === "none" || card.style.display === "") {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
}