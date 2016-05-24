// CLEAR FILE of unnecessary Comments onec done.
var formattedName = HTMLheaderName.replace("%data%","Montaque Brian Swanepoel");
var formattedRole = HTMLheaderRole.replace("%data%","Web Dev Enthusiast");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name": "Montaque Brian Swanepoel",
    "role": "Web Dev Enthusiast",
    "contact": {
        "email": "monty@montaque.co.za",
        "mobile": "+2774 148 7452",
        "github": "MontySeven",
        "twitter": "@monty8",
        "location": "Johannesburg"},
    "picture": "/monty.jpg",
    "welcome_msg": "Hello there People!",
    "skills": [
        "business", "polyphasic sleep", "html", "css", "javascript"]
}

var work = {
    "jobs": [
        {
            "employer": "CFO360",
            "title": "Founder",
            "dates": "2016-Present",
            "location": "Johannesburg",
            "description": "Modern Audit and Accounting Practice."
        },
        {
            "employer": "Bidvest Steiner",
            "title": "Regional Finance Manager",
            "dates": "2015-2016",
            "location": "Johannesburg",
            "description": "Regional Finance Manager over Largest Region - Region 1."
        }
    ]
};


var education = {
    "schools": [
    {
        "name": "Unisa",
        "location": "Pretoria",
        "degree": "Hon Accounting",
        "majors": ["Accounting"],
        "dates": "2007-2012",
        "url": "http://unisa.ac.za"
    },{
        "name": "SAICA",
        "location": "Johannesburg",
        "degree": "Chartered Accounting Board",
        "majors": ["Chartered Accounting"],
        "dates": "2013"
    }
    ],
    "Online Courses":[
    {
        "title": "Intro to Computer Science",
        "school": "Udacity",
        "dates": 2016,
        "url": "http://www.udacity.com/course/cs101"
    }]
};

var projects = {
    "project": [
{
        "title": "CFO360",
        "description": "Modern Audit and Accounting Practice",
        "dates": "2016-Present",
        'image': "images/cfo360.jpg"
    },
    {
        "title": "Taxaid",
        "description": "Online Automated Tax Assistance",
        "dates": "2016-Present",
        'image': "images/taxaid.png"
    }]
};


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (i=0; i < bio.skills.length; i++) {
        var skill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(skill);
    };
};

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var worklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var description = HTMLworkDescription.replace("%data%", work.jobs[job].description)
        $(".work-entry:last").append(employer + title + dates + worklocation + description);
    };
};

displayWork();

$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
};

projects.display = function(){
    for (project in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%", projects.project[project].title);
        var dates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
        var description = HTMLprojectDescription.replace("%data%", projects.project[project].description);
        var picture = HTMLprojectImage.replace("%data%", projects.project[project].image);
        $(".project-entry:last").append(title + dates + description + picture);
    }
};

projects.display();

$(".mapDiv").append(googleMap);

