/**
 * Created by IG03022 on 1/4/2017.
 */
var counties = [
    { value: 'Anderson', data: 1 },
    // ...
    { value: 'Bedford', data: 2 },

    { value: 'Benton', data: 3 },

    { value: 'Bledsoe', data: 4 },

    { value: 'Blount', data: 5 },

    { value: 'Bradley', data: 6 },

    { value: 'Campbell', data: 7 },

    { value: 'Cannon', data: 8 },

    { value: 'Carroll', data: 9 },

    { value: 'Carter', data: 10 },

    { value: 'Cheatham', data: 11 },

    { value: 'Chester', data: 12 },

    { value: 'Claiborne', data: 13 },

    { value: 'Clay', data: 14 },

    { value: 'Cocke', data: 15 },

    { value: 'Coffee', data: 16 },

    { value: 'Crockett', data: 17 },

    { value: 'Cumberland', data: 18 },

    { value: 'Davidson', data: 19 },

    { value: 'Decatur', data: 20 },

    { value: 'DeKalb', data: 21 },

    { value: 'Dickson', data: 22 },

    { value: 'Dyer', data: 23 },

    { value: 'Fayette', data: 24 },

    { value: 'Fentress', data: 25 },

    { value: 'Franklin', data: 26 },

    { value: 'Gibson', data: 27 },

    { value: 'Giles', data: 28 },

    { value: 'Grainger', data: 29 },

    { value: 'Greene', data: 30 },

    { value: 'Grundy', data: 31 },

    { value: 'Hamblen', data: 32 },

    { value: 'Hamilton', data: 33 },

    { value: 'Hancock', data: 34 },

    { value: 'Hardeman', data: 35 },

    { value: 'Hardin', data: 36 },

    { value: 'Hawkins', data: 37 },

    { value: 'Haywood', data: 38 },

    { value: 'Henderson', data: 39 },

    { value: 'Henry', data: 40 },

    { value: 'Hickman', data: 41 },

    { value: 'Houston', data: 42 },

    { value: 'Humphreys', data: 43 },

    { value: 'Jackson', data: 44},

    { value: 'Jefferson', data: 45 },

    { value: 'Johnson', data: 46 },

    { value: 'Knox', data: 47 },

    { value: 'Lake', data: 48 },

    { value: 'Lauderdale', data: 49 },

    { value: 'Lawrence', data: 50 },

    { value: 'Lewis', data: 51},

    { value: 'Lincoln', data: 52 },

    { value: 'Loudon', data: 53 },

    { value: 'Macon', data: 54 },

    { value: 'Madison', data: 55 },

    { value: 'Madison', data: 56 },

    { value: 'Marion', data: 57 },

    { value: 'Marshall', data: 58 },

    { value: 'Maury', data: 59 },

    { value: 'McMinn', data: 60 },

    { value: 'McNairy', data: 61 },

    { value: 'Meigs', data: 62 },

    { value: 'Monroe', data: 63 },

    { value: 'Montgomery', data: 64 },

    { value: 'Moore', data: 65 },

    { value: 'Morgan', data: 66 },

    { value: 'Obion', data: 67 },

    { value: 'Overton', data: 68},

    { value: 'Perry', data: 69 },

    { value: 'Pickett', data: 70 },

    { value: 'Polk', data: 71 },

    { value: 'Putnam', data: 72 },

    { value: 'Rhea', data: 73 },

    { value: 'Roane', data: 74 },

    { value: 'Robertson', data: 75 },

    { value: 'Rutherford', data: 76 },

    { value: 'Scott', data: 77 },

    { value: 'Sequatchie', data: 78 },

    { value: 'Sevier', data: 79 },

    { value: 'Shelby', data: 80 },

    { value: 'Smith', data: 81 },

    { value: 'Stewart', data: 82 },

    { value: 'Sullivan', data: 83 },

    { value: 'Sumner', data: 84 },

    { value: 'Tipton', data: 85 },

    { value: 'Trousdale', data: 86 },

    { value: 'Unicoi', data: 87 },

    { value: 'Union', data: 88 },

    { value: 'Van Buren', data: 89 },

    { value: 'Warren', data: 90 },

    { value: 'Washington', data: 91 },

    { value: 'Wayne', data: 92 },

    { value: 'Weakley', data: 93 },

    { value: 'White', data: 94 },

    { value: 'Williamson', data: 95 },

    { value: 'Wilson', data: 96 }
];

//AutoComplete
$('#autocomplete').autocomplete({
    lookup: counties,
    onSelect: function (suggestion) {
         countyId = suggestion.data;
         console.log(countyId);
    }

});

