export const Data = [
    // introduction
    {
        content:[
            {   numbers:"",
                text:"Hey! 🚀 Ready to crush mental math? Learn quick tricks to solve big calculations fast no calculator needed!",
                answer:false,
                draft:false,
                isQuote:false
            },
            {
                numbers:"",
                text:"The Main Concept With Mental Math is **Dividing** Big Calculation Into Smaller One , And Mastering The Smaller Ones"
            },
        ],
        type:"lesson",
    },
    // 1 digits addition
    {
        content:[
            {
                numbers:"",
                text:"We Are Going To Start With Addition!"
            },
            {
                numbers:"",
                text:"Since The Rules We Established Before We Are Going To Start Small"
            },
            {
                numbers:"",
                text:"Your Mission is To Be Able To Perform 1 Digit Addition under **1 SEC**"
            },
            {
                numbers:"",
                text:"**Practice Makes Perfect**",
                link:"train?digit1=1&digit2=1&op=0&number=10"
            }
        ],
        type:"lesson",
    },
    {
        content:[
            {
                question: "3 + 4",
                choices: ["7", "8", "5", "4"].sort(() => Math.random() - 0.5),
                answer: "7",
                type: 0,
            },
            {
                question: "4 + 4",
                choices: ["7", "8", "5", "4"].sort(() => Math.random() - 0.5),
                answer: "8",
                type: 0,
            },
            {
                question: "5 + 4",
                choices: ["7", "8", "10", "9"].sort(() => Math.random() - 0.5),
                answer: "9",
                type: 0,
            },
            {
                question: "5 + 6",
                choices: ["7", "8", "10", "11"].sort(() => Math.random() - 0.5),
                answer: "11",
                type: 0,
            },
            {
                question: "3 + 4",
                choices: ["7", "8", "10", "11"].sort(() => Math.random() - 0.5),
                answer: "7",
                type: 0,
            },
            {
                question: "5 + 6",
                choices: ["7", "8", "10", "11"].sort(() => Math.random() - 0.5),
                answer: "11",
                type: 0,
            },
            {
                question: "9 + 6",
                choices: ["15", "8", "10", "11"].sort(() => Math.random() - 0.5),
                answer: "15",
                type: 0,
            },
            {
                question: "9 + 7",
                choices: ["15", "16", "10", "11"].sort(() => Math.random() - 0.5),
                answer: "16",
                type: 0,
            },
            {
                question: "8 + 7",
                choices: ["15", "16", "10", "11"].sort(() => Math.random() - 0.5),
                answer: "15",
                type: 0,
            },
            {
                question: "8 + 9",
                choices: ["17", "16", "10", "11"].sort(() => Math.random() - 0.5),
                answer: "17",
                type: 0,
            },
        ],
        type:"practice",

    },
    // 2 digits add
    {
        content:[
            {
                numbers:"",
                text:"Next We Are Going To Increase The Size",
            },
            {
                numbers:"",
                text:"In 2 Digits Addition The Optimal Way Is **Distribution**"
            },
            {
                numbers:"47 + 32",
                text:"In This Question We Need to **Distribute** The Numbers Into (40 + 30) + (7 + 3), I Think This Is Easy Enough",
                answer: {
                    choices: ["67" , "73" , "77" , "63"],
                    answer:"77"
                }
            },
            {
                numbers:"67 + 28",
                text:"This One Is A Little Harder Since It Contain Carrying But We Still Use The Same Method (60 + 20) + (7 + 8)",
                answer: {
                    choices: ["95" , "75" , "72" , "93"],
                    answer:"95"
                }
            },
            {
                numbers:"",
                text:"**Practice Makes Perfect** Seriously",
                link:"train?digit1=2&digit2=2&op=0&number=10"
            }
        ],
        type:"lesson",
    },
    {
        content:[
            {
                question: "47 + 29",
                choices: ["76", "75", "82", "72"].sort(() => Math.random() - 0.5),
                answer: "76",
                type: 0,
            },
            {
                question: "68 + 45",
                choices: ["110", "113", "111", "112"].sort(() => Math.random() - 0.5),
                answer: "113",
                type: 0,
            },
            {
                question: "52 + 38",
                choices: ["90", "91", "89", "92"].sort(() => Math.random() - 0.5),
                answer: "90",
                type: 0,
            },
            {
                question: "73 + 24",
                choices: ["97", "98", "99", "100"].sort(() => Math.random() - 0.5),
                answer: "97",
                type: 0,
            },
            {
                question: "81 + 36",
                choices: ["115", "116", "117", "118"].sort(() => Math.random() - 0.5),
                answer: "117",
                type: 0,
            },
            {
                question: "59 + 28",
                choices: ["85", "86", "87", "88"].sort(() => Math.random() - 0.5),
                answer: "87",
                type: 0,
            },
            {
                question: "64 + 19",
                choices: ["82", "83", "84", "85"].sort(() => Math.random() - 0.5),
                answer: "83",
                type: 0,
            },
            {
                question: "91 + 33",
                choices: ["123", "124", "125", "126"].sort(() => Math.random() - 0.5),
                answer: "124",
                type: 0,
            },
            {
                question: "45 + 27",
                choices: ["71", "72", "73", "74"].sort(() => Math.random() - 0.5),
                answer: "72",
                type: 0,
            },
            {
                question: "37 + 48",
                choices: ["84", "85", "86", "87"].sort(() => Math.random() - 0.5),
                answer: "85",
                type: 0,
            }
        ],
        type:"practice",
    },
    // 3 digits addition
    {
        content:[
            {
                numbers:"",
                text:"In 3 Digits Addition , We Are Going to Divide it Into 1 digit addition and 2 digit addition which is easiar"
            },
            {
                numbers:"583 + 327",
                text:"Here We Are Going To **Divide** Them Into (500 + 300) + (80 + 20) + (3 + 7) Which Is 910"
            },
            {
                numbers:"759 + 496",
                text:"Solve This Now(Target Time 5s)",
                answer: {
                    choices:["1255" , "1355" , "1235" , "1055"],
                    answer:"1255"
                }
            }
        ],
        type:"lesson",
    },
    {
        content:[
            {
                question: "145 + 237",
                choices: ["382", "384", "375", "383"].sort(() => Math.random() - 0.5),
                answer: "382",
                type: 0,
            },
            {
                question: "568 + 432",
                choices: ["1000", "999", "1001", "998"].sort(() => Math.random() - 0.5),
                answer: "1000",
                type: 0,
            },
            {
                question: "723 + 486",
                choices: ["1209", "1207", "1208", "1206"].sort(() => Math.random() - 0.5),
                answer: "1209",
                type: 0,
            },
            {
                question: "859 + 141",
                choices: ["998", "1000", "999", "1001"].sort(() => Math.random() - 0.5),
                answer: "1000",
                type: 0,
            },
            {
                question: "332 + 781",
                choices: ["1113", "1112", "1114", "1115"].sort(() => Math.random() - 0.5),
                answer: "1113",
                type: 0,
            },

        ],
        type:"practice",
    },
    // Subtraction without borrowing
    {
        content:[
            {
                numbers:"",
                text:"When Solving Subtraction Problems That doesnt have borrowing We Can Use The Same Method As Addition(**Left To Right Approach**)"
            },
            {
                numbers:"86 - 25",
                text:"In This Question (Which Doesnt Need Borrowing) We Can Distribute It To Be (80 - 20) + (6 - 5) = 61"
            }
        ],
        type:"lesson",
    },
    {
        content:[
            {
                question: "72 - 31",
                choices: ["41", "42", "43", "40"].sort(() => Math.random() - 0.5),
                answer: "41",
                type: 1,
            },
            {
                question: "156 - 42",
                choices: ["114", "115", "116", "113"].sort(() => Math.random() - 0.5),
                answer: "114",
                type: 1,
            },
            {
                question: "384 - 242",
                choices: ["142", "141", "143", "140"].sort(() => Math.random() - 0.5),
                answer: "142",
                type: 1,
            },
            {
                question: "253 - 132",
                choices: ["121", "122", "120", "119"].sort(() => Math.random() - 0.5),
                answer: "121",
                type: 1,
            },
            {
                question: "689 - 452",
                choices: ["237", "238", "236", "239"].sort(() => Math.random() - 0.5),
                answer: "237",
                type: 1,
            },
            {
                question: "512 - 230",
                choices: ["282", "283", "281", "280"].sort(() => Math.random() - 0.5),
                answer: "282",
                type: 1,
            },
            {
                question: "945 - 432",
                choices: ["513", "514", "512", "515"].sort(() => Math.random() - 0.5),
                answer: "513",
                type: 1,
            },
            {
                question: "623 - 114",
                choices: ["509", "508", "510", "511"].sort(() => Math.random() - 0.5),
                answer: "509",
                type: 1,
            },
            {
                question: "783 - 221",
                choices: ["562", "563", "561", "560"].sort(() => Math.random() - 0.5),
                answer: "562",
                type: 1,
            },
            {
                question: "871 - 645",
                choices: ["226", "227", "225", "228"].sort(() => Math.random() - 0.5),
                answer: "226",
                type: 1,
            },

        ],
        type:"practice",
    },
    // subtraction with borrowing
    {
        content:[
            {
                numbers:"",
                text:"Before Going Into Subtraction With Borrowing You need To Master Complement To 100"
            }
        ],
        type:"lesson",
    },
    {
        content:[
            {
                question: "Complement of 243 to the nearest 100",
                choices: ["57", "58", "59", "60"].sort(() => Math.random() - 0.5),
                answer: "57",
                type: 1,
            },
            {
                question: "Complement of 378 to the nearest 100",
                choices: ["22", "23", "24", "25"].sort(() => Math.random() - 0.5),
                answer: "22",
                type: 1,
            },
            {
                question: "Complement of 651 to the nearest 100",
                choices: ["49", "50", "51", "48"].sort(() => Math.random() - 0.5),
                answer: "49",
                type: 1,
            },
            {
                question: "Complement of 823 to the nearest 100",
                choices: ["77", "78", "79", "80"].sort(() => Math.random() - 0.5),
                answer: "77",
                type: 1,
            },
            {
                question: "Complement of 174 to the nearest 100",
                choices: ["26", "27", "28", "25"].sort(() => Math.random() - 0.5),
                answer: "26",
                type: 1,
            },
            {
                question: "Complement of 689 to the nearest 100",
                choices: ["11", "12", "10", "13"].sort(() => Math.random() - 0.5),
                answer: "11",
                type: 1,
            },
            {
                question: "Complement of 439 to the nearest 100",
                choices: ["61", "62", "63", "64"].sort(() => Math.random() - 0.5),
                answer: "61",
                type: 1,
            },
            {
                question: "Complement of 157 to the nearest 100",
                choices: ["43", "42", "41", "44"].sort(() => Math.random() - 0.5),
                answer: "43",
                type: 1,
            },
            {
                question: "Complement of 295 to the nearest 100",
                choices: ["5", "6", "7", "4"].sort(() => Math.random() - 0.5),
                answer: "5",
                type: 1,
            },
            {
                question: "Complement of 512 to the nearest 100",
                choices: ["88", "89", "90", "91"].sort(() => Math.random() - 0.5),
                answer: "88",
                type: 1,
            },

        ],
        type:"lesson",
    },
    {
        content:[

        ],
        type:"lesson",
    },
    {
        content:[

        ],
        type:"lesson",
    },
    {
        content:[

        ],
        type:"lesson",
    },
    {
        content:[

        ],
        type:"lesson",
    },
]