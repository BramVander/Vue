const assignedTasks = {
  tasks: [
    {
      id: 1,
      name: "Schade opnemen",
      data: {
        location: "tekstveld",
        newDamage: "true",
        type: "keuzelijst: moedwillig, slijtage, geweld, normaal gebruik, calamiteit, anders",
        date: "input met datum keuze",
        urgent: "radio",
        description: "tekstveld",
      },
    },
    {
      id: 2,
      name: "Achterstallig onderhoud opnemen",
      tasks: {
        location: "tekstveld",
        maintenance: "schilderwerk, houtrot, elektra, leidingwerk, beglazing",
        urgent: "radio",
        price: "0-500, 500-1500, 1500+",
      },
    },
    {
      id: 3,
      name: "Technische installaties inspecteren",
      tasks: {
        location: "tekstveld",
        installation:
          "koeling, verwarming, uchtverversing, elektra, beveiliging",
        malfunctions: "tekstveld",
        procedure: "link naar pdf",
        approved: "radio button",
        notes: "tekstveld",
      },
    },
    {
      id: 4,
      name: "Modificaties inventariseren",
      tasks: {
        data: "link naar pdf bestand",
        location: "tekstveld",
        executed: "huurder, aannemer, onbekend",
        modification: "tekstveld",
        toDo: "acecpteren, laten keuren, laten verwijderen, laten aanpassen en keuren",
        notes: "tekstveld",
      },
    },
  ],
};
export default assignedTasks;
