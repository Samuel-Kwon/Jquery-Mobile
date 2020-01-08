function SKGetCurrentLocation(){
    x = navigator.geolocation;
    x.getCurrentPosition(success, failure)

    function success(position)
    {
        var myLat = position.coords.latitude;
        var myLong = position.coords.longitude;

        document.getElementById("SKLat").value = myLat;
        document.getElementById("SKLong").value = myLong;

        var coords = new google.maps.LatLng(myLat, myLong)

        var mapOption = {
            
            zoom:9,
            center: coords,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(document.getElementById("map"), mapOption);
        var marker = new google.maps.Marker({map:map, position:coords})
    }

    function failure(){}
}