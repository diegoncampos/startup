$(document).ready(function(){

        $('#Hidden').fadeIn(3000, function(){
        	$('.alias').focus();
        });        

    });

$(document).ready(function(){
		
		$("#button").click( function()
           {
           	
			var msg = $.getJSON('http://bootcamp.aws.af.cm/welcome/' + document.getElementById('alias').value, function(datos){
				

					$( "#Hidden" ).after("<div style='color:peru;'>"+ datos.response + "</div><br>").ready(function(){

					 $('body').highlight(document.getElementById('alias').value);

					});


			     });
			
			msg.error(function(){

				$( "#Hidden" ).css("color", "red").after( "<p style='color:red'>Error! Check the url!</p>" + "<br>");

				});
            
            });
     });


	// Spotify
var searchAlbums = function (name) {
    		$.ajax({
        	url: 'https://api.spotify.com/v1/search',
        	type: "GET",
        	dataType: "json",
        	data: {
            	q: name,
           		 type: 'album'
        		  },
        		success: function (source) {
        			        			
        				for(items in source.albums.items){
        					$('#album').append("Album Name: " + source.albums.items[items].name + "<br>" 
        						+ "Type: " + source.albums.items[items].type + "<br>" 
        						+ "<a href='" + source.albums.items[items].external_urls.spotify + "'>Link</a><br><br>"
        						+ "<img src='" + source.albums.items[items].images[2].url +"' alt='No Image Found' height='100px' width='100px'><br>"        						
        						+ "__________________________________________<br>"        						
        						);
        				}


        			}, //close success
            	
        			
        		error: function(dato){
        			alert("Error!! Bad Spotify url");
        		    }	
    			});
		};


$(document).ready(function(){

		$("#buscar").click(function(){

			searchAlbums(document.getElementById('name').value);
		});
	});