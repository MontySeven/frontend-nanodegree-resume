var bio = {
    "name": "Montaque Brian Swanepoel",
    "role": "Web Dev Enthusiast",
    "contacts": {
        "email": "monty@montaque.co.za",
        "mobile": "+2774 148 7452",
        "github": "MontySeven",
        "twitter": "@monty8",
        "location": "Johannesburg"},
    "biopic": "images/monty.jpg",
    "welcomeMessage": "Constant student behaviour has now led to this.",
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
        "dates": "2013",
        "url": "http://www.saica.co.za"
    }
    ],
    "OnlineCourses":[
    {
        "title": "Intro to Computer Science",
        "school": "Udacity",
        "date": "2016-Current",
        "url": "https://www.udacity.com/course/cs101"
    }]
};

var projects = {
    "projects": [
{
        "title": "CFO360",
        "description": "Modern Audit and Accounting Practice",
        'images': ["images/cfo360.jpg"],
        "dates": "2016-Present"
    },
    {
        "title": "Taxaid",
        "description": "Online Automated Tax Assistance",
        'images': ["images/taxaid.png"],
        "dates": "2016-Present"
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage).append(formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (skill=0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").prepend(formattedSkills);
    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);

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

    };

    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[0].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[0].school);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[0].date);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.OnlineCourses[0].url);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);

};

work.display = function() {
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
    for (project=0; project < projects.projects.length; project++){
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var description = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        for (image=0; image < projects.projects[project].images.length; image++){
            var picture = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        }

        $(".project-entry:last").append(title + dates + description + picture);
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

