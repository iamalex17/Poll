$(document).ready(function() {
    $('.options').hide();
    $('#single').on('click', function() {
        $('.options').hide();
    });
    $('#multiple').on('click', function() {
        $('.options').show();
        var choiceNumber = 2;
        var input = "";
        input += '<li class="list">Choice #1';
        input += '<input type="text" name="choice" class="inputValue">';
        input += '</li>';
        input += '<li class="list">Choice #2';
        input += '<input type="text" name="choice" class="inputValue">';
        input += '</li>';
        $('.poll-list').append(input);
        $('#add').on('click', function(event) {
            event.preventDefault();
            choiceNumber++;
            var input = "";
            input += '<li class="list">Choice #' + choiceNumber;
            input += '<input type="text" name="choice" class="inputValue"><i class="icon delete fa fa-times-circle"></i>';
            input += '</li>';
            $('.poll-list').append(input);
        });
        $('ol').on('click', '.delete', function() {
            $(this).closest('.list').remove();
            choiceNumber -= 1;
        });
    });
    /*$('#buttonPoll').on('click', function() {
        var value = $('#question').val();
        var singleOutput = "";
        var multipleOutput = "";
        if($('#single').is(':checked')) { 
            singleOutput += '<div class="added-wrapper">';
            singleOutput += '<div class="added-spacing"></div>';
            singleOutput += '<div class="added-add-poll single-added-add-poll">';
            singleOutput += '<strong class="question appendHere">Question</strong>';
            singleOutput += '<input type="text" class="single-transparent-input input" disabled value="' + value + '"' + '>';
            singleOutput += '<i class="icon added-icon added-delete fa fa-times-circle"></i><i class="fa fa-pencil-square icon added-icon added-edit"></i><br class="editableHere">';
            singleOutput += '<label for="single" class="hidden"><br class="hidden">';
            singleOutput += '<strong class="answers hidden">Answers:</strong>';
            singleOutput += '<input type="radio" name="answer" class="radio-buttons hidden test">Yes/No form<br class="hidden">';
            singleOutput += '</label>';
            singleOutput += '<label for="multiple" class="hidden">';
            singleOutput += '<input type="radio" name="answer" class="radio-buttons hidden" value="multiple">Multiple choice form';
            singleOutput += '</label>';
            singleOutput += '<div class="single-added-options">';
            singleOutput += '<strong class="answers">Answers:</strong>';
            singleOutput += '<ol class="single-added-poll-list">';
            singleOutput += '<li class="added-list">Yes/No</li>';
            singleOutput += '</ol>';
            singleOutput += '<button type="button" id="editPoll" class="edit-button">Edit Poll</button>';
            singleOutput += '<a href="#" class="cancel">Cancel</a>';
            singleOutput += '</div>';
            singleOutput += '</div>';
            singleOutput += '<div class="added-spacing"></div>';
            singleOutput += '</div>';
            $('.wrapper').after(singleOutput);
            $('.added-wrapper').on('click', '.added-delete', function() {
                $(this).closest('.added-wrapper').remove();
            });
            $('.edit-button').hide();
            $('.cancel').hide();
            $('.hidden').hide();
            $('.added-wrapper').on('click', '.added-edit' , function() {
                $(this).closest('.single-added-add-poll').find('.single-transparent-input').removeClass('single-transparent-input').prop('disabled', false);
                $(this).closest('.single-added-add-poll').find('.answers').hide();
                $(this).closest('.single-added-add-poll').find('.hidden').show();
                $(this).closest('.single-added-add-poll').find('.single-added-poll-list').remove();
                $(this).closest('.single-added-add-poll').find('.edit-button').show();
                $(this).closest('.single-added-add-poll').find('.cancel').show();
                
            });
        }
        // aici vine introdus codul pt multiple
    });*/
});