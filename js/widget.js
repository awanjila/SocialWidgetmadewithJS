$(document).ready(function () {
        var currentIndex = 0;
        var items = $('#widgetBtn .carousel div');
        var totalItems = items.length;

        function showItem(index) {
            items.hide();
            items.eq(index).show();
        }

        function nextItem() {
            currentIndex = (currentIndex + 1) % totalItems;
            showItem(currentIndex);
        }

        // Set initial position and show the first item
        showItem(currentIndex);

        // Change slide every 2 seconds
        setInterval(nextItem, 2000);

        // Toggle the widget modal when the button is clicked
        $('#widgetBtn').click(function () {
            $('#widgetModal').toggle();
        });

        // Toggle the callback modal when the button is clicked
        $('#callBackBtn').click(function () {
            $('#callBackModal').toggle();
        });

        // Close the callback modal when the form is submitted
        $('#callBackModal form').submit(function (e) {
            e.preventDefault();
            // Handle form submission logic here
            // Close the callback modal after handling the submission
            $('#callBackModal').hide();
        });
    });