import { Content } from "next/font/google";

export const ProgressBase = [
    {
        name:"Introduction",
        lessons:[
            {
                index:0,
                name:"Introduction",
                img:"👋",
                targetSpeed:0,
                starsMap: [],
                link:"/lesson?index=0"
            }
        ]
    },
    {
        name:"Addition",
        lessons:[
            {
                index: 1,
                name: "1 Digit Addition",
                img: "1 + 2",
                targetSpeed:0,
                starsMap:[],
                link:"/lesson?index=1"
            },
            {
                index: 2,
                name: "1 Digit Addition Training",
                img: "🎯",
                targetSpeed:2,
                starsMap:[2 , 1.5 , 1],
                link:"train?digit1=1&digit2=1&op=0&number=10"
            },
            {
                index:3,
                name: "2 Digits Addition",
                img: "24 + 36",
                targetSpeed:0,
                starsMap:[],
                link:"/lesson?index=2"
            },
            {
                index:4,
                name: "2 Digits Addition Training",
                img: "🎯",
                targetSpeed:3,
                starsMap:[3 , 2 , 1],
                link:"/train?digit1=2&digit2=2&op=0&number=10"
            },
            {
                index:5,
                name: "3 Digits Addition",
                img: "234 + 789",
                targetSpeed:0,
                starsMap:[],
                link:"/lesson?index=3"
            },
            {
                index:6,
                name: "3 Digits Addition Training",
                img: "🎯",
                targetSpeed:5,
                starsMap:[5 , 4 , 3],
                link:"/train?digit1=3&digit2=3&op=0&number=10"
            },
        ]
    },
    {
        name:"Subtraction",
        lessons:[
            {
                index:7,
                name: "Subtraction Without Borrowing",
                img: "456 - 123",
                targetSpeed:0,
                starsMap:[],
                link:"/lesson?index=4"
            },
            {
                index:8,
                name: "Subtraction Without Borrowing Training",
                img: "🎯",
                targetSpeed:3,
                starsMap:[3 , 2 , 1],
                link:"/train?digit1=3&digit2=3&op=1&number=10"
            },
            {
                index:9,
                name: "Subtraction With Borrowing",
                img: "456 - 178",
                targetSpeed:0,
                starsMap:[0],
                link:"/lesson?index=6"
            },
            {
                index:10,
                name: "Subtraction With Borrowing Training",
                img: "🎯",
                targetSpeed:4,
                starsMap:[4 , 3 , 2],
                link:"/train?digit1=3&digit2=3&op=1&number=10" // need Editing
            },
        ]
    },
    {
        name:"Multiplication",
        lessons:[
            {
                index:11,
                name: "Multiply 1 Digit By 2 Digits",
                img: "6 × 27",
                targetSpeed:0,
                starsMap:[],
                link:"/lesson?index=6"
            },
            {
                index:12,
                name: "Multiply 1 Digit By 2 Digits Training",
                img: "🎯",
                targetSpeed:3,
                starsMap:[3 , 2 , 1.5],
                link:"/train?digit1=1&digit2=2&op=2&number=10"
            },
            {
                index:13,
                name: "Multiply 1 Digit By 3 Digits",
                img: "3 × 345",
                targetSpeed:0,
                starsMap:[],
                link:"/lesson?index=7"
            },
            {
                index:14,
                name: "Multiply 1 Digit By 3 Digits Training",
                img: "🎯",
                targetSpeed:4,
                starsMap:[4 , 3 , 2],
                link:"/train?digit1=1&digit2=3&op=2&number=10"
            },
        ]
    },
    {
        name:"Squaring",
        lessons:[
            {
                index:15,
                name: "Squaring 2 Digits Numbers",
                img: "87²",
                targetSpeed:0,
                starsMap:[],
                link:"/lesson?index=8"
            },
            {
                index:16,
                name: "Squaring 2 Digits Numbers Training",
                img: "🎯",
                targetSpeed:7,
                starsMap:[7 , 5 , 3],
                link:"/train?digit1=2&digit2=1&op=3&number=10"
            },
            {
                index:17,
                name: "Squaring 3 Digits Numbers",
                img: "345²",
                targetSpeed:0,
                starsMap:[],
                link:"/lesson?index=9"
            },
            {
                index:16,
                name: "Squaring 3 Digits Numbers Training",
                img: "🎯",
                targetSpeed:10,
                starsMap:[10 , 7 , 4],
                link:"/train?digit1=3&digit2=1&op=3&number=10"
            },
        ]
    }
]