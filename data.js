// ===== TRAVELS =====
const travels = [
    {
        id: 1,
        name: "Parigi romantica",
        description: "5 giorni tra musei e quartieri storici",
        image: "parigi.jpg",
        initial_date: "2026-04-10",
        final_date: "2026-04-15",
        created_at: "2026-01-10"
    },
    {
        id: 2,
        name: "Londra city break",
        description: "Weekend culturale nella capitale inglese",
        image: "londra.jpg",
        initial_date: "2026-05-02",
        final_date: "2026-05-04",
        created_at: "2026-01-12"
    },
    {
        id: 3,
        name: "New York experience",
        description: "Alla scoperta della Grande Mela",
        image: "newyork.jpg",
        initial_date: "2026-06-01",
        final_date: "2026-06-08",
        created_at: "2026-01-15"
    },
    {
        id: 4,
        name: "Tokyo moderno",
        description: "Tecnologia, tradizione e street food",
        image: "tokyo.jpg",
        initial_date: "2026-07-10",
        final_date: "2026-07-20",
        created_at: "2026-01-18"
    },
    {
        id: 5,
        name: "Roma storica",
        description: "Arte, storia e cucina italiana",
        image: "roma.jpg",
        initial_date: "2026-03-15",
        final_date: "2026-03-20",
        created_at: "2026-01-20"
    },
    {
        id: 6,
        name: "Barcellona vibes",
        description: "Mare, movida e architettura",
        image: "barcellona.jpg",
        initial_date: "2026-06-15",
        final_date: "2026-06-20",
        created_at: "2026-01-22"
    },
    {
        id: 7,
        name: "Berlino alternativa",
        description: "Arte urbana e storia contemporanea",
        image: "berlino.jpg",
        initial_date: "2026-09-05",
        final_date: "2026-09-10",
        created_at: "2026-01-25"
    },
    {
        id: 8,
        name: "Dubai luxury",
        description: "Grattacieli, deserto e shopping",
        image: "dubai.jpg",
        initial_date: "2026-11-01",
        final_date: "2026-11-07",
        created_at: "2026-01-27"
    },
    {
        id: 9,
        name: "Bangkok adventure",
        description: "Templi, mercati e nightlife",
        image: "bangkok.jpg",
        initial_date: "2026-10-10",
        final_date: "2026-10-18",
        created_at: "2026-01-28"
    },
    {
        id: 10,
        name: "Sydney explorer",
        description: "Spiagge e natura australiana",
        image: "sydney.jpg",
        initial_date: "2026-12-01",
        final_date: "2026-12-12",
        created_at: "2026-01-30"
    }
];


// ===== TRAVELERS =====
const travelers = [
    {
        id: 1,
        name: "Mario",
        surname: "Rossi",
        phone_number: "+39 3331111111",
        email: "mario.rossi@email.it",
        CF: "RSSMRA80A01H501U",
        id_travel: 1
    },
    {
        id: 2,
        name: "Giulia",
        surname: "Bianchi",
        phone_number: "+39 3332222222",
        email: "giulia.bianchi@email.it",
        CF: "BNCGLI90C41F205X",
        id_travel: 1
    },
    {
        id: 3,
        name: "Luca",
        surname: "Verdi",
        phone_number: "+39 3333333333",
        email: "luca.verdi@email.it",
        CF: "VRDLCU85D12L219Z",
        id_travel: 2
    },
    {
        id: 4,
        name: "Sara",
        surname: "Neri",
        phone_number: "+39 3334444444",
        email: "sara.neri@email.it",
        CF: "NRESRA92E45F839K",
        id_travel: 2
    },
    {
        id: 5,
        name: "Paolo",
        surname: "Conti",
        phone_number: "+39 3335555555",
        email: "paolo.conti@email.it",
        CF: "CNTPLA78M10G273R",
        id_travel: 3
    },
    {
        id: 6,
        name: "Elena",
        surname: "Ferrari",
        phone_number: "+39 3336666666",
        email: "elena.ferrari@email.it",
        CF: "FRRLNE88A41H501D",
        id_travel: 3
    },
    {
        id: 7,
        name: "Marco",
        surname: "Russo",
        phone_number: "+39 3337777777",
        email: "marco.russo@email.it",
        CF: "RSSMRC81C12F205Z",
        id_travel: 4
    },
    {
        id: 8,
        name: "Anna",
        surname: "Gallo",
        phone_number: "+39 3338888888",
        email: "anna.gallo@email.it",
        CF: "GLLNNA95B22H501E",
        id_travel: 4
    },
    {
        id: 9,
        name: "Davide",
        surname: "Moretti",
        phone_number: "+39 3339999999",
        email: "davide.moretti@email.it",
        CF: "MRTDVD87D15F205S",
        id_travel: 5
    },
    {
        id: 10,
        name: "Chiara",
        surname: "Romano",
        phone_number: "+39 3201111111",
        email: "chiara.romano@email.it",
        CF: "RMNCHR93A41H501Q",
        id_travel: 5
    },
    {
        id: 11,
        name: "Simone",
        surname: "Ricci",
        phone_number: "+39 3202222222",
        email: "simone.ricci@email.it",
        CF: "RCCSMN89E12F205W",
        id_travel: 6
    },
    {
        id: 12,
        name: "Laura",
        surname: "Marini",
        phone_number: "+39 3203333333",
        email: "laura.marini@email.it",
        CF: "MRNLRU91C41H501P",
        id_travel: 6
    },
    {
        id: 13,
        name: "Andrea",
        surname: "De Luca",
        phone_number: "+39 3204444444",
        email: "andrea.deluca@email.it",
        CF: "DLNDRN84A01F205X",
        id_travel: 7
    },
    {
        id: 14,
        name: "Valentina",
        surname: "Costa",
        phone_number: "+39 3205555555",
        email: "valentina.costa@email.it",
        CF: "CSTVNT90B41H501F",
        id_travel: 7
    },
    {
        id: 15,
        name: "Matteo",
        surname: "Greco",
        phone_number: "+39 3206666666",
        email: "matteo.greco@email.it",
        CF: "GRCMTT86C12F205A",
        id_travel: 8
    },
    {
        id: 16,
        name: "Francesca",
        surname: "Pellegrini",
        phone_number: "+39 3207777777",
        email: "francesca.p@email.it",
        CF: "PLLFRN94E41H501R",
        id_travel: 8
    },
    {
        id: 17,
        name: "Alessio",
        surname: "Villa",
        phone_number: "+39 3208888888",
        email: "alessio.villa@email.it",
        CF: "VLLLSS88A01F205B",
        id_travel: 9
    },
    {
        id: 18,
        name: "Martina",
        surname: "Serra",
        phone_number: "+39 3209999999",
        email: "martina.serra@email.it",
        CF: "SRRMTN92C41H501L",
        id_travel: 9
    },
    {
        id: 19,
        name: "Federico",
        surname: "Testa",
        phone_number: "+39 3311111111",
        email: "federico.testa@email.it",
        CF: "TSTFRC85D12F205M",
        id_travel: 10
    },
    {
        id: 20,
        name: "Ilaria",
        surname: "Riva",
        phone_number: "+39 3312222222",
        email: "ilaria.riva@email.it",
        CF: "RVILRA96A41H501Y",
        id_travel: 10
    }
];
export default travels; travelers;
