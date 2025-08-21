# Labelsysteem van het Vlaams Woordenboek 

Het labelsysteem is een kernonderdeel van het Vlaams woordenboek. 
Het helpt om woorden niet alleen te beschrijven, maar ook te kaderen in gebruik, toon, plaats en tijd.
Deze documentatie is er voor iedereen die aan het woordenboek meewerkt: redacteurs, eindredacteurs, administrators en ontwikkelaars. 
Het doel is helderheid en uniformiteit brengen in het gebruik van labels, zodat de inhoud betrouwbaar en bruikbaar blijft. 

## Wat doet het labelsysteem? 

Met labels geef je extra informatie over een woord. 
Ze kunnen aanduiden of een woord formeel of informeel is, typisch voor een bepaalde regio, verouderd is, of specifiek is voor een bepaald vakgebied. 
Ook de gebruikssituatie, zoals ironisch, aanstootgevend of kindertaal, kan gelabeld worden. Een woord mag gerust meerdere labels krijgen. 

## Wie mag wat? 

We maken gebruik van een role based access control systeem (RBAC). Alleen bevoegde personen kunnen labels aanmaken, bewerken of verwijderen. 
Dit betekent dat alleen gebruikers die de juiste permissies hebben, labels kunnen aanmaken, bewerken of verwijderen. Hieronder vind je een overzicht van de bijhorende permissies die betrekking hebben op labels.

Deze permissies hebben alleen betrekking op labels in de beheersconsole:

| Permissie                      | Beschrijving                                                                 |
|:-------------------------------|:-----------------------------------------------------------------------------|
| **`Verwijderen van meerdere`** | Machtiging om labels in bulk te verwijderen.                                 |
| **`Verwijderen`**              | Machtiging om een label te verwijderen in het woordenboek                    |
| **`Loskoppelen`**              | Machtiging om een label te ontkoppelen van een artikel                       |
| **`Bewerken`**                 | Machtiging om een label te bewerken                                          |
| **`Koppelen`**                 | Machtiging om een label te koppelen aan een woordenboek artikel              |
| **`Bekijken`**                 | Machtiging om de gegevens van een specifiek label te bekijken.               | 
| **`Aanmaken`**                 | Machtiging om een label aan te maken                                         |
| **`Bekijk alle`**              | Machtiging om het overzicht van labels te bekijken                           | 
| **`Articles`**                 | Hoofdpermissie om toegang te krijgen tot de cluster die ook de labels bevat. |

## Hoe labels toevoegen aan een artikel? 

Als je een woord invoert of bewerkt, zie je een veld 'Labels'. Je kunt in dat veld typen om een label te zoeken, of uit de lijst een selectie maken.
Geselecteerde labels verschijnen als visuele 'badges'.
Je kunt ze eenvoudig verwijderen met een klik op het kruisje. 
Als alles klaar is, klik je op "Opslaan", "Bevestigen" en "Volgende". 

## Voorbeelden in de interface 

- **Invoerinterface**: bij het woord "bakske" (auto) zie je bijvoorbeeld de labels *informeel, dialect* en *West-Vlaams* verschijnen. 
- **Publieke weergave**: de labels bij het woord staan onder de beschrijving.
- **Beheersconsole:** admins en ontwikkelaars kunnen labels beheren: aanpassen, toelichten, aantal toepassingen bekijken en de bijhorende beschrijving geven. Redacteurs en eindredacteurs kunnen alleen labels koppelen en ontkoppelen.

### Voorbeeldlabels 

Hieronder enkele voorbeeldlabels en hoe ze gebruikt worden: 

| Label           | Betekenis                          | Voorbeeldgebruik                       | 
| :-------------  | :--------------------------------- | :------------------------------------- | 
| **informeel**   | Niet geschikt voor formele context | "bakske" (voor auto)                   | 
| **West-Vlaams** | Typisch voor West-Vlaanderen       | "goeste" (zin, trek)                   | 
| **ouderwets**   | In onbruik geraakt                 | "koddig"                               | 
| **technisch**   | Gebruikt in vakjargon              | "router"                               | 
| **sarcastisch** | Op ironische toon gebruikt         | "held" (voor iemand die iets dom doet) |

## Regels voor labelgebruik voor de redacteur en de eindredacteur

- Gebruik labels **consistent** en volgens bestaande richtlijnen. 
- **Twijfel je?** Laat het label weg en overleg met een (andere) eindredacteur. 
- **Maak nooit zelf nieuwe labels aan**, dit gebeurt enkel via de bevoegde personen.
- **Herbekijk regelmatig** of oudere labels nog kloppen. Taalgebruik is iets dat continu evolueert. 
- **Mis je een label?**, meld dat aan de bevoegde persoon.

## Let op bij het toevoegen van nieuwe labels (admins en ontwikkelaars)

- **Controleer eerst** of een label al bestaat, om dubbele en tegenstrijdige labels te vermijden. 

## Onderhoud 

Admins en ontwikkelaars zorgen ervoor dat het systeem up-to-date blijft. 
Ze controleren op fouten en dubbels, en beheren nieuwe labels. 
Elke verandering in het labelaanbod wordt indien nodig ook in deze documentatie opgenomen.

## Veelgestelde vragen (FAQ)

- **Ik mis een label. Wat nu?** -> Meld het aan een adminstrator zodat die het nodige kan doen. 
- **Kan ik een verkeerd label verwijderen?** -> Meld het aan een administrator. 
- **Ziet de gebruiker elk label?** -> Ja, een gebruiker kan elk gekoppeld label zien. 
- **Mag ik zelf een label aanmaken?** -> Nee, dat is voorbehouden aan de rol 'administrator'. 

## Vragen of hulp nodig? 

Contacteer een administrator of eindredacteur of plaats een bericht op het redacteursforum. Zo blijf je nooit met vragen zitten.
