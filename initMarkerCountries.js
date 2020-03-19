function initMarker(inputLat, inputLng) {
    var uluru = {
        lat: inputLat,
        lng: inputLng
    };

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the ' +
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
        'south west of the nearest large town, Alice Springs; 450&#160;km ' +
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
        'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        'Aboriginal people of the area. It has many springs, waterholes, ' +
        'rock caves and ancient paintings. Uluru is listed as a World ' +
        'Heritage Site.</p>' +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
        '(last visited June 22, 2009).</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    function retreiveLocation() {
        var lat = [];
        var lng = [];
        $.ajax({
            type: "Get",
            url: "https://corona.lmao.ninja/countries",
            dataType: "json",
            success: function (data) {
                
                $.each(data, function (key, val) {
                   // items[0] = data[0].key;
                  //  items[1] = data[0].val;
					//console.log(items[0]+"\n\n\n");
					//console.log(items[1]+"\n\n\n");
					alert(key[0]);
					//alert(data);
                //    items.push('<li id="' + key + '">' + val + '</li>');
                });
            },
            error: function () {
                alert("json not found");
            }
        });
        // var geocoder =  new google.maps.Geocoder();
        // geocoder.geocode( { 'address': /*$('#county').val()*/}, function(results, status) {
        //       if (status == google.maps.GeocoderStatus.OK) {
        //         $('.push-down').text("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
        //       } else {
        //         $('.push-down').text("Something got wrong " + status);
        //       }
        //     });

    };


    // $(function () {
    //     $('#clickme').click(function () {
    //         $.ajax({
    //             url: 'data19.json',
    //             dataType: 'json',
    //             success: function (data) {
    //                 var items = [];

    //                 $.each(data, function (key, val) {

    //                     items.push('<li id="' + key + '">' + val + '</li>');

    //                 });

    //                 $('<ul/>', {
    //                     'class': 'interest-list',
    //                     html: items.join('')
    //                 }).appendTo('body');

    //             },
    //             statusCode: {
    //                 404: function () {
    //                     alert('There was a problem with the server.  Try again soon!');
    //                 }
    //             }
    //         });
    //     });
    // });

}