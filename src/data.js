const quizQuestions = [
    {
      state: "California",
      choices: ["Sacramento", "Los Angeles", "San Francisco", "San Diego"],
      correctAnswer: "Sacramento"
    },
    {
      state: "Texas",
      choices: ["Austin", "Dallas", "Houston", "San Antonio"],
      correctAnswer: "Austin"
    },
    {
      state: "Florida",
      choices: ["Tallahassee", "Miami", "Orlando", "Jacksonville"],
      correctAnswer: "Tallahassee"
    },
    {
      state: "New York",
      choices: ["Albany", "New York City", "Buffalo", "Rochester"],
      correctAnswer: "Albany"
    },
    {
      state: "Illinois",
      choices: ["Springfield", "Chicago", "Peoria", "Rockford"],
      correctAnswer: "Springfield"
    },
    {
      state: "Pennsylvania",
      choices: ["Harrisburg", "Philadelphia", "Pittsburgh", "Scranton"],
      correctAnswer: "Harrisburg"
    },
    {
      state: "Ohio",
      choices: ["Columbus", "Cleveland", "Cincinnati", "Dayton"],
      correctAnswer: "Columbus"
    },
    {
      state: "Georgia",
      choices: ["Atlanta", "Savannah", "Augusta", "Macon"],
      correctAnswer: "Atlanta"
    },
    {
      state: "Michigan",
      choices: ["Lansing", "Detroit", "Grand Rapids", "Ann Arbor"],
      correctAnswer: "Lansing"
    },
    {
      state: "North Carolina",
      choices: ["Raleigh", "Charlotte", "Greensboro", "Durham"],
      correctAnswer: "Raleigh"
    },
    {
      state: "New Jersey",
      choices: ["Trenton", "Newark", "Jersey City", "Paterson"],
      correctAnswer: "Trenton"
    },
    {
      state: "Washington",
      choices: ["Olympia", "Seattle", "Tacoma", "Spokane"],
      correctAnswer: "Olympia"
    },
    {
      state: "Arizona",
      choices: ["Phoenix", "Tucson", "Mesa", "Scottsdale"],
      correctAnswer: "Phoenix"
    },
    {
      state: "Massachusetts",
      choices: ["Boston", "Worcester", "Springfield", "Cambridge"],
      correctAnswer: "Boston"
    },
    {
      state: "Virginia",
      choices: ["Richmond", "Virginia Beach", "Norfolk", "Alexandria"],
      correctAnswer: "Richmond"
    },
    {
      state: "Indiana",
      choices: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"],
      correctAnswer: "Indianapolis"
    },
    {
      state: "Tennessee",
      choices: ["Nashville", "Memphis", "Knoxville", "Chattanooga"],
      correctAnswer: "Nashville"
    },
    {
      state: "Missouri",
      choices: ["Jefferson City", "Kansas City", "St. Louis", "Springfield"],
      correctAnswer: "Jefferson City"
    },
    {
      state: "Maryland",
      choices: ["Annapolis", "Baltimore", "Rockville", "Frederick"],
      correctAnswer: "Annapolis"
    },
    {
      state: "Wisconsin",
      choices: ["Madison", "Milwaukee", "Green Bay", "Kenosha"],
      correctAnswer: "Madison"
    },
    {
      state: "Colorado",
      choices: ["Denver", "Colorado Springs", "Aurora", "Fort Collins"],
      correctAnswer: "Denver"
    },
    {
      state: "Minnesota",
      choices: ["Saint Paul", "Minneapolis", "Rochester", "Duluth"],
      correctAnswer: "Saint Paul"
    },
    {
      state: "South Carolina",
      choices: ["Columbia", "Charleston", "Greenville", "Myrtle Beach"],
      correctAnswer: "Columbia"
    },
    {
      state: "Alabama",
      choices: ["Montgomery", "Birmingham", "Mobile", "Huntsville"],
      correctAnswer: "Montgomery"
    },
    {
      state: "Louisiana",
      choices: ["Baton Rouge", "New Orleans", "Shreveport", "Lafayette"],
      correctAnswer: "Baton Rouge"
    },
    {
      state: "Kentucky",
      choices: ["Frankfort", "Louisville", "Lexington", "Bowling Green"],
      correctAnswer: "Frankfort"
    },
    {
      state: "Oregon",
      choices: ["Salem", "Portland", "Eugene", "Gresham"],
      correctAnswer: "Salem"
    },
    {
      state: "Oklahoma",
      choices: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"],
      correctAnswer: "Oklahoma City"
    },
    {
      state: "Connecticut",
      choices: ["Hartford", "Bridgeport", "New Haven", "Stamford"],
      correctAnswer: "Hartford"
    },
    {
      state: "Iowa",
      choices: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"],
      correctAnswer: "Des Moines"
    },
    {
      state: "Idaho",
      choices: ["Boise", "Nampa", "Meridian", "Idaho Falls"],
      correctAnswer: "Boise"
    },
    {
      state: "New Mexico",
      choices: ["Santa Fe", "Albuquerque", "Las Cruces", "Rio Rancho"],
      correctAnswer: "Santa Fe"
    },
    {
      state: "Nebraska",
      choices: ["Lincoln", "Omaha", "Bellevue", "Grand Island"],
      correctAnswer: "Lincoln"
    },
    {
      state: "West Virginia",
      choices: ["Charleston", "Huntington", "Morgantown", "Parkersburg"],
      correctAnswer: "Charleston"
    },
    {
      state: "Rhode Island",
      choices: ["Providence", "Warwick", "Cranston", "Pawtucket"],
      correctAnswer: "Providence"
    },
    {
      state: "Montana",
      choices: ["Helena", "Billings", "Missoula", "Great Falls"],
      correctAnswer: "Helena"
    },
    {
      state: "Delaware",
      choices: ["Dover", "Wilmington", "Newark", "Middletown"],
      correctAnswer: "Dover"
    },
    {
      state: "South Dakota",
      choices: ["Pierre", "Sioux Falls", "Rapid City", "Aberdeen"],
      correctAnswer: "Pierre"
    },
    {
      state: "North Dakota",
      choices: ["Bismarck", "Fargo", "Grand Forks", "Minot"],
      correctAnswer: "Bismarck"
    },
    {
      state: "Alaska",
      choices: ["Juneau", "Anchorage", "Fairbanks", "Sitka"],
      correctAnswer: "Juneau"
    },
    {
      state: "Vermont",
      choices: ["Montpelier", "Burlington", "Rutland", "Essex"],
      correctAnswer: "Montpelier"
    },
    {
      state: "Wyoming",
      choices: ["Cheyenne", "Casper", "Laramie", "Gillette"],
      correctAnswer: "Cheyenne"
    },
    {
      state: "Maine",
      choices: ["Augusta", "Portland", "Lewiston", "Bangor"],
      correctAnswer: "Augusta"
    },
    {
      state: "New Hampshire",
      choices: ["Concord", "Manchester", "Nashua", "Dover"],
      correctAnswer: "Concord"
    },
    {
      state: "Hawaii",
      choices: ["Honolulu", "Hilo", "Kailua", "Pearl City"],
      correctAnswer: "Honolulu"
    },
    {
        state: "Mississippi",
        choices: ["Jackson", "Biloxi", "Gulfport", "Hattiesburg"],
        correctAnswer: "Jackson"
    },
    {
        state: "Arkansas",
        choices: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale"],
        correctAnswer: "Little Rock"
    },
    {
        state: "Kansas",
        choices: ["Topeka", "Wichita", "Overland Park", "Kansas City"],
        correctAnswer: "Topeka"
    },
    {
        state: "Utah",
        choices: ["Salt Lake City", "West Valley City", "Provo", "Orem"],
        correctAnswer: "Salt Lake City"
    },
    {
        state: "Nevada",
        choices: ["Carson City", "Las Vegas", "Henderson", "Reno"],
        correctAnswer: "Carson City"
    }
  ];
  
  export default quizQuestions;
  