//back-end
function Ticket(movie,age,time){
  this.ticketMovie=movie;
  this.ticketAge=age;
  this.ticketTime=time;
};
Ticket.prototype.price=function(){
  if(this.ticketMovie === "romance" && this.ticketAge === "youth" && this.ticketTime === "morning"){
    return "50ksh";
  }
  else if(this.ticketMovie === "romance" && this.ticketAge === "young" && this.ticketTime ==="morning"){
    return "20ksh";
  }
  else if(this.ticketMovie === "romance" && this.ticketAge === "old" && this.ticketTime ==="morning"){
    return "70ksh";
  }
  else if(this.ticketMovie === "action" && this.ticketAge === "youth" && this.ticketTime === "morning"){
    return "55ksh";
  }
  else if(this.ticketMovie === "action" && this.ticketAge === "young" && this.ticketTime ==="morning"){
    return "20ksh";
  }
  else if(this.ticketMovie === "action" && this.ticketAge === "old" && this.ticketTime ==="morning"){
    return "90ksh";
  }
  else if(this.ticketMovie === "series" && this.ticketAge === "youth" && this.ticketTime === "morning"){
    return "70ksh";
  }
  else if(this.ticketMovie === "series" && this.ticketAge === "young" && this.ticketTime ==="morning"){
    return "50ksh";
  }
  else if(this.ticketMovie === "series" && this.ticketAge === "old" && this.ticketTime ==="morning"){
    return "100ksh";
  }
  else if(this.ticketMovie === "fiction" && this.ticketAge === "youth" && this.ticketTime === "morning"){
    return "55ksh";
  }
  else if(this.ticketMovie === "fiction" && this.ticketAge === "young" && this.ticketTime ==="morning"){
    return "20ksh";
  }
  else if(this.ticketMovie === "fiction" && this.ticketAge === "old" && this.ticketTime ==="morning"){
    return "90ksh";
  }
  else if(this.ticketMovie === "romance" && this.ticketAge === "youth" && this.ticketTime === "afternoon"){
    return "50ksh";
  }
  else if(this.ticketMovie === "romance" && this.ticketAge === "young" && this.ticketTime ==="afternoon"){
    return "20ksh";
  }
  else if(this.ticketMovie === "romance" && this.ticketAge === "old" && this.ticketTime ==="afternoon"){
    return "70ksh";
  }
  else if(this.ticketMovie === "action" && this.ticketAge === "youth" && this.ticketTime === "afternoon"){
    return "55ksh";
  }
  else if(this.ticketMovie === "action" && this.ticketAge === "young" && this.ticketTime ==="afternoon"){
    return "20ksh";
  }
  else if(this.ticketMovie === "action" && this.ticketAge === "old" && this.ticketTime ==="afternoon"){
    return "90ksh";
  }
  else if(this.ticketMovie === "series" && this.ticketAge === "youth" && this.ticketTime === "afternoon"){
    return "70ksh";
  }
  else if(this.ticketMovie === "series" && this.ticketAge === "young" && this.ticketTime ==="afternoon"){
    return "50ksh";
  }
  else if(this.ticketMovie === "series" && this.ticketAge === "old" && this.ticketTime ==="afternoon"){
    return "100ksh";
  }
  else if(this.ticketMovie === "fiction" && this.ticketAge === "youth" && this.ticketTime === "afternoon"){
    return "55ksh";
  }
  else if(this.ticketMovie === "fiction" && this.ticketAge === "young" && this.ticketTime ==="afternoon"){
    return "20ksh";
  }
  else if(this.ticketMovie === "fiction" && this.ticketAge === "old" && this.ticketTime ==="afternoon"){
    return "90ksh";
  }
  else if(this.ticketMovie === "romance" && this.ticketAge === "youth" && this.ticketTime === "night"){
    return "150ksh";
  }
  else if(this.ticketMovie === "romance" && this.ticketAge === "young" && this.ticketTime ==="night"){
    return "100ksh";
  }
  else if(this.ticketMovie === "romance" && this.ticketAge === "old" && this.ticketTime ==="night"){
    return "200ksh";
  }
  else if(this.ticketMovie === "action" && this.ticketAge === "youth" && this.ticketTime === "night"){
    return "70ksh";
  }
  else if(this.ticketMovie === "action" && this.ticketAge === "young" && this.ticketTime ==="night"){
    return "50ksh";
  }
  else if(this.ticketMovie === "action" && this.ticketAge === "old" && this.ticketTime ==="night"){
    return "130ksh";
  }
  else if(this.ticketMovie === "series" && this.ticketAge === "youth" && this.ticketTime === "night"){
    return "170ksh";
  }
  else if(this.ticketMovie === "series" && this.ticketAge === "young" && this.ticketTime ==="night"){
    return "150ksh";
  }
  else if(this.ticketMovie === "series" && this.ticketAge === "old" && this.ticketTime ==="night"){
    return "200ksh";
  }
  else if(this.ticketMovie === "fiction" && this.ticketAge === "youth" && this.ticketTime === "night"){
    return "70ksh";
  }
  else if(this.ticketMovie === "fiction" && this.ticketAge === "young" && this.ticketTime ==="night"){
    return "40ksh";
  }
  else if(this.ticketMovie === "fiction" && this.ticketAge === "old" && this.ticketTime ==="night"){
    return "135ksh";
  }
  else{
    return "choose a movie....";
  }
};
//user interface
$(document).ready(function(){
  $("form#movieticket").submit(function(event){
    event.preventDefault();
    $("li.remove").remove();
    var inputtedMovie = $("select#type").val();
    var inputtedAge = $("select#Age").val();
    var inputtedTime = $("select#time").val();
    var newTicket=new Ticket(inputtedMovie,inputtedAge,inputtedTime);
    $("ul#priceTicket").append("<li class='remove'>" + newTicket.price() + "</li>");
    $("form#movieticket")[0].reset();
  });
});
