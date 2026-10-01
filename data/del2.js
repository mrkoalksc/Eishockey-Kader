// DEL2-Daten. Spieler werden im Browser per CSV-Import (aus Eliteprospects) oder manuell gepflegt.
// Format pro Spieler: { name, pos: "G"|"D"|"F" (auch C/LW/RW/LD/RD), birth: Geburtsjahr, nat: "GER"|"CAN"|..., num }
window.DEL2_DATA = {
  season: "2026/27",
  seasonStartYear: 2026, // U21: Geburtsjahr >= seasonStartYear - 20
  teams: [
    { id: "bietigheim", name: "Bietigheim Steelers" },
    { id: "bayreuth", name: "Bayreuth Tigers" },
    { id: "crimmitschau", name: "Eispiraten Crimmitschau" },
    { id: "dresden", name: "Dresdner Eislöwen" },
    { id: "frankfurt", name: "Löwen Frankfurt" },
    { id: "freiburg", name: "EHC Freiburg" },
    { id: "heilbronn", name: "Heilbronner Falken" },
    { id: "kassel", name: "Kassel Huskies" },
    { id: "kaufbeuren", name: "ESV Kaufbeuren" },
    { id: "landshut", name: "EV Landshut" },
    { id: "lausitz", name: "Lausitzer Füchse" },
    { id: "ravensburg", name: "Ravensburg Towerstars" },
    { id: "regensburg", name: "Eisbären Regensburg" },
    { id: "rosenheim", name: "Starbulls Rosenheim" },
    { id: "demo", name: "Beispielteam (fiktiv)", players: [
      ["Max Beispiel","G",1996,"GER",30],["Tim Muster","G",2006,"GER",31],
      ["Jan Test","D",1994,"GER",4],["Leon Probe","D",1998,"GER",5],["Nico Demo","D",1999,"GER",6],["Paul Platz","D",2005,"GER",7],["Erik Dummy","D",2001,"GER",8],["Sven Fiktiv","D",1996,"GER",9],["Ben Neu","D",2006,"GER",10],
      ["Luca Alpha","F",1995,"GER",11],["Felix Beta","F",1997,"GER",12],["Jonas Gamma","F",1993,"GER",13],["Moritz Delta","F",2000,"GER",14],["Tobi Epsilon","F",2002,"GER",15],["Kai Zeta","F",1999,"GER",16],["Ole Eta","F",2006,"GER",17],["Finn Theta","F",2005,"GER",18],
      ["Jake Import","F",1994,"CAN",21],["Ryan Import","F",1996,"USA",22],["Mika Import","F",1995,"FIN",23],["Tomas Import","F",1997,"CZE",24],["Alex Import","D",1992,"SVK",25],["Liam Import","F",1998,"CAN",26]
    ]}
  ]
};
