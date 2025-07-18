# Rate limiting voor het suggestie formulier in het Vlaams Woordenboek 

Doorheen de levensduur van het Vlaams Woordenboek ontvingen we talloze suggesties voor nieuwe woorden, betekenissen, opmerkingen en aanvullingen. 
Dat is geweldig, maar trekt soms ook **misbruikers aan**, zoals automatische programma's (bots) dioe honderden formulieren proberen in te dienen. 

Om dit tegen te gaan is er besloten om een techniek te implementeren die **rate limiting** heet. 
Dat betekent letterlijk: **snelheidsbeperking.** 

Je kunt het vergelijken met een snelheidsbegrenzer in een auto. Niet om je tegen te houden, maar om alles veilig en beheersbaar te houden. 

[[toc]]

## Wat merk jij daarvan? 

Wanneer je heel sn na elkaar meerdere formulieren probeert in te dienen (bv. 15 inzendingen per minuut); krijg je tijdelijk een melding als deze: 

> **"Het lijkt erop dat je te veel suggesties probeert toe te voegen op een te kore tijd. Probeer het later nog eens."**

Dat is geen fout of sanctie. Het systeem vraagt je gewoon om **even te pauzeren** zodat het misbruik kan tegenhouden zonder jou als gewone gebruiker te hinderen. 

## Waarom is dat nodig? 

Doorheen de het bestaan van het Vlaams Woordenboek hebben we enkele incidenten gehad waarbij gebruikers spam hadden toegevoegd tussen onze woordenboek artikelen. En hebben vrijwilligers dit telkens moeten bekijken en opkuisen. Wat de nodige overlast en tijds investering met zich meebracht. Daarom hebben we er voor besloten om **Rate Limiting** Te implementeren om bij een incident de schade te beperken. 

Als ook om de volgende redenen: 

- **Spam tijdig te blokkeren:** Automatisch ingevulde formulieren door botst of scripts. 
- **Misbruik te beperken:** bv. iemand die honderden keren 'test' of ongepaste inhoud probeert te verzenden. 
- **De site snel the houden:** te veel aanvragen teglijk kunnen de wbesite vertragen voor iedereen. 

## Hoe werkt het precies? 

- Het systeem kijkt naar je **IP-adres** (dat is een soort van identificatie van je internetverbinding). 
- Als er meer dan 15 inzendingen binnen korte periode van het zelfde adres komen, krijg je na het insturen van het formulier een melding. 
- Vanaf dab moet je enkele minuten wachten voor je weer formulieren kunt indienen. 
- Na die wachttijd wordt de teller automatisch weer op nul gezet. 


Je hoeft dus niets te doen, gewoon even wachten. 

## Verschil tussen anonieme en ingelogde gebruikers

We maken een onderscheid tussen: 

| Gebruikerstype    | Maximale inzendingen | Periode         | Op basis van  |
| ----------------- | -------------------- | --------------- | ------------- |
| **Niet-ingelogd** | 15                   | ca. 1–2 minuten | IP-adres      |
| **Ingelogd**      | 60                   | ca. 1–2 minuten | Gebruikers-ID |

### Waarom krijgen ingelogde gebruikers meer ruimte? 

Gebruikers met een ccount zijn doorgaans betrouwbaarder: 

- Ze hebben zich geregistreerd met een ccount 
- Hun acties kunnen invidueel gevolgd worden 
- Ze zijn vaak actief betrokken bij het platform (bv. redacteurs)

Daarom geven we hen meer flexibiliteit, zodat ze vlotter meerdere formulieren kunnen indienen (bijv. bij het toevoegen van meerdere gerelateerde woorden of suggesties).

## Hoelang moet ik wachten? 

Dat verschilt een beetje, maar meestal: 

- **Een paar minuten tot maximum een kwartier** is voldoende. 
- Daarna kun je weer suggesties indienen. 

Je krijgt geen permanente blokkering. Dit is tijdelijk en automatisch. 

## Speciale gevallen: gedeelde netwerken 

In Klaslokalen, bibliotheken of kantoren delen meerdere personen vaak één IP-adres. Daardoor kan het lijken alsof **één persoon** plots tientallen formulieren indient, wat sneller de limiet activeert. 

#### Aanbevelingen 

- Laat gebruikers inloggen als herhaaldelijk formulieren willen invullen 
- Verspreid de inzendingen over iets meer tijd 
- Neem contact op met het beheerteam als dit structureel een probleem vormt

## Gaat dit in tegen gewone gebruikers? 

Neen. Wie op een normale suggesties of aanvullingen instuurt, merkt hier meestal **niets van**. 
De limiet is ruim genoeg voor gewoon gebruik, en enkel bedoeld om misbruik tegen te houden. 

## Wat kun je doen als je geblokkeerd wordt? 

- **Wacht 5 a 15 minuten, en probeer dan opnieuw. 
- Dien je meerdere suggesties in? Verspreid ze wat in de tijd. 
- Laat ons iets weten als het probleem blijft optreden, zeker al je werkt in een klas, organisatie of redactie. 

## Instellingen (technisch overzicht)

| Parameter         | Anonieme gebruikers                      | Ingelogde gebruikers   |
| ----------------- | ---------------------------------------- | ---------------------- |
| Sleutel           | `submission:{ip}`                        | `submission:{user_id}` |
| Maximum pogingen  | 15                                       | 45                     |
| Herstelperiode    | 60 sec.                                  | 60 sec.                |

--- 

Heb je nog vragen? Laat het gerust weten in onze Discord server of via e-mail. We helpen je graag verder. 