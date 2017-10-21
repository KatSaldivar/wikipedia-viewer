$(document).ready(function() {
  
    $("#search").click(function(){
        var searchTerm = $("#searchTerm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
   
        $.ajax({
            type:"GET",
            url:url,
            async:false,
            dataType:"json",
            success:function(data){
                $("#output").html(" ");     //removes the results from a previous search

                for (i=0; i<data[1].length; i++){   //runs through the data to display results
                    $("#output").append("<li class='rounded'><a id='title' target='_blank' href= " + data[3][i] + ">" + data[1][i] + "</a> <p>" + data[2][i] + "</p></li>");
                }
                $("#searchTerm").val("");       //resets the search bar to empty placeholder
            },
            error:function(errorMessage){
                alert("Error");
            } 
        });
    });
  
    //search when you press enter
    $("#searchTerm").keypress(function(e){
        if(e.which==13){
            $("#search").click();
        }
    });
 
    //search for a random article on a button
    $("#random").on("click", function(){
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    });
});
//My solution was inspired by CodingTutorials360