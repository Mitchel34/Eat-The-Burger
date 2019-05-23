$("form").on("submit",function(event){
event.preventDefault();
var input = $("input").val().trim();
$.ajax({
    url: "/api/burgers",
    method: "POST",
    data: {burger_name: input, devoured: 0}
})
location.reload();
});

$(".devourBtn").click(function(){
$.ajax({
    url: "/api/burgers/" + $(this).attr("data-id"),
    method: "PUT"
}).then(function(res){
    location.reload();
})
})