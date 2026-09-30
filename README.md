# Stomatologia Śródmiejska Świebodzin — strona wizytówka

Statyczna strona (HTML + CSS + Vanilla JS, bez frameworków i CMS). Wykonanie: [kubabuba.pl](https://kubabuba.pl).

## Struktura

```
index.html                 — hero · o przychodni · usługi · dla dzieci · kontakt (adres → link do Map Google)
polityka-prywatnosci.html  — polityka prywatności
assets/css/style.css       — style (custom properties, RWD, tryb wysokiego kontrastu)
assets/js/components.js    — wspólny header, stopka, sprite ikon SVG, pasek dostępności
assets/js/main.js          — animacje, aktywne menu, wyróżnienie dzisiejszych godzin
assets/img/                — favicon i grafiki
```

Brief klienta (`data.md`) i notatki (`CLAUDE.md`) są tylko lokalnie — wykluczone w `.gitignore`.

## Uruchomienie lokalne

```powershell
python -m http.server 8000
```

→ http://localhost:8000

## Publikacja — DEV (GitHub Pages)

1. Repozytorium na GitHubie, push na `main`.
2. **Settings → Pages → Source:** branch `main`, folder `/ (root)`.
3. `.nojekyll` jest w repo (bez przetwarzania przez Jekylla).

## Publikacja — PROD

Nieustalone. Przed publikacją patrz checklista w `data.md` (pkt 9).
Uwaga: domena `stomatologiasrodmiejska.pl` ma aktywną pocztę na home.pl — przy podpinaniu strony nie zmieniać rekordów MX.

## Miejsca do uzupełnienia

```powershell
Select-String -Path *.html,assets\js\*.js -Pattern "TODO"
```
