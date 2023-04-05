let billetter = [];

function kjopticket() {
    const billett = {
        film: document.getElementById("filmer").value,
        antall: document.getElementById("Antall").value,
        fornavn: document.getElementById("Fornavn").value,
        etternavn: document.getElementById("Etternavn").value,
        telefonnr: document.getElementById("TelefonNr").value,
        epost: document.getElementById("Epost").value,
    };

    let feil = false; // indicator for en feilmelding som ikke skrives

    if (!billett.antall) {
        document.getElementById("AntallError").innerHTML = "Vennligst fyll inn .";
        feil = true;
    }

    if (!billett.fornavn) {
        document.getElementById("FornavnError").innerHTML = "Vennligst fyll inn .";
        feil = true;
    }

    if (!billett.etternavn) {
        document.getElementById("EtternavnError").innerHTML = "Vennligst fyll inn .";
        feil = true;
    }
    if (!billett.epost) {
        document.getElementById("EpostError").innerHTML = "Vennligst fyll inn.";
        feil = true;
    }

    if (!feil) {
        billetter.push(billett);

        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>E-post</th>" +
            "</tr>";

        for (let liste of billetter) {
            ut +=
                "<tr><td>" + liste.film +
                "</td><td>" + liste.antall +
                "</td><td>" + liste.fornavn +
                "</td><td>" +liste.etternavn +
                "</td><td>" + liste.telefonnr +
                "</td><td>" + liste.epost +
                "</td></tr>";
        }

        ut += "</table>";

        document.getElementById("ut").innerHTML = ut;

        billetter = [];

        document.getElementById("AntallError").innerHTML = "";
        document.getElementById("FornavnError").innerHTML = "";
        document.getElementById("EtternavnError").innerHTML = "";
        document.getElementById("TelefonNrError").innerHTML = "";
        document.getElementById("EpostError").innerHTML = "";
    }

    document.getElementById("Antall").value = "";
    document.getElementById("Fornavn").value = "";
    document.getElementById("Etternavn").value = "";
    document.getElementById("TelefonNr").value = "";
    document.getElementById("Epost").value = "";
}

function AltDelete() {
    document.getElementById("ut").innerHTML = "";
    billetter = [];
}
