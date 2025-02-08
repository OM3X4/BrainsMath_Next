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
    // complement
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
                question: "Complement of 243",
                choices: ["57", "58", "59", "60"].sort(() => Math.random() - 0.5),
                answer: "57",
                type: 1,
            },
            {
                question: "Complement of 378",
                choices: ["22", "23", "24", "25"].sort(() => Math.random() - 0.5),
                answer: "22",
                type: 1,
            },
            {
                question: "Complement of 651",
                choices: ["49", "50", "51", "48"].sort(() => Math.random() - 0.5),
                answer: "49",
                type: 1,
            },
            {
                question: "Complement of 823",
                choices: ["77", "78", "79", "80"].sort(() => Math.random() - 0.5),
                answer: "77",
                type: 1,
            },
            {
                question: "Complement of 174",
                choices: ["26", "27", "28", "25"].sort(() => Math.random() - 0.5),
                answer: "26",
                type: 1,
            },
            {
                question: "Complement of 689",
                choices: ["11", "12", "10", "13"].sort(() => Math.random() - 0.5),
                answer: "11",
                type: 1,
            },
            {
                question: "Complement of 439",
                choices: ["61", "62", "63", "64"].sort(() => Math.random() - 0.5),
                answer: "61",
                type: 1,
            },
            {
                question: "Complement of 157",
                choices: ["43", "42", "41", "44"].sort(() => Math.random() - 0.5),
                answer: "43",
                type: 1,
            },
            {
                question: "Complement of 295",
                choices: ["5", "6", "7", "4"].sort(() => Math.random() - 0.5),
                answer: "5",
                type: 1,
            },
            {
                question: "Complement of 512",
                choices: ["88", "89", "90", "91"].sort(() => Math.random() - 0.5),
                answer: "88",
                type: 1,
            },

        ],
        type:"practice",
    },
    // subtracting with borrowing
    {
        content:[
            {
                numbers:"81 - 27",
                text:"Since (7 > 1) We Need To Borrow Which Sadely is Resources Expensive , So We Are Going To Use Another Technique"
            },
            {
                numbers:"81 - 27",
                text:"We Can Complement The Smaller Number Into The Nearest Ten(or Hundered), Like 81 - 27 = 81 - 30 + 3 , Looks Easier"
            },
            {
                numbers:"73 - 37",
                text:"Solve This!",
                answer:{
                    choices:["36" , "39" , "26" , "29"],
                    answer:"36"
                }
            },
            {
                numbers:"",
                text:"Practice Makes Perfect! Again",
                link:"train?digit1=2&digit2=2&op=1&number=10"
            }
        ],
        type:"lesson",
    },
    {
        content:[
            {
                question: "72 - 46",
                choices: ["26", "27", "25", "28"].sort(() => Math.random() - 0.5),
                answer: "26",
                type: 1,
            },
            {
                question: "81 - 47",
                choices: ["34", "35", "33", "36"].sort(() => Math.random() - 0.5),
                answer: "34",
                type: 1,
            },
            {
                question: "152 - 78",
                choices: ["74", "75", "76", "73"].sort(() => Math.random() - 0.5),
                answer: "74",
                type: 1,
            },
            {
                question: "105 - 67",
                choices: ["38", "39", "37", "40"].sort(() => Math.random() - 0.5),
                answer: "38",
                type: 1,
            },
            {
                question: "213 - 98",
                choices: ["115", "116", "117", "114"].sort(() => Math.random() - 0.5),
                answer: "115",
                type: 1,
            },
            {
                question: "94 - 57",
                choices: ["37", "38", "36", "39"].sort(() => Math.random() - 0.5),
                answer: "37",
                type: 1,
            },
            {
                question: "176 - 89",
                choices: ["87", "88", "86", "85"].sort(() => Math.random() - 0.5),
                answer: "87",
                type: 1,
            },
            {
                question: "134 - 68",
                choices: ["66", "67", "65", "64"].sort(() => Math.random() - 0.5),
                answer: "66",
                type: 1,
            },
            {
                question: "203 - 77",
                choices: ["126", "127", "125", "124"].sort(() => Math.random() - 0.5),
                answer: "126",
                type: 1,
            },
            {
                question: "157 - 69",
                choices: ["88", "89", "87", "86"].sort(() => Math.random() - 0.5),
                answer: "88",
                type: 1,
            }
        ],
        type:"practice",
    },
    // multiplication 1 digit times 2 digits
    {
        content:[
            {
                numbers:"",
                text:"Multiplying 1 digit times 2 digits Is Considered The Smallest Block Which We Will Start With"
            },
            {
                numbers:"4 × 23",
                text: "We Can Distribute This Problem Into (4 × 20) + (4 × 3) , Easy Right If You Can Do This Under 2 Seconds (Which Is Easy With A little Bit Of Training) You Would Master Every Multiplication Problem So Easily"
            },
            {
                numbers:"7 × 18",
                text:"Solve This Please",
                answer:{
                    choices:["136" , "126" , "122" , "132"],
                    answer:"126"
                }
            }
        ],
        type:"lesson",
    },
    {
        content:[
            {
                question: "7 × 14",
                choices: ["98", "97", "99", "96"].sort(() => Math.random() - 0.5),
                answer: "98",
                type: 2,
            },
            {
                question: "3 × 26",
                choices: ["78", "79", "77", "80"].sort(() => Math.random() - 0.5),
                answer: "78",
                type: 2,
            },
            {
                question: "5 × 19",
                choices: ["95", "96", "94", "93"].sort(() => Math.random() - 0.5),
                answer: "95",
                type: 2,
            },
            {
                question: "9 × 12",
                choices: ["108", "109", "107", "106"].sort(() => Math.random() - 0.5),
                answer: "108",
                type: 2,
            },
            {
                question: "8 × 17",
                choices: ["136", "135", "137", "138"].sort(() => Math.random() - 0.5),
                answer: "136",
                type: 2,
            },
            {
                question: "4 × 23",
                choices: ["92", "91", "93", "90"].sort(() => Math.random() - 0.5),
                answer: "92",
                type: 2,
            },
            {
                question: "6 × 15",
                choices: ["90", "91", "89", "88"].sort(() => Math.random() - 0.5),
                answer: "90",
                type: 2,
            },
            {
                question: "2 × 34",
                choices: ["68", "69", "67", "66"].sort(() => Math.random() - 0.5),
                answer: "68",
                type: 2,
            },
            {
                question: "9 × 24",
                choices: ["99", "98", "100", "97"].sort(() => Math.random() - 0.5),
                answer: "99",
                type: 2,
            },
            {
                question: "7 × 32",
                choices: ["126", "127", "125", "124"].sort(() => Math.random() - 0.5),
                answer: "126",
                type: 2,
            }
        ],
        type:"pracice",
    },
    // multiplication 1 digit times 3 digits
    {
        content:[
            {
                numbers:"",
                text:"1 digit Times 3 Digits Is The Same Idea As 1 Digit Times 2 Digits"
            },
            {
                numbers:"6 × 378",
                text:"Solve This",
                answer:{
                    choices:["2286" , "2276" , "2067" , "1886"],
                    answer:"2286"
                }
            },
            {
                numbers:"",
                text:"Go On"
            }
        ],
        type:"lesson",
    },
    {
        content:[
            {
                question: "7 × 123",
                choices: ["861", "862", "860", "859"].sort(() => Math.random() - 0.5),
                answer: "861",
                type: 2,
            },
            {
                question: "5 × 204",
                choices: ["1020", "1021", "1019", "1018"].sort(() => Math.random() - 0.5),
                answer: "1020",
                type: 2,
            },
            {
                question: "9 × 137",
                choices: ["1233", "1234", "1232", "1231"].sort(() => Math.random() - 0.5),
                answer: "1233",
                type: 2,
            },
            {
                question: "6 × 251",
                choices: ["1506", "1507", "1505", "1504"].sort(() => Math.random() - 0.5),
                answer: "1506",
                type: 2,
            },
            {
                question: "3 × 408",
                choices: ["1224", "1225", "1223", "1222"].sort(() => Math.random() - 0.5),
                answer: "1224",
                type: 2,
            },
            {
                question: "8 × 175",
                choices: ["1400", "1401", "1399", "1398"].sort(() => Math.random() - 0.5),
                answer: "1400",
                type: 2,
            },
            {
                question: "2 × 316",
                choices: ["632", "633", "631", "630"].sort(() => Math.random() - 0.5),
                answer: "632",
                type: 2,
            },
            {
                question: "4 × 227",
                choices: ["908", "909", "907", "906"].sort(() => Math.random() - 0.5),
                answer: "908",
                type: 2,
            },
            {
                question: "7 × 198",
                choices: ["1386", "1387", "1385", "1384"].sort(() => Math.random() - 0.5),
                answer: "1386",
                type: 2,
            },
            {
                question: "9 × 125",
                choices: ["1125", "1126", "1124", "1123"].sort(() => Math.random() - 0.5),
                answer: "1125",
                type: 2,
            }
        ],
        type:"practice",
    },
    // squaring 2 digits numbers
    {
        content:[
            {
                numbers:"22²",
                text:"From Here It Gets **Interesting**"
            },
            {
                numbers:"22²",
                text:"There Is A Math Equation That Says A² = (A - d)(A + d) + d²"
            },
            {
                numbers:"22²",
                text:"We Are Going To Use This Rule To Turn This Squaring Problem Into 1 digit times 2 digits problem"
            },
            {
                numbers:"22²",
                text:"We Can Assume That (d) is The difference Between The Number and the Nearest Ten (in Our Case 2)"
            },
            {
                numbers:"22²",
                text:"Therefore 22² = (22 - 2)(22 + 2) + 2² = (20 × 24) + 4"
            },
            {
                numbers:"(20 × 24) + 4",
                text:"This Is Simpley 1 digit Times 2 Digits Problem With Attaching 0 To The Result as 2 × 24 = 48 Then add 0 it is 480 Then add The 4 it 484"
            },
            {
                numbers:"88²",
                text:"In This Case 88² = (88 - 2)(88 + 2) + 4 = (90 × 86) + 4 = 7744"
            },
            {
                numbers:"35²",
                text:"If The Number End in 5 We Get The First Digit Multiply It With Next Number and Attach 25 To The Result , 1225"
            },


        ],
        type:"lesson",
    },
    {
        content:[
            {
                question: "37²",
                choices: ["1369", "1368", "1370", "1371"].sort(() => Math.random() - 0.5),
                answer: "1369",
                type: 3,
            },
            {
                question: "58²",
                choices: ["3364", "3365", "3363", "3362"].sort(() => Math.random() - 0.5),
                answer: "3364",
                type: 3,
            },
            {
                question: "73²",
                choices: ["5329", "5330", "5328", "5327"].sort(() => Math.random() - 0.5),
                answer: "5329",
                type: 3,
            },
            {
                question: "91²",
                choices: ["8281", "8282", "8280", "8279"].sort(() => Math.random() - 0.5),
                answer: "8281",
                type: 3,
            },
            {
                question: "46²",
                choices: ["2116", "2117", "2115", "2114"].sort(() => Math.random() - 0.5),
                answer: "2116",
                type: 3,
            },
            {
                question: "67²",
                choices: ["4489", "4490", "4488", "4487"].sort(() => Math.random() - 0.5),
                answer: "4489",
                type: 3,
            },
            {
                question: "82²",
                choices: ["6724", "6725", "6723", "6722"].sort(() => Math.random() - 0.5),
                answer: "6724",
                type: 3,
            },
            {
                question: "94²",
                choices: ["8836", "8837", "8835", "8834"].sort(() => Math.random() - 0.5),
                answer: "8836",
                type: 3,
            },
            {
                question: "53²",
                choices: ["2809", "2810", "2808", "2807"].sort(() => Math.random() - 0.5),
                answer: "2809",
                type: 3,
            },
            {
                question: "77²",
                choices: ["5929", "5930", "5928", "5927"].sort(() => Math.random() - 0.5),
                answer: "5929",
                type: 3,
            }
        ],
        type:"practice",
    },
    // squaring 3 digits numbers
    {
        content:[
            {
                numbers:"",
                text:"When Squaring 3 digits numbers We Are Going To nest The Last Technique"
            },
            {
                numbers:"467²",
                text:"467² = 500 × 434 + 33² = (500 × 434) + (30 × 36) + 3²"
            },
            {
                numbers:"(500 × 434) + (30 × 36) + 3²",
                text:"Looks Horrible I know But If You Think About it it is 3 digits times 1 digits  and 2 digits times 1 digit"
            },
            {
                numbers:"217000 + 1180 + 9",
                text:"which is Equal To 218089 , Imagine Solving It Mentally Without This Method"
            }
        ],
        type:"lesson",
    },
    {
        content:[
            {
                question: "103²",
                choices: ["10609", "10608", "10610", "10611"].sort(() => Math.random() - 0.5),
                answer: "10609",
                type: 3,
            },
            {
                question: "217²",
                choices: ["47089", "47088", "47090", "47091"].sort(() => Math.random() - 0.5),
                answer: "47089",
                type: 3,
            },
            {
                question: "326²",
                choices: ["106276", "106275", "106277", "106278"].sort(() => Math.random() - 0.5),
                answer: "106276",
                type: 3,
            },
            {
                question: "451²",
                choices: ["203401", "203400", "203402", "203403"].sort(() => Math.random() - 0.5),
                answer: "203401",
                type: 3,
            },
            {
                question: "519²",
                choices: ["269361", "269360", "269362", "269363"].sort(() => Math.random() - 0.5),
                answer: "269361",
                type: 3,
            },
            {
                question: "624²",
                choices: ["389376", "389375", "389377", "389378"].sort(() => Math.random() - 0.5),
                answer: "389376",
                type: 3,
            },
            {
                question: "732²",
                choices: ["535824", "535823", "535825", "535826"].sort(() => Math.random() - 0.5),
                answer: "535824",
                type: 3,
            },
            {
                question: "845²",
                choices: ["714025", "714024", "714026", "714027"].sort(() => Math.random() - 0.5),
                answer: "714025",
                type: 3,
            },
            {
                question: "956²",
                choices: ["913936", "913935", "913937", "913938"].sort(() => Math.random() - 0.5),
                answer: "913936",
                type: 3,
            },
            {
                question: "999²",
                choices: ["998001", "998000", "998002", "998003"].sort(() => Math.random() - 0.5),
                answer: "998001",
                type: 3,
            }
        ],
        type:"lesson",
    },
]