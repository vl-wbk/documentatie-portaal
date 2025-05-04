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
- Na die wahttijd wordt de teller automatisch weer op nul gezet. 

Je hoeft dus niets te doen, gewoon even wachten. 

## Hoelang moet ik wachten? 

Dat verschilt een beetje, maar meestal: 

- **Een paar minuten tot maximum een kwartier** is voldoende. 
- Daarna kun je weer suggesties indienen. 

Je krijgt geen permanente blokkering. Dit is tijdelijk en automatisch. 

## Wat als we met meerdere mensen op hetzelfde netwerk werken? 

Soms zitten meerdere mensen op hetzelfde netwerk. Bv. in een school, bibliotheek of op kantoor. Als jullie allemaal tegelijk formulieren invullen, kan het lijken alfof **één persoon heel veel dingen doorstuurt.**, Waardoor de limiet geactiveerd wordt. 

In dat geval raden we aan om: 

- Even te pauzeren met inzenden 
- Indien nodig: contact op te nemen met ons team zodat we dit kunnen evalueren

## Gaat dit in tegen gewone gebruikers? 

Neen. Wie op een normale suggesties of aanvullingen instuurt, merkt hier meestal **niets van**. 
De limiet is ruim genoeg voor gewoon gebruik, en enkel bedoeld om misbruik tegen te houden. 

## Wat kun je doen als je geblokkeerd wordt? 

- **Wacht 5 a 15 minuten, en probeer dan opnieuw. 
- Dien je meerdere suggesties in? Verspreid ze wat in de tijd. 
- Laat ons iets weten als het probleem blijft optreden, zeker al je werkt in een klas, organisatie of redactie. 

--- 

Heb je nog vragen? Laat het gerust weten in onze Discord server of via e-mail. We helpen je graag verder. 