$(document).ready(function() {
    $('#add-btn').on('click', function() {
        var task = $('#task-input').val();
        if(task) {
            $('#task-list').append('<li><input type="checkbox">' + task + '<span class="delete">X</span></li>');
            $('#task-input').val("");
        }
    });

    // Added enter key support for better user experience
    $('#task-input').on('keypress', function(e) {
        if (e.which == 13) {
            $('#add-btn').click();
        }
    });

    $(document).on('click', '.delete', function() {
        // Added fadeout animation before removal
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });

    $(document).on('change', 'input[type="checkbox"]', function() {
        $(this).parent().toggleClass('completed');
    });
});
