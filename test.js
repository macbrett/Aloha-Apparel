
console.log("hello")

$(function(){
    $('select').on('change', function(){

        var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
        url += '?' + $.param({
                'api-key': "133064f593064b5a9b82e24190084a92"
            });
        $.ajax({
            url: url,
            method: 'GET',
        })
            .done(function(data) {

                console.log(data.results[0])
            });
    });
});
