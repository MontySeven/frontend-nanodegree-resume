var bio = {
    "name": "Montaque Brian Swanepoel",
    "role": "Web Dev Enthusiast",
    "contacts": [{
        "email": "monty@montaque.co.za",
        "mobile": "+2774 148 7452",
        "github": "MontySeven",
        "twitter": "@monty8",
        "location": "Johannesburg"}],
    "picture": "images/monty.jpg",
    "welcome_msg": "Constant student behaviour has now led to this.",
    "skills": [
        "business", "polyphasic sleep", "html", "css", "javascript"]
};

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
        "url": "https://www.udacity.com/course/cs101"
    }]
};

var projects = {
    "project": [
{
        "title": "CFO360",
        "description": "Modern Audit and Accounting Practice",
        'image': "images/cfo360.jpg",
        "dates": "2016-Present"
    },
    {
        "title": "Taxaid",
        "description": "Online Automated Tax Assistance",
        'image': "images/taxaid.png",
        "dates": "2016-Present"
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedImage = HTMLbioPic.replace("%data%",bio.picture);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcome_msg);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage).append(formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (skill=0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").prepend(formattedSkills);
    }

    for (contact=0; contact < bio.contacts.length; contact++){
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
        $("#topContacts").append(formattedGithub,formattedTwitter,formattedLocation);
        $("#footerContacts").append(formattedGithub,formattedTwitter,formattedLocation);
    }



};

education.display = function() {
    for (school=0; school < education.schools.length; school++){
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);

        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }
};

work.display = function displayWork() {
    for (job=0; job < work.jobs.length; job++){
        $("#workExperience").append(HTMLworkStart);

        var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var worklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(employer + title + dates + worklocation + description);
    }
};

projects.display = function(){
    for (project=0; project < projects.project.length; project++){
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%", projects.project[project].title);
        var dates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
        var description = HTMLprojectDescription.replace("%data%", projects.project[project].description);
        var picture = HTMLprojectImage.replace("%data%", projects.project[project].image);
        $(".project-entry:last").append(title + dates + picture + description);
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

