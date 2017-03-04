/**
 * Created by IG03022 on 2/7/2017.
 */
$(document).ready(function(){
    //append correct countyId to URL
    function getCountyId(){
        // var countyId = $('#txtInput').val();
        if (countyId < 10){
            countyId = '00' + countyId;
        } else if (10 <= countyId < 100) {
            countyId = '0' + countyId;
        }
        return url = 'http://igprww652/PublicWebServices/api/v1/AssessorAndTrustees/' + countyId;
    }

    //on click load JSON data to handlebars template
    $('#searchButton').click(function(){
        console.log('hi');
        $('#handleContent').empty();
        $.ajax({
            type: 'GET',
            url: getCountyId(),
            dataType: 'JSON',
            data: 'json',
            success: function(data){

                var source = $("#myTemplate").html();
                var template = Handlebars.getTemplate('template1');
                var html = template({
                    apidata: data

                });
                $('#handleContent').html(html);
            }
        });
    });


    //load external handlebars templates
    Handlebars.getTemplate = function(name) {
        if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
            $.ajax({
                url :  'bower_components/' + name + '.handlebars',
                success : function(data) {
                    if (Handlebars.templates === undefined) {
                        Handlebars.templates = {};
                    }
                    Handlebars.templates[name] = Handlebars.compile(data);
                },
                async : false
            });
        }
        return Handlebars.templates[name];
    };

});