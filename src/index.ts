import moment, { Moment } from "moment";

interface Step {
    name: string;
    laterWeek: number;
    durationWeek: number;
}
const steps: Step[] = [
    {
        name: "Duyular",
        laterWeek: 3,
        durationWeek: 1,
    },
    {
        name: "Desenler",
        laterWeek: 3,
        durationWeek: 2,
    },
    {
        name: "Geçişler",
        laterWeek: 1,
        durationWeek: 1,
    },
    {
        name: "Olaylar",
        laterWeek: 2,
        durationWeek: 2,
    },
    {
        name: "İlişkiler",
        laterWeek: 6,
        durationWeek: 1,
    },
    {
        name: "Kategoriler",
        laterWeek: 10,
        durationWeek: 4,
    },
    {
        name: "Diziler",
        laterWeek: 4,
        durationWeek: 5,
    },
    {
        name: "Programlar",
        laterWeek: 5,
        durationWeek: 4,
    },
    {
        name: "İlkeler",
        laterWeek: 4,
        durationWeek: 5,
    },
    {
        name: "Sistemler",
        laterWeek: 6,
        durationWeek: 4,
    }
]

function calculateSteps(birthDate: Moment) {
    console.log(`Birth Date: ${birthDate.format('DD/MM/YYYY')}`);
    const list = []
    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        birthDate = birthDate.add(step.laterWeek, 'weeks');
        const startDate = birthDate.format('DD/MM/YYYY');
        birthDate = birthDate.add(step.durationWeek, 'weeks');
        const endDate = birthDate.format('DD/MM/YYYY');
        // startDate den 2 gün önce bugün mü
        if (moment().isSame(moment(startDate, "DD/MM/YYYY").subtract(2, 'days'), 'day')) {
            console.log("-->>", step.name + " Başlamasına 2 gün kaldı");
        }
        // end date den 2 gün önce bugün mü
        if (moment().isSame(moment(endDate, "DD/MM/YYYY").subtract(2, 'days'), 'day')) {
            console.log("-->>", step.name + " Bitmesine 2 gün kaldı");
        }
        list.push({
            name: step.name,
            startDate: startDate,
            endDate: endDate,
        });
        console.log(`${step.name} - ${startDate} - ${endDate}`);
    }
    console.log("-------------------------------------------------");
}

// calculateSteps(moment("01/08/2024", "DD/MM/YYYY"));
calculateSteps(moment("07/04/2024", "DD/MM/YYYY"));

calculateSteps(moment("24/03/2024", "DD/MM/YYYY"));