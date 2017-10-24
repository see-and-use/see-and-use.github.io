var GM = {
    init: function () {
        this.initCache();
        this.initMap();
    },

    initCache: function() {
        this.$body         = $('body');
        this.$popupContent = $('.js-marker-content');
        
    },
    initMap: function () {
        var coordinates = {lat: 50.521838, lng: 30.466952},
            popupContent = this.$popupContent.html(),
            zoom = zoom,

            map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: 17,
                disableDefaultUI: false,
                scrollwheel: true
            }),

            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
            });

    }
};

$(document).ready(function() {
    GM.init();
});
