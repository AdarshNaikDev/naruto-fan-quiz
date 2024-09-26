function questionData(){
    const questionArray = [
        {
            
            question: "Do you want to be a pervy ninja?",
            options: [
                { answer: "Yes, Of Course!", points: { Jiraiya: 10, Naruto: 5, Kakashi:5 }, optionValue: "A" },
                { answer: "No, that’s gross!", points: { Sakura: 10, Sasuke: 5, Shikamaru:5 }, optionValue: "B" },
                { answer: "I'll use it as research!", points: { Orochimaru: 10, Itachi: 5 }, optionValue: "C" }
            ]
        },
        {
         
            question: "Which is your favorite pet animal?",
            options: [
                { answer: "Snake", points: { Orochimaru: 10, Sasuke: 5 }, optionValue: "A" },
                { answer: "Toad", points: { Jiraiya: 10, Naruto: 5 }, optionValue: "B" },
                { answer: "Crow", points: { Itachi: 10, Sasuke: 5 }, optionValue: "C" },
                { answer: "Dogs", points: { Kakashi: 10 }, optionValue: "D" }
               
            ]
        },
        {
           
            question: "What would your fighting style be?",
            options: [
                { answer: "Using genius-level strategy", points: { Shikamaru: 15, Itachi: 5, Kakashi:5 }, optionValue: "A" },
                { answer: "Pure physical power", points: { Rock_Lee: 10, Naruto: 5 }, optionValue: "B" },
                { answer: "Destructive eye powers", points: { Sasuke: 10, Itachi: 7, Madara:5 }, optionValue: "C" }
            ]
        },
        {
            question: "What’s your dream job in the ninja world?",
            options: [
                { answer: "Hokage, of course!", points: { Naruto: 10, Hashirama: 5 }, optionValue: "A" },
                { answer: "Legendary ninja, feared by all", points: { Madara: 10, Orochimaru: 5 }, optionValue: "B" },
                { answer: "I’ll settle for taking lots of naps", points: { Shikamaru: 30 }, optionValue: "C" }
            ]
        },
        {
            question: "If you could master one jutsu, what would it be?",
            options: [
                { answer: "Gen Jutsu ", points: { Hashirama: 5, Madara: 10 , Itachi: 15 }, optionValue: "A" },
                { answer: "Sage Jutsu", points: { Naruto: 10, Jiraiya: 5 }, optionValue: "B" },
                { answer: "Nin Jutsu", points: { Itachi: 5, Madara: 10, Naruto:10, Shikamaru:5, Sakura:3}, optionValue: "C" },
                { answer: "Reanimation Jutsu", points: { Orochimaru: 15, }, optionValue: "D" }
            ]
        },
        {
            question: "How do you feel about your family?",
            options: [
                { answer: "I’d do anything for them", points: { Itachi: 10, Sasuke: 5 }, optionValue: "A" },
                { answer: "I don’t really care, I’m on my own path", points: { Sasuke: 10, Madara: 5 }, optionValue: "B" },
                { answer: "Family? They only slow me down", points: { Orochimaru: 10 }, optionValue: "C" },
                { answer: "Family? I don't have a family :(", points: { Naruto: 15, Kakashi:10 }, optionValue: "D" }
            ]
        },
        {
            question: "How do you handle emotions?",
            options: [
                { answer: "Hide them and focus on revenge", points: { Sasuke: 10, Itachi: 5 }, optionValue: "A" },
                { answer: "Cry openly but never give up", points: { Naruto: 10, Rock_Lee: 5 }, optionValue: "B" },
                { answer: "Act cool, but get super awkward when it matters", points: { Rock_Lee: 10, Naruto: 5 }, optionValue: "C" },
                { answer: "Suppress emotions masking pain under humor", points: { Kakashi: 10, Shikamaru: 5 }, optionValue: "D" },
            ]
        },
        {
            question: "Which weapon would you carry?",
            options: [
                { answer: "A high-tech ninja tool with various functions", points: { Kakashi: 10, Orochimaru:5 }, optionValue: "A" },
                { answer: "A giant toad summon", points: { Jiraiya: 10 }, optionValue: "B" },
                { answer: "A fan larger than your body", points: { Madara: 10, Sasuke: 5 }, optionValue: "C" },
                { answer: "A bunch of paper bombs", points: { Sakura: 10, Itachi: 5 , Shikamaru:5}, optionValue: "D" },
                { answer: "My fists, no weapons needed!", points: { Rock_Lee: 10, Naruto: 5 }, optionValue: "E" }
               
            ]
        },
        {
            
                question: "If you became a sensei, which quality would describe you ?",
                options: [
                    { answer: "Innovative and always teaching new techniques", points: { Kakashi: 10, Sasuke: 5 }, optionValue: "A" },
                    { answer: "Wise and experienced, though sometimes a bit mysterious/ creepy", points: { Orochimaru: 10, Itachi: 5 }, optionValue: "B" },
                    { answer: "Legendary and a bit unconventional, with a unique teaching style", points: { Jiraiya: 10, Naruto: 5 }, optionValue: "C" }
                ]
            
        },
        {
            question: "Which hairstyle suits you best?",
            options: [
                { answer: "Wild and spiky", points: { Naruto: 10, Jiraiya: 5, Kakashi:3 }, optionValue: "A" },
                { answer: "Slicked back and serious", points: { Itachi: 10, Sasuke: 5 }, optionValue: "B" },
                { answer: "Bowl-cut perfection", points: { Rock_Lee: 30 }, optionValue: "C" },
                { answer: "Cute Pink hairs", points: { Sakura: 30 }, optionValue: "D" }
            ]
        }
    ];

    return questionArray;

}

export {questionData}
