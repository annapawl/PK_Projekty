function showCard(num) {
    let content = "";

    if (num === 1) {
        content = `
        <h1>Anna Pawlicová</h1>
        <p>Ahoj, jsem studentka Pražské Konzervatoře a věnuji se hře na housle.</p>
        <p><b>Oblíbené předměty:</b> Hlavní obor, angličtina, literatura</p>
        <p>Bohužel se aktuálně učím tvořit webové stránky.</p>
        <p><i>Toto je moje první stylovaná karta.</i></p>
        `;
    }

    if (num === 2) {
        content = `
        <h1>Anna Pawlicová</h1>
        <p>Jsem studentkou Pražské konzervatoře a hraji na housle.</p>
        <p><b>Oblíbené činnosti:</b> hraní na housle, čtení, trávení času s rodinou</p>
        <p style="color:red;">Aktuálně pracuji na vlastním mini portfoliu.</p>
        <p>Tohle je moje první stylovaná karta.</p>
        `;
    }

    if (num === 3) {
        content = `
        <h2>CD</h2>
        <h1>Anna Pawlicová</h1>
        <p>Studentka Pražské konzervatoře. Neumím programovat.</p>
        <p>Snažím se dostat jedničku z informatiky, ale moc to nechápu.</p>
        <p>Studentka | housle | samé jedničky</p>
        <button>Nekontaktujte mě prosím, děkuji.</button>
        `;
    }

    if (num === 4) {
        content = `
        <h1>Anna Pawlicová</h1>
        <p>Studentka Pražské konzervatoře.</p>

        <h3>O mně</h3>
        <p>Zajímám se o hudbu, literaturu a programování.</p>

        <h3>Dovednosti</h3>
        <p>Nevím.</p>

        <h3>Kontakt</h3>
        <p>Email: anna.pawlicova@prgcons.cz</p>
        `;
    }

    document.getElementById("card").innerHTML = content;
}
