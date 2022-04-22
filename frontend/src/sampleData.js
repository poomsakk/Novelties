const data = {
    Users: [
        {
            _id: "1",
            name: "reader1",
            email: "dsdds@dsadas",
            password: "dsdds",
            favorite: [{ _idNovel: "1546546546465" }, { _idNovel: "1546546546465" }],
            ownNovel: [{ orderId: '213123ds21321' }],
            coin: "500",
            rating: [{ novelId: "dsdsd", score: "3" }, { novelId: "dsdsdasd", score: "4.5" }]
        },
        {
            _id: "2",
            name: "reader2",
            email: "dsds@dsadas",
            password: "dsdds",
            favorite: [{ _idNovel: "1546546546465" }, { _idNovel: "15465465ds46465" }],
            ownNovel: [{ orderId: '21312321321' }],
            coin: "200",
            rating: [{ novelId: "dsdsd", score: "3" }, { novelId: "dsdsdasd", score: "4.5" }]
        },
        {
            _id: "3",
            name: "reader3",
            email: "dsdssad@dsadas",
            password: "dsdds",
            favorite: [{ _idNovel: "1546546546465" }, { _idNovel: "154654s6546465" }],
            ownNovel: [{ orderId: '2131232s1321' }],
            coin: "500",
            rating: [{ novelId: "dsdsd", score: "3" }, { novelId: "dsdsdasd", score: "4.5" }]
        }
    ],
    Novel: [
        {
            _id: "n1id",
            name: "N1name",
            category: [{ name: "adventure" }, { name: "adult" }],
            detail: "skadjkasjdkasdjksajdkasjdasd",
            allViewers: 4100000,
            rating: { allScore: 500, count: 20 },
            image: "../images/bookCover.jpg",
            allChapter: [
                { chapter: "1", name: "chap name1", detail: "dasdsadsadsadas", price: "400", viewers: "201" },
                { chapter: "2", name: "chap name2", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "3", name: "chap name3", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "4", name: "chap name4", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "5", name: "chap name5", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "6", name: "chap name6", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
            ]
        },
        {
            _id: "n2id",
            name: "N2name",
            category: [{ name: "adventure" }, { name: "adult" },{ name: "fantasy" }],
            detail: "skadjkasjdkasdjksajdkasjdasd",
            allViewers: 78500,
            rating: { allScore: 500, count: 20 },
            writerId: "sddsdadsds",
            image: "../images/bookCover.jpg",
            allChapter: [
                { chapter: "1", name: "chap name1", detail: "dasdsadsadsadas", viewers: "201" },
                { chapter: "2", name: "chap name2", detail: "dasdsdasdsaddsasadas", viewers: "201" },
                { chapter: "3", name: "chap name3", detail: "dassdsaadsadsasadas", viewers: "20" },
            ]
        },
        {
            _id: "n3id",
            name: "N3name",
            category: [{ name: "adventure" }, { name: "adult" }],
            detail: "skadjkasjdkasdjksajdkasjdasd",
            allViewers: 3500,
            rating: { allScore: 129, count: 20 },
            image: "../images/bookCover.jpg",
            allChapter: [
                { chapter: "1", name: "chap name1", detail: "dasdsadsadsadas", price: "400", viewers: "201" },
                { chapter: "2", name: "chap name2", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "3", name: "chap name3", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "4", name: "chap name4", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "5", name: "chap name5", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "6", name: "chap name6", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
            ]
        },
        {
            _id: "n4id",
            name: "N4name",
            category: [{ name: "adventure" }, { name: "adult" }],
            detail: "skadjkasjdkasdjksajdkasjdasd",
            allViewers: 38000,
            rating: { allScore: 500, count: 20 },
            image: "../images/bookCover.jpg",
            allChapter: [
                { chapter: "1", name: "chap name1", detail: "dasdsadsadsadas", price: "400", viewers: "201" },
                { chapter: "2", name: "chap name2", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "3", name: "chap name3", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "4", name: "chap name4", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "5", name: "chap name5", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
                { chapter: "6", name: "chap name6", detail: "dasdsdasdsaddsasadas", price: "400", viewers: "201" },
            ]
        }
    ],
    Writer: [
        {
            _id: "w1id",
            name: "dsadsadsa",
            ownNovel: [
                { novelId: 'n1id' },
                { novelId: 'n2id' },
            ],

        }
    ],
    OrderNovel: [
        {
            orderId: '21312321321',
            userId: "54564",
            novelId: "dsada",
            price: '200',
            buyDate: "d4554",
            expDate: "200220202-206560660"
        }
    ],
    OderCoin: [
        {
            userId: "1",
            coin: "300",
            date: '215155415',
            creditCartName: "dsds",
            creditCartNumber: "1111111111"
        },
        {
            userId: "1",
            coin: "200",
            date: '215155415',
            creditCartName: "dsds",
            creditCartNumber: "1111111111"
        },
        {
            userId: "2",
            coin: "600",
            date: '215155415',
            creditCartName: "dsds",
            creditCartNumber: "1111111111"
        }
    ]
};

export default data;