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
            name: "เหวี่ยง ซบ พบ(รัก)เธอ [Yaoi]",
            category: [{ name: "นิยายวาย" },{ name: "BL" }],
            detail: "คุณเคยหลับบนรถเมล์บ้างมั้ย? และคุณเคยหลับแล้วซบคนที่นั่งข้างคุณบ้างหรือเปล่า? แล้วคุณ...เคยโดนคนที่คุณซบเหวี่ยงหมัดกลับมาบ้างมั้ย?",
            allViewers: 11901063,
            rating: { allScore: 78900, count: 9000 },
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
            name: "WAR มหาวิทยาลัยการสงคราม",
            category: [{ name: "แฟนตาซี" },{ name: "สงคราม" }],
            detail: "ชายหนุ่มติงต๊องเจ้าแผนการจับคู่กับอาวุธสุดซาดิสม์แถมพลพรรคจอมหาเรื่องอีกเป็นโขยง ในการผจญภัยที่แสดงให้เห็นว่าสงคราม มีอะไรมากกว่าคำว่าฆ่า..มั้ง",
            allViewers: 11157750,
            rating: { allScore: 69804, count: 7500 },
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
            name: "สุดใจปรารถนา",
            category: [{ name: "ซึ้งกินใจ" }],
            detail: "วิญญาณของหญิงสาววัยสิบแปด ต้องเข้ามาอยู่ในร่างของหญิงสาวที่กำลังจะหย่ากับสามี แถมตั้งครรภ์ได้สองเดือน เธอจึงต้องรับบท 'แม่' และ 'เมีย' โดยไม่ตั้งใจ...",
            allViewers: 7991460,
            rating: { allScore: 3500, count: 400 },
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
            name: "Farnese Chronicle [ฟาร์เนเซ่ โครนิเคิล ภาค เวทยาลัยแห่งอาร์คาเดีย]",
            category: [{ name: "แฟนตาซี" },{ name: "โรงเรียน" },{ name: "เวทมนตร์" }],
            detail: "ในดินแดนที่จอมเวทแห่งธาตุดินน้ำลมไฟต้องใช้เวทเพื่อปลูกผักซักผ้าทำกับข้าวมากกว่าการต่อสู้ ไอ้หนุ่มบ้านนอกสุดเฉิ่มต้องพบว่าตนเองมีความสามารถในการใช้เวทมนตร์ แต่ดั๊นเป็นธาตุที่ผ่าเหล่าผ่ากอกว่าใครอื่น ชีวิตของเขาจะเป็นอย่างไรต่อไปกันนะ...",
            allViewers: 7702209,
            rating: { allScore: 8009, count: 895 },
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
            _id: "n5id",
            name: "[[เมื่อผมรับบทเป็น นางร้าย]] (Yaoi)",
            category: [{ name: "นิยายวาย" },{ name: "รัก" },{ name: "เลิก" },{ name: "แค้น" }],
            detail: "เราเลิกกันเถอะ คำๆนี้ทำให้บังเกิดนิยายนี้ขึ้น บอกได้คำเดี่ยวว่า'แรง' ชีกกฏหนังและนิยายไทย ที่นายเอกต้องโดนรังแกเพียงแต่อย่างเดี่ยว เรื่องนี้ นายเอก 'ร้าย'ได้ใจทุกคนแน่นอน รับประกัน>",
            allViewers: 2645521,
            rating: { allScore: 4857, count: 512 },
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
            _id: "n6id",
            name: "พรางรัก (the end)",
            category: [{ name: "ซึ้งกินใจ" },{ name: "ดราม่า" },{ name: "แก้แค้น" }],
            detail: "ค่าตัวเธอ...คงพอค่าแท็กซี่กลับบ้านนะ เหลือก็ถือว่าฉันทิป...ไม่พอใจ?...น้อยไปเหรอ?...อันที่จริง เธอก็ไม่ต่างกับแท็กซี่เท่าไหร่หรอก ให้คนเขา ขี่ เพื่อไปถึงจุดหมาย ค่าโดยสารก็น่าจะพอๆ กัน",
            allViewers: 2728545,
            rating: { allScore: 1021, count: 141 },
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
            _id: "n7id",
            name: "Adventure World Online",
            category: [{ name: "เกมออนไลน์" },{ name: "adventure" }],
            detail: "ชาง สาวสวยที่สุดแสนจะเบื่อหน่ายกับการถูกตามตื้อให้ไปเป็นนายแบบ!! เธอได้พบกับเกมออนไลน์ที่ชื่อว่า Adventure World Online และได้ลองตัดสินใจเล่นดูเพื่อฆ่าเวลา มาเอาใจช่วยมือใหม่หัดเล่นเกมกันนะ",
            allViewers: 2817090,
            rating: { allScore: 11408, count: 192 },
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
            _id: "n8id",
            name: "เรื่องเล่า(ผี) 100 เรื่อง",
            category: [{ name: "ระทึกขวัญ/ผี" }],
            detail: "เรื่องผีร้อยเรื่อง คือการเล่าเรื่องผีร้อยเรื่อง เมื่อเล่าจบก็ดับเทียนทีละเล่ม ละเล่ม... เมื่อเทียนดับครบ 100เล่ม เหตุการณ์บางอย่างจะเกิดขึ้น ซึ่ง...เรื่องนี้ได้กลับมากอีกครั้งกับเด็กสาวโรงเรียนสตรี",
            allViewers: 2907803,
            rating: { allScore: 4588, count: 634 },
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
            _id: "n9id",
            name: "รอยเสน่หา(Ebook พร้อมโหลด)",
            category: [{ name: "รักดราม่า" }],
            detail: "เขาเคยผิดหวังในรัก ส่วนเธอก็อกหักเพราะรักเขา แต่พอเธอทำใจได้ เขาดันอยากกลับเข้ามาในชีวิตเธอซะงั้น",
            allViewers: 3201841,
            rating: { allScore: 2640, count: 300 },
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
            _id: "n10id",
            name: "ในฤทัยจอมแก่น",
            category: [{ name: "อดีต ปัจจุบัน อนาคต" },{ name: "ย้อนอดีต" },{ name: "กาลเวลา" }],
            detail: "แค่เขาเจอหน้าเธอครั้งแรกก็สั่ง ตัดแขน ตัดขา แถมด้วยควักลูกตา เนื้อตัวเธอสั่นสะท้าน รับไม่ได้ โหดร้าย ใจทมิฬที่สุด แต่เอาน่า ไหนๆก็ ย้อนเวลามาแบบแปลกๆ (?) แล้ว คนอย่างเธอต้องเอาชีวิตรอดให้ถึงที่สุดซิ!",
            allViewers: 3885015,
            rating: { allScore: 1479, count: 200 },
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
            _id: "n11id",
            name: "ลำนำ เทพอสูร",
            category: [{ name: "กำลังภายใน" },{ name: "ต่อสู้" },{ name: "จีน" }],
            detail: "เรื่องราวของ วิญญาณหนุ่มที่อยู่ในร่างเด็ก และใช้สติปัญญาที่มีในการท่องเที่ยวไปในยุทธภพ พบทั้งรัก เศร้า",
            allViewers: 7205663,
            rating: { allScore: 6643, count: 800 },
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