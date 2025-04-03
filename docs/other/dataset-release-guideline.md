# Richtlijnen voor het benoemen van de datasetreleases 

Deze documentatie beschrijft de richtlijnen voor het consistent en duidelijk benoemen van datasetreleases.
Een gestandaardiseerde naamgevingsconventie is essentieel voor het beheer, de distributie en het gebruik van datasets. 
Het zorgt ervoor dat gebruikers of andere belanghebbenden gemakkelijk de inhoud, versie en andere relevante informatie van een dataset kunnen identificeren.

## Doel 

in het hedendaagse data-driven landschap zijn datasets de ruggengraat van besluitvorming, onderzoek en innovatie. 
Echter, zonder een gestructureerde aanpak voor het beheren en organiseren van deze datasets, kunnen we snel verzanden in chaos. 
Een cruciaal aspect van effectief databeheer is een consistente en duidelijke naamgevingsconventie voor datasetreleases. Deze richtlijnen zijn ontwikkeld om een uniforme taal te creëren, waardoor we de waarde van onze data-assets maximaliseren.

Het doel van deze richtlijnen is niet alleen om een eenvoudige set regels te bieden, maar om een fundamentele verschuiving te bewerkstelligen in hoe we omgaan met onze datasets. 
Door een gestandaardiseerde naamgevingsconventie te implementeren, streven we ernaar om:

- Een uniforme naamgevingsconventie te creëren voor alle datasetreleases.
- De vindbaarheid en het beheer van datasets te verbeteren.
- De communicatie tussen data-eigenaren en gebruikers te vergemakkelijken.
- De traceerbaarheid van datasetversies te waarborgen.

## Naamgevingsconventie 

De volgende elementen moeten worden opgenomen in de naam van een datasetrelease, in de aangegeven volgorde: 

- **Datasetnaam:** De unieke naam van de dataset. 
- **Versienummer:** Een numerieke aanduiding van de datasetversie (bijvoorbeeld: **v1.0**, **v2**, ...)
- **Datum:** De datum van de release in het formaat **YYYY-MM_DD**
- *¨*Optionele specificaties:** Aanvullende informatie, zoals dataformat (CSV, JSON), regio of andere relevante details.

### Aanvullend richtlijnen omtrent de datasetnamen 

Naast de algemene richtlijnen, introduceren we een specifieke conventie voor de datasetnaam zelf, om de rijke geschiedenis van de Nederlandse taal in Vlaanderen te eren:

#### Gebruik van Vlaamse Taalkundige Namen

- De basisnaam van de dataset zal de naam zijn van een persoon die een significante bijdragen heeft geleverd aan de taal in Vlaanderen. 
- Om een evenwichtige representatie te garanderen, zullen we afwisselend mannen en vrouwen selecteren.
- Oneven datasetversies (v1, v3, v5, enz.) zullen de namen dragen van mannen die iets voor de Nederlandse taal hebben betekend.
- Even datasetversies (v2, v4, v6, enz.) zullen de namen dragen van vrouwen die iets voor de Nederlandse taal hebben betekend.
- Voorbeelden van namen die gebruikt kunnen worden zijn: Hugo Claus, Lize Spit, Tom Lanoye, Maud Vanhauwaert en vele anderen.


#### Selectieproces 

- Er zal een lijst worden samengesteld van erkende figuren uit de Vlaamse taalkunde, met een evenwichtige verdeling tussen mannen en vrouwen.
- De selectie van namen voor specifieke datasets zal worden gebaseerd op de relevantie van de figuur voor de inhoud van de dataset indien mogelijk.

#### Documentatie 

- Een complete lijst van gebruikte namen en hun relevantie zal worden bijgehouden in een centraal document.
- Dit document zal toegankelijk zijn voor alle gebruikers en data-eigenaren, om transparantie te waarborgen.


##### Aangepast voorbeelden 

- `v1_claus_2025_03_26.csv`
- `v2_spit_2025_03_26.csv`
- `v3_lanoye_2025_03_26.csv`
- `v4_vanhauwaert_2025_03_26.csv`

#### Belang van deze Conventie:

- Deze conventie eert de rijke geschiedenis van de Vlaamse taal- en letterkunde en brengt hulde aan degenen die hebben bijgedragen aan de ontwikkeling ervan.
- Het voegt een culturele dimensie toe aan onze datasets en bevordert het bewustzijn van ons talige erfgoed.
- Het geeft een unieke identiteit aan de datasets.

## Implementatie

Deze richtlijnen zijn van toepassing op alle nieuwe datasetreleases vanaf **26/03/2025**. Bestaande datasets moeten indien mogelijk worden hernoemd volgens deze conventie.

## Onderhoud 

Deze documentatie wordt periodiek herzien en bijgewerkt om ervoor te zorgen dat deze relevant en actueel blijft.
