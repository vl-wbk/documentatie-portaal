# Vlaams Woordenboek - Documentatieportaal 

Welkom op de repository van het documentatieportaal voor het Vlaams Woordenboek. Dit platform biedt een gestructureerd overzicht aan van de documentatie rond de 
werking, ontwikkeling en gebruik van het Vlaams woordenboek. 

## 📖 Over dit portaal

Dit documentatieportaal is gebouwd met [Vitepress](https://vitepress.dev/), een lichte en snelle statische sitegenerator op basis van Vue. 
Het dient als centrale hub voor ontwikkelaars, redacteurs en gebruikers die meer willen weten over de functionaliteiten en bijdragen aan het Vlaams Woordenboek.

## 🚀 Inhoud

- **Gebruikshandleiding:** Hoe je het woordenboek kunt doorzoeken, beheren en of gebruiken. 
- **Bijdragen:** Hoe je nieuwe woorden en definities toevoegt of bewerkt.
- **Technische documentatie:** Voor ontwikkelaars die willen bijdragen aan de code.
- **Veelgestelde vragen (FAQ):** Antwoorden op de meest voorkomende vragen.
- **Community richtlijnen:** Hoe je respectvol en constructief kunt bijdragen. 

## 🛠 Installatie & Ontwikkeling

Wil je lokaal bijdragen aan de documentatie? Volg deze stappen: 

### Vereisten 

- Node.js (versie 20 of hoger aanbevolen)
- NPM off Yarn

### Installatie 

```bash 
# Repository klonen
git clone https://github.com/vlaamswoordenboek/documentatie.git
cd documentatie

# Dependencies installeren
npm install
```

### Ontwikkelomgeving starten

```bash
npm run docs:dev
```

Hiermee start een lokale server op onder het volgende adres: [http://localhost:5137](http://localhost:5137) (poort kan varieren). 

### Deployment 

De productie build wordt automatisch uitgevoerd via een GitHub Workflow en gehost op **GitHub Pages**. 
Elke wijziging in de `main` branch triggert een nieuwe build en publicatie. 

Voor handmatige builds: 

```bash
npm run docs:build
```

De gegenereerde statische bestanden worden opgeslagen in de `docs/.vitepress/dist` map, maar hoeven niet handmatig gedeployed te worden.

## 📢 Bijdragen

We moedigen bijdrages aan! Volg onze contributiegids voor richtlijnen over het melden van problemen, toevoegen van nieuwe woorden of verbeteren van de documentatie.

Je kunt bijdragen door:

- **Issues te melden** op GitHub als je bugs of verbeterpunten ziet.
- **Pull requests in te dienen** voor verbeteringen aan de documentatie of code.
- **Feedback te geven** en deel te nemen aan discussies op GitHub Discussions. (Ja, we gebruiken geen e-mail—het is 2025, en wie wil er nu nog spam? 😉)

## 📬 Contact & Support

Heb je vragen of wil je bijdragen? Neem contact op via: 

- **GitHub Issues:**  Meld bugs en stel verbeteringen voor.
- **GitHub Discussions:** Bespreek ideeën en stel vragen aan de community.

🎉 Bedankt voor je interesse en bijdragen aan het Vlaams Woordenboek!
