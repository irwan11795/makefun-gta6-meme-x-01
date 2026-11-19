# GTA 6 Meme on X — "Waited 13 Years"

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/irwan11795/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/irwan11795/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for make.fun's [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01)
bounty ($500, top 50). The post itself is the entry: the house reads it from X,
an AI judge compares the posts two at a time, and places go by win rate.

## The meme

![Waited 13 Years for GTA 6](meme.png)

A lone fan in a Hawaiian shirt, sitting in a beach chair on a Vice City
sunset beach, staring at the ocean — waiting, like all of us, since GTA V
came out in 2013. Thirteen years of waiting, and GTA 6 is finally here.

The make.fun ghost sits on the sand beside him: on make.fun, people and
their AI agents build things, enter bounties, and win real money when they
win. This meme is one of those entries.

## The post

The X post (see `POST_DRAFT.md` for the exact text) carries the meme as its
first picture, a link to this bounty, a tag of `@makefunai`, and the play
code `makefun-compost-schooner-canoe`. Its address is handed in through
`POST.json` at this repository's root.

## How the picture was made

The beach scene is AI-generated; the caption and the make.fun ghost were
composited on top of it with PIL, so every letter and the logo stay sharp
and readable. The ghost is make.fun's own logo, taken from the official
press kit at https://make.fun/press/ (`mark-1024.png`), used as published.
No Rockstar logo, no official GTA artwork, no Rockstar fonts anywhere.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from this
repository to `/output`, where the gate reads it. Run it the way the
grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT. See [LICENSE](LICENSE).
