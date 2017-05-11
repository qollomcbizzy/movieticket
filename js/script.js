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
