const plantList = [
  "24904",
  "",
  "Acanthodium",
  "Delile",
  "8834",
  "8801",
  "",
  "Acanthopale",
  "C.B.Clarke",
  "",
  "8802",
  "",
  "Acanthopsis",
  "Harv.",
  "",
  "15961",
  "",
  "Acanthostelma",
  "Bidgood & Brummitt",
  "",
  "8803",
  "",
  "Acanthura",
  "Lindau",
  "",
  "8804",
  "",
  "Acanthus",
  "L.",
  "",
  "20529",
  "",
  "Acelica",
  "Rizzini",
  "8942",
  "8805",
  "",
  "Achyrocalyx",
  "Benoist",
  "",
  "25483",
  "",
  "Adelaster",
  "Lindl. ex Veitch",
  "8908",
  "8806",
  "",
  "Adenacanthus",
  "Nees",
  "9075",
  "8807",
  "",
  "Adenostachya",
  "Bremek.",
  "9075",
  "16180",
  "",
  "Adhatoda",
  "Mill.",
  "8942",
  "8808",
  "",
  "Aechmanthera",
  "Nees",
  "",
  "8809",
  "",
  "Afrofittonia",
  "Lindau",
  "",
  "15974",
  "",
  "Afromendoncia",
  "Gilg ex Lindau",
  "8972",
  "24940",
  "",
  "Amathea",
  "Raf.",
  "8822",
  "8810",
  "",
  "Ambongia",
  "Benoist",
  "",
  "24906",
  "",
  "Amphiestes",
  "S.Moore",
  "8935",
  "20530",
  "",
  "Amphiscopia",
  "Nees",
  "8942",
  "20539",
  "",
  "Ancalanthus",
  "Balf.f.",
  "8815",
  "8811",
  "",
  "Ancistranthus",
  "Lindau",
  "",
  "8812",
  "",
  "Ancylacanthus",
  "Lindau",
  "9028",
  "8813",
  "",
  "Androcentrum",
  "Lem.",
  "8838",
  "8814",
  "",
  "Andrographis",
  "Wall. ex Nees",
  "",
  "8815",
  "",
  "Angkalanthus",
  "Balf.f.",
  "",
  "8816",
  "",
  "Anisacanthus",
  "Nees",
  "",
  "8817",
  "",
  "Anisosepalum",
  "E.Hossain",
  "",
  "20531",
  "",
  "Anisostachya",
  "Nees",
  "8942",
  "8818",
  "",
  "Anisotes",
  "Nees",
  "",
  "8819",
  "",
  "Anomacanthus",
  "R.D.Good",
  "",
  "8820",
  "",
  "Anthacanthus",
  "Nees",
  "",
  "20519",
  "",
  "Antheliacanthus",
  "Ridl.",
  "9020",
  "8821",
  "",
  "Apassalus",
  "Kobuski",
  "",
  "20518",
  "",
  "Aphanandrium",
  "Lindau",
  "8982",
  "22324",
  "",
  "Aphanosperma",
  "T.F.Daniel",
  "",
  "8822",
  "",
  "Aphelandra",
  "R.Br.",
  "",
  "8823",
  "",
  "Aphelandrella",
  "Mildbr.",
  "",
  "24941",
  "",
  "Aphragmia",
  "Nees",
  "9037",
  "24942",
  "",
  "Apolepsis",
  "(Blume) Hassk.",
  "8952",
  "20499",
  "",
  "Arrhostoxylum",
  "Nees",
  "9037",
  "8824",
  "",
  "Ascotheca",
  "Heine",
  "",
  "20493",
  "",
  "Asteracantha",
  "Nees",
  "8933",
  "8825",
  "",
  "Asystasia",
  "Blume",
  "",
  "20517",
  "",
  "Asystasiella",
  "Lindau",
  "",
  "8826",
  "",
  "Aulojusticia",
  "Lindau",
  "8942",
  "15193",
  "",
  "Averia",
  "Leonard",
  "8942",
  "8827",
  "",
  "Ballochia",
  "Balf.f.",
  "",
  "8828",
  "",
  "Baphicacanthus",
  "Bremek.",
  "9075",
  "8829",
  "",
  "Barleria",
  "L.",
  "",
  "20511",
  "",
  "Barleriacanthus",
  "Oerst.",
  "8829",
  "20509",
  "",
  "Barlerianthus",
  "Oerst.",
  "8829",
  "8830",
  "",
  "Barleriola",
  "Oerst.",
  "",
  "20510",
  "",
  "Barleriosiphon",
  "Oerst.",
  "8829",
  "20514",
  "",
  "Barlerites",
  "Oerst.",
  "8829",
  "20532",
  "",
  "Beloperone",
  "Nees",
  "8942",
  "8831",
  "",
  "Benoicanthus",
  "Heine & A.Raynal",
  "",
  "20533",
  "",
  "Bentia",
  "Rolfe",
  "8942",
  "8832",
  "",
  "Berginia",
  "Harv.",
  "8930",
  "8833",
  "",
  "Blechum",
  "P.Browne",
  "",
  "24908",
  "",
  "Blepharacanthus",
  "Nees ex Lindl.",
  "8834",
  "8834",
  "",
  "Blepharis",
  "Juss.",
  "",
  "8835",
  "",
  "Borneacanthus",
  "Bremek.",
  "",
  "8836",
  "",
  "Boutonia",
  "DC.",
  "",
  "8837",
  "",
  "Brachystephanus",
  "Nees",
  "",
  "8838",
  "",
  "Bravaisia",
  "DC.",
  "",
  "14176",
  "",
  "Bremekampia",
  "Sreem.",
  "22085",
  "8839",
  "",
  "Brillantaisia",
  "P.Beauv.",
  "",
  "24969",
  "",
  "Brochosiphon",
  "Nees",
  "8883",
  "22083",
  "",
  "Brunoniella",
  "Bremek.",
  "",
  "8840",
  "",
  "Buceragenia",
  "Greenm.",
  "",
  "24911",
  "",
  "Butayea",
  "De Wild.",
  "9052",
  "8841",
  "",
  "Buteraea",
  "Nees",
  "9075",
  "8842",
  "",
  "Calacanthus",
  "T.Anderson ex Benth.",
  "",
  "24912",
  "",
  "Calliaspidia",
  "Bremek.",
  "8942",
  "20496",
  "",
  "Calophanes",
  "D.Don",
  "8895",
  "8843",
  "",
  "Calophanoides",
  "(C.B.Clarke) Ridl.",
  "8942",
  "8844",
  "",
  "Calycacanthus",
  "K.Schum.",
  "",
  "8845",
  "",
  "Calymmostachya",
  "Bremek.",
  "8942",
  "8846",
  "",
  "Camarotea",
  "Scott-Elliot",
  "",
  "20494",
  "",
  "Cardanthera",
  "Buch.-Ham. ex Benth.",
  "8933",
  "8847",
  "",
  "Cardiacanthus",
  "Nees & Schauer",
  "8848",
  "8848",
  "",
  "Carlowrightia",
  "A.Gray",
  "",
  "8849",
  "",
  "Carvia",
  "Bremek.",
  "9075",
  "8850",
  "",
  "Celerina",
  "Benoist",
  "",
  "8851",
  "",
  "Centrilla",
  "Lindau",
  "",
  "8852",
  "",
  "Cephalacanthus",
  "Lindau",
  "",
  "8853",
  "",
  "Chaetacanthus",
  "Nees",
  "",
  "8854",
  "",
  "Chaetochlamys",
  "Lindau",
  "8942",
  "8855",
  "",
  "Chaetothylax",
  "Nees",
  "8942",
  "24970",
  "",
  "Chaetothylopsis",
  "Oerst.",
  "8942",
  "8856",
  "",
  "Chalarothyrsus",
  "Lindau",
  "",
  "8858",
  "",
  "Chamaeranthemum",
  "Nees",
  "",
  "8859",
  "",
  "Championella",
  "Bremek.",
  "9075",
  "24905",
  "",
  "Cheilopsis",
  "Moq.",
  "8804",
  "8860",
  "",
  "Chileranthemum",
  "Oerst.",
  "",
  "24971",
  "",
  "Chiloglossa",
  "Oerst.",
  "8942",
  "8861",
  "",
  "Chingiacanthus",
  "Hand.-Mazz.",
  "8937",
  "8862",
  "",
  "Chlamydacanthus",
  "Lindau",
  "",
  "8863",
  "",
  "Chlamydocardia",
  "Lindau",
  "",
  "14199",
  "",
  "Chlamydostachya",
  "Mildbr.",
  "",
  "20520",
  "",
  "Chrestienia",
  "Montrouz.",
  "9020",
  "8864",
  "",
  "Chroesthes",
  "Benoist",
  "",
  "8865",
  "",
  "Clinacanthus",
  "Nees",
  "",
  "8866",
  "",
  "Clistax",
  "Mart.",
  "",
  "8867",
  "",
  "Codonacanthus",
  "Nees",
  "",
  "8868",
  "",
  "Conocalyx",
  "Benoist",
  "",
  "24420",
  "",
  "Copioglossa",
  "Miers",
  "9037",
  "8869",
  "",
  "Corymbostachys",
  "Lindau",
  "8942",
  "8870",
  "",
  "Cosmianthemum",
  "Bremek.",
  "",
  "8871",
  "",
  "Crabbea",
  "Harv.",
  "",
  "24924",
  "",
  "Croftia",
  "Small",
  "8848",
  "8872",
  "",
  "Crossandra",
  "Salisb.",
  "",
  "8873",
  "",
  "Crossandrella",
  "C.B.Clarke",
  "",
  "20521",
  "",
  "Cryptophragmium",
  "Nees",
  "8918",
  "8874",
  "",
  "Ctenopaepale",
  "Bremek.",
  "9075",
  "8875",
  "",
  "Cyclacanthus",
  "S.Moore",
  "",
  "8876",
  "",
  "Cylindrosolenium",
  "Lindau",
  "",
  "8877",
  "",
  "Cyphacanthus",
  "Leonard",
  "",
  "20534",
  "",
  "Cyphisia",
  "Rizzini",
  "8942",
  "20983",
  "",
  "Cyrtanthera",
  "Nees",
  "8942",
  "24972",
  "",
  "Cyrtantherella",
  "Oerst.",
  "8942",
  "8878",
  "",
  "Cystacanthus",
  "T.Anderson",
  "",
  "25196",
  "",
  "Dactylostegium",
  "Nees",
  "8883",
  "20503",
  "",
  "Daedalacanthus",
  "T.Anderson",
  "8904",
  "8879",
  "",
  "Danguya",
  "Benoist",
  "",
  "8880",
  "",
  "Dasytropis",
  "Urb.",
  "",
  "17374",
  "",
  "Delphinacanthus",
  "Benoist",
  "9022",
  "17501",
  "",
  "Dianthera",
  "L.",
  "8942",
  "25197",
  "",
  "Diateinacanthus",
  "Lindau",
  "8986",
  "24907",
  "",
  "Dicentranthera",
  "T.Anderson",
  "8825",
  "8881",
  "",
  "Dichazothece",
  "Lindau",
  "",
  "8882",
  "",
  "Dicladanthera",
  "F.Muell.",
  "",
  "8883",
  "",
  "Dicliptera",
  "Juss.",
  "",
  "20512",
  "",
  "Dicranacanthus",
  "Oerst.",
  "8829",
  "8884",
  "",
  "Didyplosandra",
  "Wight ex Bremek.",
  "9075",
  "8885",
  "",
  "Diflugossa",
  "Bremek.",
  "9075",
  "24973",
  "",
  "Dimanisa",
  "Raf.",
  "8942",
  "8886",
  "",
  "Dinteracanthus",
  "C.B.Clarke ex Schinz",
  "9037",
  "8887",
  "",
  "Diotacanthus",
  "Benth.",
  "",
  "8888",
  "",
  "Dipteracanthus",
  "Nees",
  "9037",
  "8889",
  "",
  "Dischistocalyx",
  "T.Anderson ex Benth.",
  "",
  "16181",
  "",
  "Disperma",
  "J.F.Gmel.",
  "8894",
  "22084",
  "",
  "Distichocalyx",
  "Benth.",
  "8889",
  "8890",
  "",
  "Ditrichospermum",
  "Bremek.",
  "9075",
  "8891",
  "",
  "Dolichostachys",
  "Benoist",
  "",
  "8892",
  "",
  "Dossifluga",
  "Bremek.",
  "9075",
  "8893",
  "",
  "Drejera",
  "Nees",
  "",
  "16182",
  "",
  "Drejerella",
  "Lindau",
  "8942",
  "8894",
  "",
  "Duosperma",
  "Dayton",
  "",
  "24974",
  "",
  "Duvernoia",
  "E.Mey. ex Nees",
  "8942",
  "8895",
  "",
  "Dyschoriste",
  "Nees",
  "",
  "24975",
  "",
  "Dyspemptemorion",
  "Bremek.",
  "8942",
  "20491",
  "",
  "Ebermaiera",
  "Nees",
  "9064",
  "8896",
  "",
  "Ecbolium",
  "Kurz",
  "",
  "8897",
  "",
  "Echinacanthus",
  "Nees",
  "",
  "8898",
  "",
  "Echinopaepale",
  "Bremek.",
  "9075",
  "20538",
  "",
  "Ecteinanthus",
  "T.Anderson",
  "8937",
  "8899",
  "",
  "Elytraria",
  "Michx.",
  "",
  "24976",
  "",
  "Emularia",
  "Raf.",
  "8942",
  "8900",
  "",
  "Encephalosphaera",
  "Lindau",
  "",
  "8901",
  "",
  "Endopogon",
  "Nees",
  "9075",
  "8902",
  "",
  "Endosiphon",
  "T.Anderson ex Benth.",
  "9037",
  "8903",
  "",
  "Epiclastopelma",
  "Lindau",
  "",
  "8904",
  "",
  "Eranthemum",
  "L.",
  "",
  "8905",
  "",
  "Eremomastax",
  "Lindau",
  "",
  "25198",
  "",
  "Eriostrobilus",
  "Bremek.",
  "9075",
  "24913",
  "",
  "Erythracanthus",
  "Nees",
  "9064",
  "24977",
  "",
  "Ethesia",
  "Raf.",
  "8942",
  "8906",
  "",
  "Eusiphon",
  "Benoist",
  "",
  "8907",
  "",
  "Filetia",
  "Miq.",
  "",
  "8908",
  "",
  "Fittonia",
  "Coem.",
  "",
  "8909",
  "",
  "Forcipella",
  "Baill.",
  "",
  "20528",
  "",
  "Forsythiopsis",
  "Baker",
  "8988",
  "24978",
  "",
  "Gantelbua",
  "Bremek.",
  "8925",
  "8910",
  "",
  "Gastranthus",
  "Moritz ex Benth. & Hook.",
  "9069",
  "24979",
  "",
  "Gatesia",
  "A.Gray",
  "9111",
  "8911",
  "",
  "Geissomeria",
  "Lindl.",
  "",
  "24914",
  "",
  "Gendarussa",
  "Nees",
  "8942",
  "8320",
  "",
  "Gerardia",
  "Benth.",
  "9067",
  "20490",
  "",
  "Gilletiella",
  "De Wild. & T.Durand",
  "8819",
  "8912",
  "",
  "Glockeria",
  "Nees",
  "8920",
  "24981",
  "",
  "Glosarithys",
  "Rizzini",
  "8942",
  "8913",
  "",
  "Glossochilus",
  "Nees",
  "",
  "24980",
  "",
  "Golaea",
  "Chiov.",
  "",
  "8914",
  "",
  "Goldfussia",
  "Nees",
  "9075",
  "8915",
  "",
  "Graphandra",
  "J.B.Imlay",
  "",
  "8916",
  "",
  "Graptophyllum",
  "Nees",
  "",
  "8917",
  "",
  "Gutzlaffia",
  "Hance",
  "9075",
  "25199",
  "",
  "Gymapsis",
  "Bremek.",
  "9075",
  "20498",
  "",
  "Gymnacanthus",
  "Oerst.",
  "9037",
  "8918",
  "",
  "Gymnostachyum",
  "Nees",
  "",
  "8919",
  "",
  "Gynocraterium",
  "Bremek.",
  "",
  "17422",
  "",
  "Gypsacanthus",
  "Lott, V.Jaram. & Rzed.",
  "",
  "8920",
  "",
  "Habracanthus",
  "Nees",
  "",
  "20505",
  "",
  "Haemacanthus",
  "S.Moore",
  "9046",
  "8921",
  "",
  "Hallieracantha",
  "Stapf",
  "9028",
  "8922",
  "",
  "Hansteinia",
  "Oerst.",
  "8920",
  "20527",
  "",
  "Haplanthera",
  "Hochst.",
  "9041",
  "22085",
  "",
  "Haplanthodes",
  "Kuntze",
  "",
  "14801",
  "",
  "Haplanthoides",
  "H.W.Li",
  "8814",
  "8923",
  "",
  "Haplanthus",
  "Nees",
  "8814",
  "24982",
  "",
  "Harnieria",
  "Solms",
  "8942",
  "8924",
  "",
  "Harpochilus",
  "Nees",
  "",
  "23239",
  "",
  "Harrachia",
  "Jacq.",
  "8872",
  "20506",
  "",
  "Haselhoffia",
  "Lindau",
  "9011",
  "24986",
  "",
  "Heinzelia",
  "Nees",
  "8942",
  "25834",
  "",
  "Hemiadelphis",
  "Nees",
  "8933",
  "24983",
  "",
  "Hemichoriste",
  "Nees",
  "8942",
  "8925",
  "",
  "Hemigraphis",
  "Nees",
  "",
  "24984",
  "",
  "Hemisandra",
  "Scheidw.",
  "8822",
  "8926",
  "",
  "Henrya",
  "Nees",
  "",
  "8927",
  "",
  "Herpetacanthus",
  "Nees",
  "",
  "8928",
  "",
  "Heteradelphia",
  "Lindau",
  "",
  "24985",
  "",
  "Heteraspidia",
  "Rizzini",
  "8942",
  "8929",
  "",
  "Himantochilus",
  "T.Anderson ex Benth.",
  "8818",
  "8930",
  "",
  "Holographis",
  "Nees",
  "",
  "8931",
  "",
  "Hoverdenia",
  "Nees",
  "",
  "8932",
  "",
  "Hulemacanthus",
  "S.Moore",
  "",
  "24987",
  "",
  "Hydromestus",
  "Scheidw.",
  "8822",
  "8933",
  "",
  "Hygrophila",
  "R.Br.",
  "",
  "8934",
  "",
  "Hymenochlaena",
  "Bremek.",
  "9075",
  "8935",
  "",
  "Hypoestes",
  "Sol. ex R.Br.",
  "",
  "15968",
  "",
  "Indoneesiella",
  "Sreem.",
  "",
  "8936",
  "",
  "Ionacanthus",
  "Benoist",
  "",
  "24918",
  "",
  "Isacanthus",
  "Nees",
  "9052",
  "8343",
  "",
  "Isaloa",
  "Humbert",
  "8829",
  "20516",
  "",
  "Isochoriste",
  "Miq.",
  "8825",
  "8937",
  "",
  "Isoglossa",
  "Oerst.",
  "",
  "8938",
  "",
  "Isotheca",
  "Turrill",
  "",
  "8939",
  "",
  "Ixtlania",
  "M.E.Jones",
  "8942",
  "16183",
  "",
  "Jacobinia",
  "Nees ex Moric.",
  "8942",
  "8940",
  "",
  "Jadunia",
  "Lindau",
  "",
  "8941",
  "",
  "Juruasia",
  "Lindau",
  "",
  "8942",
  "",
  "Justicia",
  "L.",
  "",
  "22086",
  "",
  "Kalbreyeracanthus",
  "Wassh.",
  "8920",
  "8943",
  "",
  "Kalbreyeriella",
  "Lindau",
  "",
  "25186",
  "",
  "Kanjarum",
  "Ramam.",
  "9075",
  "24989",
  "",
  "Kita",
  "A.Chev.",
  "8933",
  "24990",
  "",
  "Kjellbergia",
  "Bremek.",
  "9075",
  "8944",
  "",
  "Kolobochilus",
  "Lindau",
  "",
  "8945",
  "",
  "Kosmosiphon",
  "Lindau",
  "",
  "8946",
  "",
  "Kudoacanthus",
  "Hosok.",
  "",
  "24988",
  "",
  "Kuestera",
  "Regel",
  "8942",
  "24926",
  "",
  "Lagochilium",
  "Nees",
  "8822",
  "8947",
  "",
  "Lamiacanthus",
  "Kuntze",
  "9075",
  "8948",
  "",
  "Lankesteria",
  "Lindl.",
  "",
  "25187",
  "",
  "Larsenia",
  "Bremek.",
  "9075",
  "8949",
  "",
  "Lasiocladus",
  "Bojer ex Nees",
  "",
  "8950",
  "",
  "Leandriella",
  "Benoist",
  "",
  "8951",
  "",
  "Leda",
  "C.B.Clarke",
  "8937",
  "25188",
  "",
  "Leiophaca",
  "Lindau",
  "9106",
  "24991",
  "",
  "Lepidacanthus",
  "C.Presl",
  "8822",
  "8952",
  "",
  "Lepidagathis",
  "Willd.",
  "",
  "8953",
  "",
  "Leptacanthus",
  "Nees",
  "9075",
  "8954",
  "",
  "Leptosiphonium",
  "F.Muell.",
  "",
  "17531",
  "",
  "Leptostachya",
  "Nees",
  "",
  "24992",
  "",
  "Leucobarleria",
  "Lindau",
  "8983",
  "24910",
  "",
  "Leucoraphis",
  "Nees",
  "8839",
  "24993",
  "",
  "Liberatia",
  "Rizzini",
  "8959",
  "24994",
  "",
  "Libonia",
  "K.Koch",
  "8942",
  "8955",
  "",
  "Linariantha",
  "B.L.Burtt & R.M.Sm.",
  "",
  "8956",
  "",
  "Lindauea",
  "Rendle",
  "",
  "24996",
  "",
  "Linocalyx",
  "Lindau",
  "8942",
  "15975",
  "",
  "Lirayea",
  "Pierre",
  "8972",
  "8957",
  "",
  "Lissospermum",
  "Bremek.",
  "9075",
  "8958",
  "",
  "Listrobanthes",
  "Bremek.",
  "9075",
  "8959",
  "",
  "Lophostachys",
  "Pohl",
  "",
  "24995",
  "",
  "Lophothecium",
  "Rizzini",
  "8942",
  "8960",
  "",
  "Louteridium",
  "S.Watson",
  "",
  "20526",
  "",
  "Lundellia",
  "Leonard",
  "8930",
  "24997",
  "",
  "Lustrinia",
  "Raf.",
  "8942",
  "8961",
  "",
  "Lychniothyrsus",
  "Lindau",
  "",
  "8962",
  "",
  "Mackaya",
  "Harv.",
  "",
  "8963",
  "",
  "Mackenziea",
  "Nees",
  "9075",
  "8964",
  "",
  "Macrorungia",
  "C.B.Clarke",
  "8818",
  "8966",
  "",
  "Mananthes",
  "Bremek.",
  "8942",
  "17729",
  "",
  "Marcania",
  "J.B.Imlay",
  "",
  "8967",
  "",
  "Megalochlamys",
  "Lindau",
  "",
  "8968",
  "",
  "Megalostoma",
  "Leonard",
  "",
  "8969",
  "",
  "Megaskepasma",
  "Lindau",
  "",
  "8970",
  "",
  "Melittacanthus",
  "S.Moore",
  "",
  "8971",
  "",
  "Mellera",
  "S.Moore",
  "",
  "8972",
  "",
  "Mendoncia",
  "Vell. ex Vand.",
  "",
  "14200",
  "",
  "Metarungia",
  "Baden",
  "",
  "14245",
  "",
  "Mexacanthus",
  "T.F.Daniel",
  "",
  "8973",
  "",
  "Meyenia",
  "Nees",
  "",
  "20979",
  "",
  "Micranthus",
  "J.C.Wendl.",
  "9007",
  "8974",
  "",
  "Microstrobilus",
  "Bremek.",
  "9075",
  "8975",
  "",
  "Mimulopsis",
  "Schweinf.",
  "",
  "8976",
  "",
  "Mirandea",
  "Rzed.",
  "",
  "15976",
  "",
  "Monachochlamys",
  "Baker",
  "8972",
  "8977",
  "",
  "Monechma",
  "Hochst.",
  "",
  "8978",
  "",
  "Monothecium",
  "Hochst.",
  "",
  "8979",
  "",
  "Morsacanthus",
  "Rizzini",
  "",
  "8980",
  "",
  "Nelsonia",
  "R.Br.",
  "",
  "8981",
  "",
  "Neohallia",
  "Hemsl.",
  "",
  "25189",
  "",
  "Neolindenia",
  "Baill.",
  "8960",
  "8384",
  "",
  "Neozenkerina",
  "Mildbr.",
  "9064",
  "8982",
  "",
  "Neriacanthus",
  "Benth.",
  "",
  "8983",
  "",
  "Neuracanthus",
  "Nees",
  "",
  "24998",
  "",
  "Nicoteba",
  "Lindau",
  "8942",
  "8984",
  "",
  "Nilgirianthus",
  "Bremek.",
  "9075",
  "8985",
  "",
  "Nomaphila",
  "Blume",
  "8933",
  "24999",
  "",
  "Nothoruellia",
  "Bremek.",
  "9037",
  "8986",
  "",
  "Odontonema",
  "Nees",
  "",
  "17508",
  "",
  "Odontonemella",
  "Lindau",
  "8962",
  "25194",
  "",
  "Odontophyllum",
  "Sreem.",
  "8822",
  "24915",
  "",
  "Odontostigma",
  "Zoll. & Moritzi",
  "8918",
  "20500",
  "",
  "Onus",
  "Gilli",
  "8971",
  "24927",
  "",
  "Onychacanthus",
  "Nees",
  "8838",
  "8987",
  "",
  "Ophiorrhiziphyllon",
  "Kurz",
  "",
  "8988",
  "",
  "Oplonia",
  "Raf.",
  "",
  "8989",
  "",
  "Oreacanthus",
  "Benth.",
  "",
  "8990",
  "",
  "Oreothyrsus",
  "Lindau",
  "9028",
  "8991",
  "",
  "Orophochilus",
  "Lindau",
  "",
  "20535",
  "",
  "Orthotactus",
  "Nees",
  "8942",
  "8992",
  "",
  "Pachystachys",
  "Nees",
  "",
  "8993",
  "",
  "Pachystrobilus",
  "Bremek.",
  "9075",
  "25000",
  "",
  "Parabarleria",
  "Baill.",
  "8829",
  "8994",
  "",
  "Parachampionella",
  "Bremek.",
  "9075",
  "8995",
  "",
  "Paragoldfussia",
  "Bremek.",
  "9075",
  "25503",
  "",
  "Paragutzlaffia",
  "H.P.Tsui",
  "9075",
  "25001",
  "",
  "Parajusticia",
  "Benoist",
  "8942",
  "8996",
  "",
  "Pararuellia",
  "Bremek.",
  "",
  "8997",
  "",
  "Parastrobilanthes",
  "Bremek.",
  "9075",
  "8998",
  "",
  "Parasympagis",
  "Bremek.",
  "9075",
  "25002",
  "",
  "Parasystasia",
  "Baill.",
  "8825",
  "17370",
  "",
  "Paulowilhelmia",
  "Hochst.",
  "8905",
  "8999",
  "",
  "Pelecostemon",
  "Leonard",
  "",
  "9000",
  "",
  "Pentstemonacanthus",
  "Nees",
  "",
  "9001",
  "",
  "Perenideboles",
  "Ram.Goyena",
  "",
  "17375",
  "",
  "Periblema",
  "DC.",
  "8836",
  "9002",
  "",
  "Pericalypta",
  "Benoist",
  "",
  "9003",
  "",
  "Periestes",
  "Baill.",
  "8935",
  "9004",
  "",
  "Perilepta",
  "Bremek.",
  "9075",
  "9005",
  "",
  "Peristrophe",
  "Nees",
  "",
  "25003",
  "",
  "Petalanthera",
  "Raf.",
  "8942",
  "9006",
  "",
  "Petalidium",
  "Nees",
  "",
  "24916",
  "",
  "Petracanthus",
  "Nees",
  "8918",
  "9007",
  "",
  "Phaulopsis",
  "Willd.",
  "",
  "16184",
  "",
  "Phaylopsis",
  "Willd.",
  "9007",
  "9008",
  "",
  "Phialacanthus",
  "Benth.",
  "",
  "25190",
  "",
  "Phidiasia",
  "Urb.",
  "8986",
  "20497",
  "",
  "Phillipsia",
  "Rolfe",
  "8895",
  "9009",
  "",
  "Phlebophyllum",
  "Nees",
  "9075",
  "9010",
  "",
  "Phlogacanthus",
  "Nees",
  "",
  "9011",
  "",
  "Physacanthus",
  "Benth.",
  "",
  "23579",
  "",
  "Plaesianthera",
  "(C.B.Clarke) Livera",
  "8839",
  "25004",
  "",
  "Plagiacanthus",
  "Nees",
  "8942",
  "24419",
  "",
  "Plagiotheca",
  "Chiov.",
  "8937",
  "9012",
  "",
  "Plegmatolemma",
  "Bremek.",
  "8942",
  "9013",
  "",
  "Pleocaulus",
  "Bremek.",
  "9075",
  "18164",
  "",
  "Pleuroblepharis",
  "Baill.",
  "8872",
  "9014",
  "",
  "Podorungia",
  "Baill.",
  "",
  "24922",
  "",
  "Pogonospermum",
  "Hochst.",
  "8977",
  "9015",
  "",
  "Poikilacanthus",
  "Lindau",
  "",
  "9016",
  "",
  "Polylychnis",
  "Bremek.",
  "",
  "23240",
  "",
  "Polythrix",
  "Nees",
  "8872",
  "9017",
  "",
  "Polytrema",
  "C.B.Clarke",
  "9028",
  "17373",
  "",
  "Populina",
  "Baill.",
  "",
  "24928",
  "",
  "Porphyrocoma",
  "Scheidw. ex Hook.",
  "8942",
  "24923",
  "",
  "Pounguia",
  "Benoist",
  "9106",
  "16171",
  "",
  "Pranceacanthus",
  "Wassh.",
  "",
  "20525",
  "",
  "Pringleophytum",
  "A.Gray",
  "8930",
  "20513",
  "",
  "Prionitis",
  "Oerst.",
  "8829",
  "24920",
  "",
  "Psacadocalymma",
  "Bremek.",
  "8942",
  "9018",
  "",
  "Psacadopaepale",
  "Bremek.",
  "9075",
  "25191",
  "",
  "Pseudacanthopale",
  "Benoist",
  "9076",
  "9019",
  "",
  "Pseudaechmanthera",
  "Bremek.",
  "9075",
  "9020",
  "",
  "Pseuderanthemum",
  "Radlk.",
  "",
  "20508",
  "",
  "Pseudo-Barleria",
  "Oerst.",
  "8829",
  "20502",
  "",
  "Pseudobarleria",
  "T.Anderson",
  "9006",
  "20507",
  "",
  "Pseudoblepharis",
  "Baill.",
  "9052",
  "9021",
  "",
  "Pseudocalyx",
  "Radlk.",
  "",
  "9022",
  "",
  "Pseudodicliptera",
  "Benoist",
  "",
  "9023",
  "",
  "Pseudoruellia",
  "Benoist",
  "",
  "9024",
  "",
  "Pseudostenosiphonium",
  "Lindau",
  "9075",
  "9025",
  "",
  "Psilanthele",
  "Lindau",
  "",
  "25005",
  "",
  "Psiloesthes",
  "Benoist",
  "9005",
  "9026",
  "",
  "Pteracanthus",
  "(Nees) Bremek.",
  "9075",
  "9027",
  "",
  "Pteroptychia",
  "Bremek.",
  "9075",
  "9028",
  "",
  "Ptyssiglottis",
  "T.Anderson",
  "",
  "14268",
  "",
  "Pulchranthus",
  "V.M.Baum, Reveal & Nowicke",
  "",
  "25006",
  "",
  "Pupilla",
  "Rizzini",
  "8942",
  "9029",
  "",
  "Pyrrothrix",
  "Bremek.",
  "9075",
  "25007",
  "",
  "Ramusia",
  "Nees",
  "9005",
  "9030",
  "",
  "Razisea",
  "Oerst.",
  "",
  "9031",
  "",
  "Rhacodiscus",
  "Lindau",
  "8942",
  "9032",
  "",
  "Rhaphidospora",
  "Nees",
  "8942",
  "9033",
  "",
  "Rhinacanthus",
  "Nees",
  "",
  "25008",
  "",
  "Rhiphidosperma",
  "G.Don",
  "8942",
  "9034",
  "",
  "Rhombochlamys",
  "Lindau",
  "",
  "17746",
  "",
  "Rhyticalymma",
  "Bremek.",
  "8942",
  "24919",
  "",
  "Rhytiglossa",
  "Nees ex Lindl.",
  "8937",
  "9035",
  "",
  "Ritonia",
  "Benoist",
  "",
  "25009",
  "",
  "Rodatia",
  "Raf.",
  "8942",
  "20984",
  "",
  "Rostellaria",
  "Nees",
  "8942",
  "9036",
  "",
  "Rostellularia",
  "Rchb.",
  "8942",
  "9037",
  "",
  "Ruellia",
  "L.",
  "",
  "24909",
  "",
  "Ruelliola",
  "Baill.",
  "8839",
  "9038",
  "",
  "Ruelliopsis",
  "C.B.Clarke",
  "",
  "9039",
  "",
  "Rungia",
  "Nees",
  "",
  "9040",
  "",
  "Ruspolia",
  "Lindau",
  "",
  "9041",
  "",
  "Ruttya",
  "Harv.",
  "",
  "25010",
  "",
  "Saglorithys",
  "Rizzini",
  "8942",
  "24307",
  "",
  "Saintpauliopsis",
  "Staner",
  "",
  "25480",
  "",
  "Salpinctium",
  "T.J.Edwards",
  "8825",
  "20524",
  "",
  "Salpingantha",
  "Lem.",
  "9042",
  "20523",
  "",
  "Salpinxantha",
  "Urb.",
  "9042",
  "9042",
  "",
  "Salpixantha",
  "Hook.",
  "",
  "20536",
  "",
  "Salviacanthus",
  "Lindau",
  "8942",
  "9043",
  "",
  "Samuelssonia",
  "Urb. & Ekman",
  "",
  "9044",
  "",
  "Sanchezia",
  "Ruiz & Pav.",
  "",
  "16185",
  "",
  "Santapaua",
  "N.P.Balakr. & Subr.",
  "8933",
  "9045",
  "",
  "Sapphoa",
  "Urb.",
  "",
  "24921",
  "",
  "Sarojusticia",
  "Bremek.",
  "8942",
  "20980",
  "",
  "Sarotheca",
  "Nees",
  "8942",
  "9046",
  "",
  "Satanocrater",
  "Schweinf.",
  "",
  "9047",
  "",
  "Sautiera",
  "Decne.",
  "",
  "9048",
  "",
  "Schaueria",
  "Nees",
  "",
  "9049",
  "",
  "Schliebenia",
  "Mildbr.",
  "8937",
  "20537",
  "",
  "Schwabea",
  "Endl.",
  "8977",
  "9050",
  "",
  "Sciaphyllum",
  "Bremek.",
  "",
  "9051",
  "",
  "Sclerocalyx",
  "Nees",
  "9037",
  "9052",
  "",
  "Sclerochiton",
  "Harv.",
  "",
  "20515",
  "",
  "Scytanthus",
  "T.Anderson ex Benth.",
  "9093",
  "9053",
  "",
  "Sebastiano-Schaueria",
  "Nees",
  "",
  "9054",
  "",
  "Semnostachya",
  "Bremek.",
  "9075",
  "9055",
  "",
  "Semnothyrsus",
  "Bremek.",
  "9075",
  "9056",
  "",
  "Sericocalyx",
  "Bremek.",
  "9075",
  "20981",
  "",
  "Sericographis",
  "Nees",
  "8942",
  "25011",
  "",
  "Simonisia",
  "Nees",
  "8942",
  "25192",
  "",
  "Sinthroblastes",
  "Bremek.",
  "9075",
  "9057",
  "",
  "Siphonoglossa",
  "Oerst.",
  "",
  "25012",
  "",
  "Solenochasma",
  "Fenzl",
  "8942",
  "9058",
  "",
  "Solenoruellia",
  "Baill.",
  "8926",
  "20501",
  "",
  "Sooia",
  "Pocs",
  "8903",
  "9059",
  "",
  "Spathacanthus",
  "Baill.",
  "",
  "9060",
  "",
  "Sphacanthus",
  "Benoist",
  "",
  "9061",
  "",
  "Sphinctacanthus",
  "Benth.",
  "",
  "9062",
  "",
  "Spirostigma",
  "Nees",
  "",
  "25193",
  "",
  "Sreemadhavana",
  "Rauschert",
  "8822",
  "9063",
  "",
  "Standleyacanthus",
  "Leonard",
  "",
  "9064",
  "",
  "Staurogyne",
  "Wall.",
  "",
  "25013",
  "",
  "Staurogynopsis",
  "Mangenot & Ake Assi",
  "9064",
  "9065",
  "",
  "Steirosanchezia",
  "Lindau",
  "9044",
  "9066",
  "",
  "Stenandriopsis",
  "S.Moore",
  "",
  "9067",
  "",
  "Stenandrium",
  "Nees",
  "",
  "25195",
  "",
  "Stenoschista",
  "Bremek.",
  "9037",
  "9068",
  "",
  "Stenosiphonium",
  "Nees",
  "",
  "9069",
  "",
  "Stenostephanus",
  "Nees",
  "",
  "9070",
  "",
  "Stenothyrsus",
  "C.B.Clarke",
  "",
  "17747",
  "",
  "Stephanophysum",
  "Pohl",
  "9037",
  "9071",
  "",
  "Stethoma",
  "Raf.",
  "8942",
  "9072",
  "",
  "Streblacanthus",
  "Kuntze",
  "",
  "9073",
  "",
  "Streptosiphon",
  "Mildbr.",
  "",
  "9074",
  "",
  "Strobilacanthus",
  "Griseb.",
  "",
  "9075",
  "",
  "Strobilanthes",
  "Blume",
  "",
  "9076",
  "",
  "Strobilanthopsis",
  "S.Moore",
  "",
  "25014",
  "",
  "Strobilorhachis",
  "Klotzsch",
  "8822",
  "17369",
  "",
  "Strophacanthus",
  "Lindau",
  "8937",
  "9077",
  "",
  "Styasasia",
  "S.Moore",
  "",
  "20504",
  "",
  "Stylarthropus",
  "Baill.",
  "9106",
  "9078",
  "",
  "Suessenguthia",
  "Merxm.",
  "",
  "9079",
  "",
  "Sympagis",
  "(Nees) Bremek.",
  "9075",
  "9080",
  "",
  "Symplectochilus",
  "Lindau",
  "8818",
  "25015",
  "",
  "Synandra",
  "Schrad.",
  "8822",
  "17372",
  "",
  "Synchoriste",
  "Baill.",
  "8949",
  "20495",
  "",
  "Synnema",
  "Benth.",
  "8933",
  "9081",
  "",
  "Syringidium",
  "Lindau",
  "8920",
  "24925",
  "",
  "Tabascina",
  "Baill.",
  "8942",
  "9082",
  "",
  "Tacoanthus",
  "Baill.",
  "",
  "9083",
  "",
  "Taeniandra",
  "Bremek.",
  "9075",
  "20540",
  "",
  "Talbotia",
  "S.Moore",
  "8809",
  "9084",
  "",
  "Tarphochlamys",
  "Bremek.",
  "9075",
  "9085",
  "",
  "Teliostachya",
  "Nees",
  "",
  "9086",
  "",
  "Tessmanniacanthus",
  "Mildbr.",
  "",
  "9087",
  "",
  "Tetraglochidium",
  "Bremek.",
  "9075",
  "9088",
  "",
  "Tetragoga",
  "Bremek.",
  "9075",
  "9089",
  "",
  "Tetragompha",
  "Bremek.",
  "9075",
  "9090",
  "",
  "Tetramerium",
  "Nees",
  "",
  "25168",
  "",
  "Thalestris",
  "Rizzini",
  "8942",
  "9091",
  "",
  "Thamnojusticia",
  "Mildbr.",
  "8942",
  "17371",
  "",
  "Theileamea",
  "Baill.",
  "8862",
  "9092",
  "",
  "Thelepaepale",
  "Bremek.",
  "9075",
  "9093",
  "",
  "Thomandersia",
  "Baill.",
  "",
  "9094",
  "",
  "Thunbergia",
  "Retz.",
  "",
  "20541",
  "",
  "Thyrsacanthus",
  "Nees",
  "8986",
  "9095",
  "",
  "Thysanostigma",
  "J.B.Imlay",
  "",
  "9096",
  "",
  "Tremacanthus",
  "S.Moore",
  "",
  "9097",
  "",
  "Triaenacanthus",
  "Nees",
  "9075",
  "9098",
  "",
  "Trichacanthus",
  "Zoll. & Moritzi",
  "8834",
  "9099",
  "",
  "Trichanthera",
  "Kunth",
  "",
  "9100",
  "",
  "Trichocalyx",
  "Balf.f.",
  "",
  "9101",
  "",
  "Trichosanchezia",
  "Mildbr.",
  "",
  "9102",
  "",
  "Trybliocalyx",
  "Lindau",
  "8860",
  "25016",
  "",
  "Tubiflora",
  "J.F.Gmel.",
  "8899",
  "20982",
  "",
  "Tyloglossa",
  "Hochst.",
  "8942",
  "25169",
  "",
  "Ulleria",
  "Bremek.",
  "9037",
  "9103",
  "",
  "Vavara",
  "Benoist",
  "",
  "9104",
  "",
  "Vindasia",
  "Benoist",
  "",
  "20522",
  "",
  "Volkensiophyton",
  "Lindau",
  "8952",
  "9105",
  "",
  "Warpuria",
  "Stapf",
  "9014",
  "9106",
  "",
  "Whitfieldia",
  "Hook.",
  "",
  "9107",
  "",
  "Xantheranthemum",
  "Lindau",
  "",
  "9108",
  "",
  "Xanthostachya",
  "Bremek.",
  "9075",
  "9109",
  "",
  "Xenacanthus",
  "Bremek.",
  "9075",
  "9110",
  "",
  "Xerothamnella",
  "C.T.White",
  "",
  "9111",
  "",
  "Yeatesia",
  "Small",
  "",
  "20492",
  "",
  "Zenkerina",
  "Engl.",
  "9064",
  "9112",
  "",
  "Zygoruellia",
  "Baill.",
  "",
];
let acanthaceae = [];
plantList.shift();
plantList.shift();
plantList.forEach((item, i) => {
  if (i % 5 == 0) {
    acanthaceae.push(item);
  }
});

export { acanthaceae as default };