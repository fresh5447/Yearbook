var DATA = {
  bytes: [1123, 43534, 42234, 5345234, 12312312, 213123],
  students: [
    { name: "Mitchell Wieland", photo: "https://img.buzzfeed.com/buzzfeed-static/static/2017-02/9/11/asset/buzzfeed-prod-web-09/sub-buzz-17136-1486657825-1.jpg?resize=625:417", quote: "Remember to always be yourself."},
    { name: "Alexandra Vu", photo: "http://combiboilersleeds.com/images/person/person-5.jpg", quote: "You miss 100% of the shots you dont take."},
    { name: "Ethan Smith", photo: "http://img.huffingtonpost.com/asset/scalefit_630_noupscale/58259cd5180000290030d628.jpeg?cache=pjsemd54kk", quote: "If idiots could fly, this place would be an airport"},
    { name: "Roshan McGuiness", photo: "http://www.horsesforsources.com/wp-content/uploads/2011/12/Mr_Passion.png", quote: "If you like water, you already like 72% of me."},
    { name: "Alixandra Garcia", photo: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/contributor/2015/6/4/1433410115681/Carole-Cadwalladr-L.png?w=300&q=55&auto=format&usm=12&fit=max&s=c29febace2fdd42840fb58c97d3f43ce", quote: "I don't always graduate, but when I do, it's barely."},
    { name: "Christopher Gaylord", photo: "http://www.burnpit.us/sites/burnpit/files/blog-image/Leatherby.jpg", quote: "Yes, that is actually my last name."},
    { name: "Carlos Carlos", photo: "http://photos1.blogger.com/blogger/1696/694/320/roberts_hearings_091505_kirsanow.jpg", quote: "I hate my name."},
    { name: "Billy Ray", photo: "http://wp.production.patheos.com/blogs/christophers/files/2013/11/FrJonathan-2-e1384802359476.jpeg", quote: "I cheated an all of my exams."},
    { name: "Katniss Everdeen", photo: "http://cdn0.dailydot.com/cache/6d/c4/6dc41fedda8ccffef409d0ad2562c393.jpg", quote: "Im actually not funny, I'm just really mean and people think Im joking"}
  ]
};

var studentsArray = DATA.students

var app = new Vue({
  'el': '#app',
  data: {
    student: studentsArray[0]
  }
});
