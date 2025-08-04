# Rollen en machtigingen in het Vlaams Woordenboek 

Het Vlaams woordenboek is gebouwd op een **Robuust Role-Based Access Control (RBAC)** systeem.
Dit is niet zomaar een functionaliteit, maar de **fundamentele pijler** die de architectuur van ons Vlaams woordenboek ondersteunt, en die essentieel is voor het
garanderen van maximale veiligheid, onbeperkte schaalbaarheid en optimaal beheer.

RBAC zorgt voor een gestructureerde, contextuele en fijnmazige toegang tot alle functionaliteiten,
wat van vitaal belang is voor de integriteit van gevoelige gegevens en een naadloze, efficiente samenwerking tussen alle betrokken eniteiten.

**Simpel gesteld:** aan elke actor binnen
het systeem worden een of meerdere zorgvuldig gedefinieerde rollen toegewezen, en deze rollen specificeren extact welke acties en middelen ze binnen het Vlaams woordenboek mogen benutten.

## Inhoudstafel

[[TOC]]

## De essentie van RBAC: gelaagde abstrahering

Om de volledige rijkwijdte en het strategische belang van RBAC te doorgronden, is het cruciaal de gelaagde aard van dit systeem te begrijpen.
RBAC créért een krachtige abstractielaag tussen de actoren en de onderliggende systeemfunctionaliteiten, gebaseerd op een goed doordachte
hierarchie van verantwoordelijkheden en bevoegdheden.

### Machtiging (permission): de atomaire toegangspoort

Een machtiging (of permissie) vertegenwoordigt de meest elementaire, atomaire en onsplitsbare eenheid van toegang binnen het gehele systeem. Het definieert een specifieke granulaire actie die een actor
(een gebruiker, een service of geautomatiseerd proces) kan uitvoeren op een specifieke bron of functionaliteit. Beschouw een machtiging als een unieke sleutel die past op slechte één slote.
Een specieke toegangsdeur binnen het platform.

#### Voorbeelden van granulariteit

- `gebruikers.aanmaken`: Het exclusieve recht om een nieuw gebruikersaccount te registeren in de beheersconsole van het Vlaams Woordenboek.
- `artikelen.bewerken`: De bevoegdheid om artikelen te bewerken in de beheersconsole van het Vlaams Woordenboek.
- `etymologie.bekijken`: De bevoegdheid om specifieke gegegevens van een etymologische record te bekijken in het Vlaams woordenboek.
- *etc...*

Deze gedetailleerde granulariteit stelt ons in staat om extreem precizez toegangscontroles te definieren, wat de veiligheid maximaliseert en het principe van ministe privilege afdwingt in het beheer.

### Rol (Role): de verzameling van functionele bevoegdheden

Een rol is een logische en functionele groepering van een of meerdere machtigingen.
Rollen zijn de spil van het RBAC-systeem, ontworpen om de vereisten van specifieke functies, taken of verantwoordelijkheden vinnen de organisatie en het Vlaams woordenvoek te weerspiegelen.
Zie een rol als een complete sleutelbos, zorgvuldig samen met alle sleutels (machtigingen) die nodig zijn om een bepaalde functionaliteit (rol) die nodig zijn om een bepaalde functie uit te voeren.

- **Contextualiteit en Organisatorische processen:** rollen zijn niet willekeurig, ze zijn diep geworteld in de operationele processen en operationele workflows van het Vlaams woordenboek.
Een rol zoals 'Eindredacteur' of 'Ontwikkelaar' omvat exact die set van machtigingen die vereist zijn om die specifieke functie efficient en veilig uit te voeren.

- **Consolidatie en beheerbaarheid:** rollen consilideren een protentieel overweldigend netwerk van individuele machtingen en beheersbare, naamgevende entiteiten.
Dit vereenvoudigt het overzicht en de toewijzing van rechten.

- **Rolhiërarchie (Inheritance) - Geavanceerd Concept:** Een krachtige maar optionele, eigenschap van RBAC is rolhierarchie of overerving. Dit betekend dat een rol de machtigingen van een 'lagere' of meer basala rol kan erven. Bijvoorbeeld:
    * De rol 'Eindredacteur' kan alle machtigingen van de rol 'Redacteur' **erven**, en daar bovenop specifieke machtigingen voor `artikelen.goedkeuren` en `artikelen.publicatie.beheren` benutten. 
    * De rol 'Administrator' zou de machtigingen van 'Eindredacteur' kunnen erven, plus beheermachtigingen voor gebruikers en systeeminstellingen. Deze overervingsstructuur minimaliseert redundantie, verhoogt de consistentie in toegangsrechten en maakt complexe beleidsregels eenvoudiger te definiëren en te handhaven.

### Actor: de entiteit met toegang (menselijk of technisch)

Een **actor** is de entiteit die interactie heeft met het platform en aan wie rollen worden toegewezen. Hier maken een cruciaal onderscheid:

- **Menselijke gebruikers:** Dit zijn individuen die rechtstreeks het platform gebruiken via een gebruikersinterface. Aan hen worden rollen toegewezen op van hun functie binnen de organisatie en of werking.
*Bijv. (een medewerker die de rol 'Redacteur' krijgt).*

- **Technische gebruikers / Services / API clients:**  Dit zijn geautomatiseerde systemen, applicaties en microservices of API-clients die programmatisch toegang nodig hebben tot het Vlaams woordenboek.
Ook deze technische actoren krijgen **specifieke rollen** toegewezen. Hun rollen bevatten alleen de machtigingen die absoluut noodzakelijk zijn voor hun geautomatiseerde taken, wat het  
**het risico op ongeautoriseerde toegang door gecompromitteerde services minimaliseert.**
    - *Voorbeeld:* Een externe integratie-API die alleen artikelen mag inlezen, krijgen een rol met de machtiging `artikelen.lezen`, maar geen `artikelen.bewerken` of `gebruikers.aanmaken`.

Het toewijzen van één of meerdere rollen aan een actor is het punt waar de abstractie van machtigingen en rollen concreet wordt.

- **Dynamische toegang:** door rollen toe te wijzen, krijgt een actor dynamisch alle bijhorende machtigingen. Dit betekent dat de toegansrechten van een actor flexibel en in real-time kunnen worden aangepast
door simpelweg de toegewezen rollen te wijzigen. 

- **Efficient cyclusbeheer:** Voor het beheer van zowel menselijke gebruikersaccounts als technische service-accounts (onboarding, functiewijziging, offboarding) is RBAC uitzonderlijk efficiënt. 
Nieuwe medewerkers of services krijgen onmiddellijk de juiste toegang door de relevante rol(len) toe te kennen. Bij een functiewijziging volstaat het aanpassen van de rollen. 
Bij vertrek of het buiten gebruik stellen van een service kunnen alle machtigingen onmiddellijk worden ingetrokken door de rollen te verwijderen.

### De cruciale voordelen van RBAC voor het platform

Deze implementatie van een geavanceerd RBAC_systeem is een strategische investering die aanzienlijke voordelen oplevert voor de langetermijnfunctionaliteit, veiligheid en beheersbaarheid van het platform:


- **Ongeëvenaard Beheer en Automatisering:** RBAC vereenvoudigt het beheer van toegangsrechten exponentieel. Met geautomatiseerde processen voor roltoewijzing kunnen duizenden actoren efficient worden beheerd,
wat de administratieve overhead drastisch vermindert en handmatige fouten elimineert. 

- **Verhoogde beveiliging en compliance auditbaarheid:** Door het strikt afdwingen van het pincipe van **minste privilege** en **scheiding van taken** (waar kritieke taken verdeeld zijn over meerdere rollen om misruik te voorkomen), verhoogt RBAC de algemene beveiligingspostuur significant. Het systeem biedt gedetailleerde logboeken en auditmoelijkheden, cruciaal voor het voldoen van strenge compliane-eisen
(zodals GDPR of specifieke sectorale regulaties) en het uitvoeren van forensische analyses na een incident. 

- **Superieure Schaalbaarheid en Flexibiliteit:** RBAC is inherent ontworpen voor groei Wanneer het Vlaams woordenboek en nieuwe functionaliteiten, modules of services worden toegevoegd, kunnen nieuwe machtigingen naadloos worden geintegreerd. Deze kunnen worden toegevoegd aan bestaande rollen of worden opgenomen in nieuw gedefinieerde rollenn zonder dat het hele toegangsbeheersysteem opnieuw 
hoeft te worden ontworpen. Dit garandeert een wendbare ontwikkelomgeving en adaptieve organisatorische processen.

- **Transparantie en Governance:** Het systeem creëert een glashelder kader van verantwoordelijkheden en bevoegdheden. Dit bevordert niet alleen de interne communicatie en samenwerking, 
maar ondersteunt ook een robuust governance-model, waarbij duidelijk is.

- **Verminderde Operationele Risico's:** Door de granulariteit van machtigingen en de consolidatie in rollen, vermindert RBAC de kans op ongeautoriseerde toegang, configuratiefouten en datalekken die voortvloeien uit complexe, ad-hoc toegangscontroles.

## Implementatie en raadpleging: de praktijk 

De specifieke rollen die binnen dit platform zijn geoperationaliseerd (bijv. 'Invoerder', 'Redacteur', 'Eindredacteur', 'Ontwikkelaar', 'Administrator'), evenals de uitvoerige, gedetailleerde machtigingen 
die aan elk van deze rollen zijn gekoppeld, worden nauwkeurig beschreven in de domeinspecifieke documentatie. Deze documenten dienen als de primaire, gezaghebbende en meest actuele bron voor 
een diepgaand en operationeel begrip van de mogelijkheden, beperkingen en verantwoordelijkheden die elke rol met zich meebrengt binnen de specifieke context van de applicatiefunctionaliteit 
van het platform. Het wordt ten zeerste aanbevolen deze documenten zorgvuldig te raadplegen voor een compleet en gedetailleerd overzicht van de complexe toegangsstructuur van het platform.

Deze gelaagde en robuuste RBAC-structuur is de onwrikbare ruggengraat van ons toegangsbeheer, en stelt ons in staat om een veilig, efficiënt, schaalbaar en toekomstbestendig platform te bouwen en voortdurend te innoveren.
