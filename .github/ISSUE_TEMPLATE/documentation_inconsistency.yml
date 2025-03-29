name: "🔄 Inconsistentie in Documentatie"
description: "Meld een tegenstrijdigheid of verouderde informatie in de documentatie"
labels: ['inconsistentie', 'update vereist']
body:
  - type: markdown
    attributes:
      value: |
        Dank je voor het melden van een inconsistentie in de documentatie! Vul de onderstaande velden in zodat we de informatie kunnen updaten.

  - type: textarea
    id: beschrijving-inconsistentie
    attributes:
      label: "❌ Beschrijving van de inconsistentie"
      description: "Wat klopt er niet? Waar wijkt de documentatie af?"
      placeholder: "Bijv. De versie-informatie op pagina X is verouderd."
    validations:
      required: true

  - type: input
    id: betrokken-pagina
    attributes:
      label: "📄 Betrokken pagina’s"
      description: "Geef de URL of bestandsnaam van de documentatiepagina('s)."
      placeholder: "Bijv. https://docs.example.com/sectie"
    validations:
      required: true

  - type: textarea
    id: suggestie-verbetering
    attributes:
      label: "🛠️ Suggestie voor verbetering"
      description: "Wat zou er volgens jou moeten worden aangepast?"
      placeholder: "Bijv. Werk de versie-informatie bij of verwijder de verouderde sectie."
    validations:
      required: true

  - type: textarea
    id: extra-informatie
    attributes:
      label: "📎 Extra informatie"
      description: "Eventuele context, links of referenties naar de juiste informatie."
      placeholder: "Bijv. Dit is gerelateerd aan de nieuwste release."
    validations:
      required: false
