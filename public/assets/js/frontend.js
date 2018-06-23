$(function() {

    $('#signInBtn').on('click', (event) => {
        event.preventDefault();
        $.ajax('/signin', {
            type: 'GET',
            cache: false
        }).done((data) => {
            $('body').html(data);
        }).catch((err) => console.log(err));
    });

    $('#signUpBtn').on('click', (event) => {
        event.preventDefault();
        $.ajax('/signup', {
            type: 'GET',
            cache: false
        }).done((data) => {
            $('body').html(data);
        }).catch((err) => console.log(err));
    })



$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

$('.slider').slider();
$('select').formSelect();

    $.ajax({
        type: 'GET',
        url: "/api/budget",
    })
    .then(function(data) {
        $('#table') // append DATA to table
    })

    $('#budget_submit').on('click', function (event) {
        var postData = {
            description: $('#description').val(),
            cost: $('#price').val()
        };
        console.log(postData)
        $.ajax("/api/budget", {
            type: "POST",
            data: postData
        }).done(function(msg) {
            $('#description').val('');
            $('#price').val('');
            $('body').html(msg)
        })
    })
   
    $.ajax({
        type: 'GET',
        url: "/api/content",
    })
    .then(function(data) {
        $('#table') // append DATA to table
    })
    
    $('#activity_submit').on('click', function (event) {
        var postData = {
            categories: $('#category').val(),
            activity: $('#activity').val(),
            rating: $('#rating').val(),
            cost: $('#price').val()
        };
        console.log(postData)
        $.ajax("/api/content", {
            type: "POST",
            data: postData
        }).done(function(msg) {
            $('#category').val('');
            $('#activity').val('');
            $('#rating').val('');
            $('#price').val('');
            $('body').html(msg)
        })
    })
});
