// Erzeugt data/del2.js aus data/del2_spieler_2026-27.csv  (node scripts/build-data.mjs)
import fs from 'fs';
const CLUBS = {
  BDW:'Blue Devils Weiden', DEG:'Deggendorfer SC', DRE:'Dresdner Eislöwen', EBR:'Eisbären Regensburg',
  ECK:'EC Kassel Huskies', ECN:'EC Bad Nauheim', EPC:'Eispiraten Crimmitschau', EVL:'EV Landshut',
  FRB:'EHC Freiburg', LFX:'Lausitzer Füchse', MEM:'Memmingen Indians', RVT:'Ravensburg Towerstars',
  SBR:'Starbulls Rosenheim', SCB:'Bietigheim Steelers'
};
const POS = {FO:'F', DE:'D', GK:'G'};
const rows = fs.readFileSync('data/del2_spieler_2026-27.csv','utf8').replace(/^﻿/,'').split(/\r?\n/).slice(1).filter(Boolean);
const teams = Object.fromEntries(Object.entries(CLUBS).map(([k,n])=>[k,{id:k.toLowerCase(),name:n,players:[]}]));
for (const r of rows) {
  const [name,club,nat,nr,pos,hand,cm,kg,bday,,place] = r.split(';');
  if (!teams[club]) throw new Error('Unbekannter Club '+club);
  const [d,m,y] = bday.split('.');
  teams[club].players.push([name,POS[pos],+y,nat,nr?+nr:'',`${y}-${m}-${d}`,+cm||null,+kg||null,hand||'',(place||'').trim()]);
}
const list = Object.values(teams).sort((a,b)=>a.name.localeCompare(b.name,'de'));
const out = `// Automatisch erzeugt aus data/del2_spieler_2026-27.csv (scripts/build-data.mjs)
// Spieler: [name, pos ("G"|"D"|"F"), Geburtsjahr, Nation, Trikotnr., Geburtsdatum, cm, kg, Hand (L/R), Geburtsort]
window.DEL2_DATA = {
  season: "2026/27",
  seasonStartYear: 2026, // U21: Geburtsjahr >= seasonStartYear - 20
  teams: ${JSON.stringify(list,null,1).replace(/\n\s*/g,' ').replace(/\{ "id"/g,'\n  {"id"')}
};
`;
fs.writeFileSync('data/del2.js',out);
console.log(list.map(t=>`${t.name}: ${t.players.length} (G${t.players.filter(p=>p[1]=='G').length})`).join('\n'));
