$(document).ready(function() {
    $('.options').hide();
    
    // check yes/no form
    $('#single').on('click', function() {
        $('.options').hide();
    });
    
    // check multiple form
    // display multiple form options
    var input = "";
    $('#multiple').on('click', function() {
        $('.options').show();
        var choiceNumber = 2;
        
        input += '<li class="list">Choice #1';
        input += '<input type="text" name="choice" class="inputValue">';
        input += '</li>';
        input += '<li class="list">Choice #2';
        input += '<input type="text" name="choice" class="inputValue">';
        input += '</li>';
        $('.poll-list').append(input);
        
        // add choice
        $('#add').on('click', function(event) {
            event.preventDefault();
            choiceNumber++;
            var input = "";
            input += '<li class="list">Choice #' + choiceNumber;
            input += '<input type="text" name="choice" class="inputValue"><i class="icon delete fa fa-times-circle"></i>';
            input += '</li>';
            $('.poll-list').append(input);
        });
        
        // !! delete choice not working properly
        $('ol').on('click', '.delete', function() {
            $(this).closest('.list').remove();
            choiceNumber -= 1;
        });
    });
    
    // add new poll
    $('#addPollButton').on('click', function() {
        var value = $('#question').val();
        var output = "";
            output += '<div class="added-wrapper">';
            output += '<div class="added-spacing"></div>';
            output += '<div class="added-add-poll">';
            output += '<strong class="question appendHere">Question</strong>';
            output += '<input type="text" class="transparent-input input" disabled value="' + value + '"' + '>';
            output += '<i class="icon added-icon added-delete fa fa-times-circle"></i><i class="fa fa-pencil-square icon added-icon added-edit"></i><br class="editableHere">';
            output += '<div class="added-options">';
            output += '<strong class="answers">Answers:</strong>';
            output += '<ol class="added-poll-list">';
        if($('#single').is(':checked')) { 
            output += '<li class="added-list mustHide">Yes/No</li>';
            output += '<label for="added-single" class="makeVisible">';
            output += '<input type="radio" name="answer" id="added-single" class="radio-buttons">Yes/No form';
            output += ' </label>';
            output += '<br><label for="added-multiple" class="makeVisible">';
            output += '<input type="radio" name="answer" id="added-multiple" class="radio-buttons">Multiple choice form';
            output += ' </label>';
        }
        else if($('#multiple').is(':checked')) {
            $('.inputValue').each(function() {
                var value = $(this).val();
                output += '<li class="added-list mustHide">' + value + '</li>';
            });
            output += '<label for="added-single" class="makeVisible">';
            output += '<input type="radio" name="answer" id="added-single" class="radio-buttons">Yes/No form';
            output += ' </label>';
            output += '<br><label for="added-multiple" class="makeVisible">';
            output += '<input type="radio" name="answer" id="added-multiple" class="radio-buttons">Multiple choice form';
            output += ' </label>';
        }
            output += '</ol>';
            output += '<button type="button" id="editPoll" class="edit-button">Edit Poll</button>';
            output += '<a href="#" class="cancel">Cancel</a>';
            output += '</div>';
            output += '</div>';
            output += '<div class="added-spacing"></div>';
            output += '</div>';
        $('.wrapper').append(output);
        $('.edit-button').hide();
        $('.cancel').hide();
        $('.makeVisible').hide();
    })
    // delete added poll
    $('.wrapper').on('click', '.added-delete', function() {
        $(this).closest('.added-wrapper').remove();
    });
    
    // edit poll
    $('.wrapper').on('click', '.added-edit' , function() {
        $(this).closest('.added-add-poll').find('.transparent-input').removeClass('transparent-input').prop('disabled', false);
        $(this).closest('.added-add-poll').find('.mustHide').hide();
        $(this).closest('.added-add-poll').find('.makeVisible').show();
        $(this).closest('.added-add-poll').find('.edit-button').show();
        $(this).closest('.added-add-poll').find('.cancel').show();
        
        
        // !!!!
    $('#added-multiple').on('click', function() {
        var choiches = "";
        var newChoice = "";
        choiches += '<li class="choiceList">Choice #1';
        choiches += '<input type="text" name="choice" class="choiceInputValue">';
        choiches += '</li>';
        choiches += '<li class="choiceList">Choice #2';
        choiches += '<input type="text" name="choice" class="choiceInputValue">';
        choiches += '</li>';
        newChoice += '<a href="#" id="addChoice">+ Add new choice</a>';
        $('.added-poll-list').append(choiches);
        $('.added-poll-list').after(newChoice);
        
            // add new choice
            var number = 2;
            $('#addChoice').on('click', function(event) {
                event.preventDefault();
                var newchoice = "";
                number++;
                console.log(number);
                newchoice += '<li class="choiceList">Choice #' + number;
                newchoice += '<input type="text" name="choice" class="choiceInputValue"><i class="icon delete fa fa-times-circle"></i>';
                newchoice += '</li>';
                $('.added-poll-list').append(newchoice);
            });
    });
        
        //cancel button
        $('.wrapper').on('click', '.cancel', function(event) {
            event.preventDefault();
            $(this).closest('.added-add-poll').find('.input').addClass('transparent-input').prop('disabled', true);
            $(this).closest('.added-add-poll').find('.cancel').hide();
            $(this).closest('.added-add-poll').find('.edit-button').hide();
            $(this).closest('.added-add-poll').find('.mustHide').show();
        $(this).closest('.added-add-poll').find('.makeVisible').hide();
        });
    });
    
    
});