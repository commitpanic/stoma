# TODO — Stomatologia Śródmiejska

## Faza 1 — Brief i setup
- [x] Brief `data.md` na bazie szablonu `_szablony/brief-strona-wizytowka.md`
- [x] Struktura projektu, `README.md`, `.gitignore`, `.nojekyll`
- [ ] Repozytorium GitHub + GitHub Pages (DEV)

## Faza 2 — Implementacja
- [x] Header / stopka (`components.js`, wzór Filar) + pasek dostępności
- [x] `index.html` — hero, o przychodni, usługi, dla dzieci, kontakt
- [x] Adres jako link do wizytówki w Mapach Google (bez osadzonej mapy)
- [x] `polityka-prywatnosci.html` (szkic)
- [x] JSON-LD `Dentist`, meta, favicon SVG

## Faza 3 — Materiały od klienta (❓ patrz `data.md`)
- [x] Godziny otwarcia → hero, kontakt, JSON-LD `openingHoursSpecification`
- [ ] Dane administratora → polityka prywatności
- [ ] Logo → header, stopka, favicon (w tym PNG 180×180 apple-touch-icon)
- [ ] Zdjęcia (gabinet, zespół) → sekcja „O przychodni”, ewentualnie zespół/galeria
- [ ] Akceptacja zakresu zabiegów w kartach usług
- [ ] Decyzja: cennik, zespół, NFZ
- [ ] Kolory firmowe (obecne robocze)

## Faza 4 — SEO i jakość
- [ ] Domena → `canonical`, `og:url`, `og:image`, `url` w JSON-LD
- [ ] `robots.txt`, `sitemap.xml` (po ustaleniu domeny)
- [ ] Lighthouse ≥ 90 (mobile i desktop)
- [ ] Test na urządzeniach (iOS Safari, Android Chrome)

## Faza 5 — PROD
- [ ] Hosting PROD (home.pl FTP / GitHub Pages + CNAME)
- [ ] DNS bez naruszania MX
- [ ] Google Search Console + link w profilu Google
- [ ] Portfolio na kubabuba.pl (za zgodą)
