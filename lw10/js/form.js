$(document).ready(function(){
    $('#form-submit').click(function() {

        var name = $('#form-name-field').val();
        var mail = $('#form-mail-field').val();
        var location = $('#form-location-field').val();
        var male = $('#form-male-field').val();
        var female = $('#form-female-field').val();
        var message = $('#form-message-field').val();

        $.post( "php/form.php", { name: name, mail: mail,
                            location: location, male: male, 
                            female: female, message: message });
        
    })
});