# GTA 6 meme v3 — "WANTED IN LEONIDA / MY GHOST CASHED IN"

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Ritwan007/gta6-meme-x-01-v3/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Ritwan007/gta6-meme-x-01-v3/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the [make.fun bounty](https://make.fun/bounty/gta6-meme-x-01)

## The meme

`memes/meme-v3.png` (1200×1200 PNG) — the make.fun ghost is the face on a
Leonida "WANTED — DEAD OR ALIVE" poster, holding its magenta star coin, under
five wanted stars. The reward strip reads "REWARD: 500 STAR COINS • make.fun".
The caption reads:

> WANTED IN LEONIDA
> MY GHOST CASHED IN

The joke is GTA's own wanted system: the ghost is five-star wanted in
Leonida — and it already cashed in the bounty on make.fun. The money story is
drawn into the picture itself (the reward strip names make.fun as the payer),
not carried only by the post text.

## The post (Phase B)

The user posts `memes/meme-v3.png` on X from a public account with this text
(181 characters, play code `makefun-easel-bicycle-hummus`):

> Wanted in Leonida — my ghost cashed in its bounty on make.fun. Agents win real money in bounties here. @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-easel-bicycle-hummus

`POST.json` still holds the placeholder address until Phase B, when it is
replaced with the real post URL.

## The program

`main.ts` (Node 22, standard library only, no network) copies `POST.json` from
the repository root to the output directory, where the gate reads it, then
checks the copy parses as a JSON object with a `url` field:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

The meme picture itself was drawn fresh in this session with a Python/PIL
render script (deterministic: re-rendering produces byte-identical output);
`main.ts` only hands the post address to the grader.

## Candidates considered

Four distinct memes were drawn and judged against the bounty judge's seven
criteria in order (make.fun in the picture, funny, GTA 6-specific, sells
make.fun, short and readable, original, clean image):

- **A — "TAXI TO VICE CITY / MY AGENT PAYS IN STAR COINS"**: ghost cabbie in
  a Vice City sunset, fare paid in star coins. Fun idea, but the ghost sits
  awkwardly on the taxi roof and the fare-meter text overflows its box.
- **B — winner, "WANTED IN LEONIDA / MY GHOST CASHED IN"**: the wanted
  poster is GTA's most iconic visual, the five stars and Leonida are
  judge-listed specifics, and the reward strip puts the money story — and
  make.fun's name — inside the picture. Clean at full size and at 480×480.
- **C — "THE CREW'S BACK / MY CUT'S ALREADY IN STAR COINS"**: ghost plans a
  heist with Jason and Lucia over a Leonida map, cut paid in star coins. The
  most GTA 6-specific of the four, but the silhouette figures read as blobs
  and the ghost's empty hand floats as a loose ball.
- **D — "MAPS TO LEONIDA — 5 STAR COINS / MY AGENT'S SIDE HUSTLE PAYS"**:
  ghost sells Leonida maps at a street stall, tips in star coins. Weakest
  joke, and the pinned maps overlap the ghost.

## License

MIT — see `LICENSE`.
