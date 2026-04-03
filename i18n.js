(function () {
    const translations = {
        nl: {
            nav: {
                home: 'Home',
                product: 'Product',
                about: 'Over Ons',
                login: 'Inloggen',
                contact: 'Contact',
            },
            hero: {
                prefix: 'Een',
                suffix: 'Beeld Van Wat Speelt In Jouw Gemeente',
                cta1: 'Meld je aan voor de Beta',
                cta2: 'Contact',
                words: ['Beter', 'Slimmer', 'Sneller', 'Actueler'],
            },
            section: {
                insight_h2: 'Meer inzicht, minder tijd',
                insight_p: 'Sentiom volgt doorlopend wat er speelt binnen uw gemeente. Social media, nieuws en beleidsontwikkelingen worden met AI samengebracht in één overzicht, met dagelijkse rapportages en automatisch gegenereerde verdiepingsrapporten. Zo beschikt u altijd over actuele context voor onderbouwde beleidskeuzes, zonder handmatig zoekwerk.',
                closer_h2: 'Dichter bij uw inwoners',
                closer_p: 'Inzicht is pas waardevol als het leidt tot actie. Reageer direct op vragen, opmerkingen en suggesties van inwoners, zodat u vanuit de organisatie kunt inspelen op wat er leeft. Zo verkleint u het communicatieve gat tussen gemeente en burger.',
                partners_label: 'Wij werken samen met',
            },
            product: {
                daily_h2: 'Dagelijkse Updates',
                daily_p: 'Elke ochtend ontvangt u een met AI samengevat rapport per e-mail met de belangrijkste ontwikkelingen op social media in de afgelopen 24 uur. U kunt dit rapport aanpassen naar uw wensen en direct delen met de rest van uw organisatie via een vrij deelbare link.',
                daily_btn: 'Bekijk deze update \u2192',
                reports_h2: 'Automatisch Rapporten Genereren',
                reports_p: 'Wilt u een onderwerp verder uitdiepen? Met één klik genereert u een volledig rapport, direct inzetbaar binnen de gemeente. Geen handmatig zoekwerk meer.',
                reports_btn: 'Bekijk een voorbeeldrapport \u2192',
                inbox_h2: 'Social Media Inbox',
                inbox_p: 'Terugkoppeling naar inwoners is essentieel om de band tussen gemeente en burger te versterken. In de Social Media Inbox ziet u welke vragen, opmerkingen en suggesties er recent in uw gemeente zijn geplaatst, zodat u direct vanuit de gemeente kunt reageren op wat er leeft.',
            },
            about: {
                team_h2: 'Ons Team',
                who_h2: 'Wie wij zijn',
                who_p: 'Wij zijn drie TU Delft-studenten met een gedeelde passie voor AI en de publieke sector. Als leden van Epoch, het AI-studententeam van de TU Delft, hebben we ML-competities gewonnen en projecten met de overheid uitgevoerd. Nu zetten we die ervaring in om de communicatie tussen gemeentes en burgers te verbeteren met behulp van AI.',
                beginning_h2: 'Het begin',
                beginning_p: 'In november 2025 deden Kenzo en Ignace mee aan een hackathon mede-georganiseerd door de Gemeente Rijswijk. De opdracht: met AI inzichtelijk maken wat er op social media speelt binnen de gemeente. Ze wonnen de hackathon en zijn vanuit die samenwerking met Gemeente Rijswijk een product gaan ontwikkelen voor gemeentes in heel Nederland. Al snel groeide de ambitie: niet alleen luisteren naar burgers, maar het communicatieve gat tussen gemeente en inwoner verkleinen, in beide richtingen. Samen met Robert vormen we nu het team achter Sentiom en ontwikkelen we onze app op basis van directe feedback van gemeentes.',
                mission_h2: 'Onze missie',
                mission_p: 'Wij geloven dat AI gemeentes kan helpen om dichter bij hun inwoners te staan. Door werkdruk te verminderen en inzicht te vergroten, willen we de band tussen gemeente en burger structureel versterken.',
            },
            beta: {
                h2: 'Sentiom is nu in Beta fase',
                subtitle: 'Wij zijn op zoek naar gemeenten om mee te doen aan het ontwikkelingstraject',
                name: 'Naam',
                email: 'E-mailadres',
                phone: 'Telefoonnummer (optioneel)',
                municipality: 'Gemeente (optioneel)',
                question: 'Vraag / Opmerking (optioneel)',
                submit: 'Meld je nu aan',
                success: 'We nemen zo snel mogelijk contact met u op!',
            },
            news: {
                h2: 'Sentiom in het Nieuws',
                article1: 'Team DataDoor wint Hackaton',
            },
            footer: {
                description: 'Wij zijn actief op zoek naar gemeenten om mee te doen aan het ontwikkelingstraject',
                quickLinks: 'Snelle Links',
                about: 'Over Ons',
            },
        },
        en: {
            nav: {
                home: 'Home',
                product: 'Product',
                about: 'About Us',
                login: 'Log In',
                contact: 'Contact',
            },
            hero: {
                prefix: 'A',
                suffix: 'Picture of What\'s Happening in Your Municipality',
                cta1: 'Sign Up for the Beta',
                cta2: 'Contact',
                words: ['Better', 'Smarter', 'Faster', 'Sharper'],
            },
            section: {
                insight_h2: 'More Insight, Less Time',
                insight_p: 'Sentiom continuously monitors what\'s happening in your municipality. Social media, news, and policy developments are brought together with AI in one clear overview — with daily reports and automatically generated in-depth analyses. So you always have up-to-date context for informed policy decisions, without any manual searching.',
                closer_h2: 'Closer to Your Residents',
                closer_p: 'Insight only matters when it leads to action. Respond directly to questions, comments, and suggestions from residents, so your organization can act on what\'s happening in the community. This bridges the communication gap between municipality and citizen.',
                partners_label: 'We work together with',
            },
            product: {
                daily_h2: 'Daily Updates',
                daily_p: 'Every morning you receive an AI-summarized report by email covering the most important social media developments from the past 24 hours. You can customize it to your needs and share it instantly with your team via a freely shareable link.',
                daily_btn: 'View this update \u2192',
                reports_h2: 'Automatically Generate Reports',
                reports_p: 'Want to dive deeper into a topic? With one click, you generate a complete report — ready to use within your municipality. No more manual research.',
                reports_btn: 'View a sample report \u2192',
                inbox_h2: 'Social Media Inbox',
                inbox_p: 'Engaging with residents is essential for strengthening the bond between municipality and citizen. In the Social Media Inbox, you see which questions, comments, and suggestions have recently been posted in your municipality — so you can respond directly from within the organization.',
            },
            about: {
                team_h2: 'Our Team',
                who_h2: 'Who We Are',
                who_p: 'We are three TU Delft students with a shared passion for AI and the public sector. As members of Epoch, TU Delft\'s AI student team, we have won ML competitions and executed projects with the government. Now we\'re applying that experience to improve communication between municipalities and citizens using AI.',
                beginning_h2: 'The Beginning',
                beginning_p: 'In November 2025, Kenzo and Ignace took part in a hackathon co-organized by the Municipality of Rijswijk. The challenge: use AI to make sense of what\'s happening on social media within the municipality. They won the hackathon, and from that collaboration with Rijswijk, began building a product for municipalities across the Netherlands. The ambition grew quickly: not just listening to citizens, but closing the communication gap between municipality and resident — in both directions. Together with Robert, we now form the team behind Sentiom and develop our app based on direct feedback from municipalities.',
                mission_h2: 'Our Mission',
                mission_p: 'We believe AI can help municipalities get closer to their residents. By reducing workload and increasing insight, we want to structurally strengthen the bond between municipality and citizen.',
            },
            beta: {
                h2: 'Sentiom is Now in Beta',
                subtitle: 'We are looking for municipalities to join our development journey',
                name: 'Name',
                email: 'Email address',
                phone: 'Phone number (optional)',
                municipality: 'Municipality (optional)',
                question: 'Question / Comment (optional)',
                submit: 'Sign me up',
                success: 'We\'ll get back to you as soon as possible!',
            },
            news: {
                h2: 'Sentiom in the News',
                article1: 'Team DataDoor wins Hackathon',
            },
            footer: {
                description: 'We are actively looking for municipalities to join our development journey',
                quickLinks: 'Quick Links',
                about: 'About Us',
            },
        },
    };

    function getLang() {
        return localStorage.getItem('sentiom-lang') || 'nl';
    }

    function t(key) {
        const lang = getLang();
        const keys = key.split('.');
        let val = translations[lang];
        for (const k of keys) {
            val = val && val[k];
        }
        return val !== undefined ? val : key;
    }

    function applyTranslations() {
        document.documentElement.lang = getLang();

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = t(key);
        });

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === getLang());
        });

        if (typeof window.renderFooter === 'function') window.renderFooter();
        if (typeof window.renderSharedSections === 'function') window.renderSharedSections();
        if (typeof window.updateCyclingWords === 'function') window.updateCyclingWords();
    }

    function setLang(lang) {
        localStorage.setItem('sentiom-lang', lang);
        applyTranslations();
    }

    window.t = t;
    window.getLang = getLang;
    window.setLang = setLang;
    window.applyI18n = applyTranslations;

    document.addEventListener('DOMContentLoaded', applyTranslations);
})();
