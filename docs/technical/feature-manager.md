---
outline: deep 
---

# Beheer van feature flags in de CLI van het Vl. woordenboek

De `feature:manager` artisan command wordt gebruikt om feature flags binnen het Vlaams Woordenboek te beheren. Hiermee kun je features activeren, deactiveren of de status van een feature controleren. Dit is handig als je verschillende functies binnen je applicatie wilt aan- of uitschaken op basis van omgevingsvoorwaarden. 
Als ook bv dat er zich ground-stopping bugs voordoen in de productie omgeving van de applicatie. 
Zo kun je bv tijdelijk de feature deactiveren tot de volgende deployment waar de fies voor de issues in geimplementeerd zijn. Hieronder vind u de inhoudstafel ter referentie:

[[toc]]

## Commandosyntax 

De syntaxis voor het gebruik van de command is als volgt:

```bash 
php artisan feature:manage {actie} {feature}
```

### Parameters 

De volgende parameters zaijn beschikbaar in het commando: 

#### `{actie}`

- `enable`: Hiermee schakel je de opgegeven feature globaal in, zodat deze voor alle gebruikers beschikbaar is. Dit is handig wanneer je bv. een nieuwe functie hebt getest en deze nu in productie wilt zetten.
- `disable`: Dit schakelt de opgegeven feature globaal uit, waardoor deze voor alle gebruikers niet meer toegankelijk is. Dit kan nodig zijn als er problemen zijn met een feature of als je deze tijdelijk wilt uitschakelen.
- `status`: Met deze actie controleer je de huidige status van een feature. Je kunt snel zien of een functie actief is of niet, wat nuttig is voor het bijhouden van feature flags binnen je project.

#### `{feature}`

Dit is de naam van de feature die je wilt beheren. Het moet overeenkomen met de feature class in de `App\Features\` namespace. Zorg ervoor dat de naam correct is gespeld om founten te voorkomen.

## Beschikbare features

Hieronder volgt een lijst van beschikbare features binnen de applicatie. Zorg ervoor dat je de juiste naam gebruikt bij het beheren van de features: 

| Naam                      | Beschrijving                                                  |
| :------------------------ | :------------------------------------------------------------ |
| [DocumentationButtons]()  | Weergave van help knoppen naar de documentatie doorheen de applicatie. |

## Voorbeelden van gebruik

Hier zijn enkele voorbeelden van hoe je de `feature:manager` command kunt gebruiken:

### Feature inschakelen 

Om een feature in te schakelen, gebruik je het `enable` commando met de naam van de feature:

```bash
php artisan feature:manager enable DocumentationButtons
```

**Wat doet dit:** Dit activeerd de `DocumentationButtons` feature globaal voor alle gebruikers, zodat de gebruikers vanaf de rol de knoppen kunnen zien en gebruiken die linken naar de project documentatie.

### Feature uitschakelen 

Om een feature uit te schakelen, gebruik je het `disable` commando met de naam van de feature:

```bash 
php artisan feature:manager disable DocumentationButtons
```

**Wat dit doet:** Dit dactiveert de feature `DocumentationButtons`, zodat gebruikers vanaf de rol geen verwijzingsknoppen meer zien naar het documentatie portaal van het vlaams woordenboek. 

### Feature status controleren 

Om te controleren of een feature actief is, gebruik je het `status` commando:

```bash 
php artisan feature:manager status DocumentationButtons 
```

**Wat dit doet:** Dit geeft terug of de feature `DocumentationButtons` momenteel actief of inactief is. Dit is nuttig voor ontwikkelaars die de status van hun features willen bijhouden zonder in de code hoeven te kijken.

## Feature class definities 

Elke feature wordt gedefinieerd als een class binnen de `App\Features` namespace. Het is belangrijk dat deze class(es) correct zijn gedefinieerd, omdat het commando anders een foutmelding geeft.

Bijvoorbeeld, voor een feature genaamd "DocumentationButtons", moet de class gedefinieerd zijn als `App\Feature\DocumentationButtons`. 
Zorg ervoor dat je de naamgeving en namespace consistent houdt om problemen te voorkomen.

## Opruiming van de cache 

Elke keer wanneer je een feature in- of uitschakelt, wordt de feature cache automatisch geleegd. Dit betekent dat de wijzigingen onmiddelijk van kracht worden en gebruikers de nieuwe status van de feature zien zonder dat ze de applicatie hoeven te herladen.

## Mogelijke fouten 

Als je een ongeldige actie invoert (zoals iets anders dan `enable`, `disable` of `status`), krijg je een fountmelding. Dit helpt je om snel fouten te corrigeren en de juiste acties te ondernemen.

Voorbeeld van de foutmelding:

```
Invalid action. Use "enable", "disable", or "status"
```

## Laravel pennant

De features zijn opgebouwd met de [laravel/pennant](https://github.com/laravel/pennant) package je kunt de [documentatie](https://laravel.com/docs/12.x/pennant) doornemen om te leren hoe de package werkt en hoe je nieuwe features toevoegd aan de applicatie. 

## Conclusie

Met deze handleiding kun je eenvoudig je `feature:manager` command gebruiken om feature flags binnen je project te beheren. 
Dit biedt je de flexibiliteit om functionaliteiten aan te passen op basis van gebruikersfeedback, testresultaten, en ondere organisatie behoeften. 
Door effectief gebruik te maken van feature flags, kun je ontwikkeling van je applicatie versnellen en verbeteren.