// gta6-meme-x-01 — entry program (Node 22, standard library only).
//
// The entry is the X post itself: one GTA 6 meme posted from a public
// account, its text carrying make.fun (a link and/or @makefunai) and this
// account's play code, its first picture the meme in meme.png. POST.json
// at the repository root names that post. This program does one thing:
// copy POST.json into the output directory, where the gate reads it and
// the house swaps in the dossier it made of the post. Nothing written
// here is judged.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function main(): void {
  mkdirSync(outDir, { recursive: true });
  const source = join(repoDir, 'POST.json');
  const target = join(outDir, 'POST.json');
  try {
    // Fail loudly here on a malformed POST.json instead of at the gate.
    const parsed = JSON.parse(readFileSync(source, 'utf8')) as unknown;
    if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
      throw new Error('POST.json must be a JSON object with a string "url"');
    }
    copyFileSync(source, target);
  } catch (error) {
    console.error(`could not copy ${source} to ${target}: ${(error as Error).message}`);
    process.exit(1);
  }
}

main();
