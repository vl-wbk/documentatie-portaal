# Dynamisch beheer van disclaimers door redacteurs. 

Dit document beschrijft het beleid en de procedure voor het dynamisch beheren van disclaimers in ons Vlaams Woordenboek.
Dit beheer wordt uitgevoerd door gebruikers die de juiste **permissies** hebben om de transparantie, relevantie en veiligheid van de inhoud te waarborgen.

[[TOC]]

## Doel en algemene richtlijn 

Het doel van dynamische disclaimers is om per artikel indien nodig een relevante en specifieke waarschuwing te kunnen tonen, afhankelijk van het aard van het onderwerp. 
Denk hierbij aan termen die medisch, juridisch of maatschappelijk gevoelig van aard zijn. 
Dit systeem draagt bij aan de betrouwbaarheid van ons platform en beschermt de lezer tegen mogelijke misinterpretaties. 

## Systeemgeprogrammeerde permissies 

De bevoegdheden om disclaimers te beheren zijn nauw gekoppeld aan specifieke, geprogrammeerde permissions in onze beheersconsole. 
Een gebruiker kan deze functionaliteit alleen gebruiken als de juiste permissie is toegekend aan zijn/haar account. 

Hier onder vind je een overzicht van de systeemgeprogrammeerde permissies:

| Permissie                    | Permissie *(technisch)* | Beschrijving                                                          | 
| :--------------------------- | :---------------------- | :-------------------------------------------------------------------- | 
| **Bekijken**                 | `view_disclaimer`       | De machtiging om een specifieke disclaimer te bekijken                | 
| **Bekijk elke**              | `view_any_disclaimer`   | De machtiging om het overzicht van disclaimers te bekijken            |
| **Aanmaken**                 | `create_disclaimer`     | De machtiging om een disclaimer aan te maken                          | 
| **Bewerken**                 | `update_disclaimer`     | De machtiging om de gegevens van een disclaimer aan te passen         | 
| **Verwijderen**              | `delete_disclaimer`     | De machtiging om een disclaimer te verwijderen het woordenboek        | 
| **Verwijderen van meerdere** | `delete_any_disclaimer` | De machtiging om meerdere disclaimers te verwijderen met 1 handeling. |

## Technologische verankering 

De hierbocen genoemde permissies zijn geimplementeerd als discrete rechten binnen het RBAC-framework van het Vlaams Woordenboek. 

- **Toewijzing:** Permissies worden toegekend aan rollen, die op hun manier weer aan gebruikers worden toegewezen. Dit Stelt beheerders in staat om gecontroleerd toegang te verlenen de disclaimer-functionaliteit. 
- **Validatie:** Elke poging om een disclaimer-gerelateerde actie uit te voeren (toevoegen, verwijderen, beheren van de set) wordt door het systeem gevalideerd tegen de permissies van de ingelogde gebruiker. Indien de vereiste permissie niet aanwezig is, wordt de actie geweigerd.

## Soorten van standaard disclaimers en gebruik 

Om consistentie vanaf de start te waarborgen, werken we vanaf de start met een lijst van gestandariseerde disclaimers. 
Hieronder vind je de beschikbare opties en richtlijnen voor wanneer je ze kunt/moet gebruiken:

### Medische disclaimer 

*Categorie: **Specialistisch***

 Gebruik deze disclaimer bij artikelen die betrekking hebben op gezondheid, medicatie, medische aandoeningen of procedures. 
 Het doel is om duidelijk te maken dat de informatie geen professioneel medisch advies is. 
 
 **Voorbeeld:** *migraine, paracetamol, hartaanval.*

 ### Juridische disclaimer

 *Categorie: **Specialistisch***

 Gebruik deze disclaimer bij artikelen die betrekking hebben op wetgeving, juridische termen, rechten en plichten. 
 Dit benarukt dat de informatie geen vervanging is voor professioneel juridisch advies. 

 **Voorbeeld:** *autheursrecht, strafbaar feit, vennootschap.*

 ### Disclaimer voor gevoelige onderwerpen 

 *Categorie: **Specialistisch***

 Gebruik deze disclaimer bij artikelen die maatschappelijk gevoelige onderwerpen behandelen, zoals geweld, discriminatie of psychologishe aandoeningen. 
 Dit waarschuwt de lezer en stelt hen in staat om geinformeerd verder te lezen. 

 **Voorbeeld:** *Seksuele intimidatie, zelfdoding, racisme.*

 ### Disclaimer voor verouderde informatie

 *Categorie **Tijdsgevoelig***

 Gebruik deze disclaimer als de informatie sterk verouderd is, maar het artikel (nog) niet herschreven/aangepast kan worden. 
 Dit signaleert aan de lezer dat de inhoud mogelijk niet meer actueel is. 

 **Voorbeeld:** *wetgeving die is gewijzigd, wetenschappelijke theorieen die zijn weerlegd.*

 ## Controle en Kwaliteitsborging 

 Om de integriteit van het systeem te waarborgen, is het volgende mechanisme ingebouwd: 

 - **Peer review:** Bij twijfel over de juiste disclaimerkeuze, vooral bij gevoelige onderwerpen, is het aan te raden een collega of beheerder te raadplegen voor een tweede beoordeling.

 ---

 Dit systeem zorgt voor een flexibele en veilige manier om disclaimers te beheren, waarbij de verantwoordelijkheid deels bij de gebruikers met de juiste permissies ligt. Door zorgvuldig te werk te gaan, versterken we samen de betrouwbaarheid van ons platform.

Heb je vragen over deze procedures of de beschikbare permissies? Neem dan contact op met het kernteam.

