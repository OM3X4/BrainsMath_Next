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
    // Doom Day
    {
        content: [
            {
                numbers: "",
                text: "Now We Are Going To Learn About **Doom's Day** Calculations!"
            },
            {
                numbers: "",
                text: "Doom's Day is a method to determine the day of the week for any given date. Let's break it down step by step."
            },
            {
                numbers: "",
                text: "4/4, 6/6, 8/8, 10/10, 12/12, 9/5, 5/9, 7/11, 11/7, 1/(3 or 4 for leap year), 2/(28 or 29), 3/14\nThese Dates Are The Same WeekDay For Every Year"
            },
            {
                numbers: "",
                text: "Next, let's learn how to find the **Doom's Day** for any year.\nThere is a cycle to know the Doom's Day of every first year of the century: **Friday ⇒ Wednesday ⇒ Tuesday ⇒ Sunday**. We start at 1800 (Friday)."
            },
            {
                numbers: "",
                text: "For example, we know that the Doom's Day in the year 2000 was **Tuesday**.\nEvery year, the Doom's Day increases by one. For leap years, it increases twice."
            },
            {
                numbers: "",
                text: "Let's take an example: To find the Doom's Day in the year 1963:\n1. The Doom's Day in 1900 was **Wednesday** (we know this).\n2. Add the year (63) + year / 4 (15) which is 78.\n3. Calculate 78 % 7 = 1, then add this to Wednesday to get **Thursday**."
            },
            {
                numbers: "",
                text: "From here, we can obtain the exact date by using the Doom's Days we memorized earlier.\nFinally, remember that years like 28, 56, and 84 of any century have the same Doom's Day as the first year of the century."
            },
            {
                numbers: "",
                text: "**Practice Makes Perfect**! Try calculating the Doom's Day for different years and dates.",
                link: "train?doomsday=1"
            }
        ],
        type: "lesson"
    }
]