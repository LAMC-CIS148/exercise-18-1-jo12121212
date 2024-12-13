$(document).ready(function () {
    // When a user clicks on a link inside the #image_list
    $("#image_list a").click(function (event) {
        event.preventDefault(); // Prevent the default link behavior


        // Get the href (the large image URL) of the clicked link
        const imageURL = $(this).attr("href");


        // Get the title attribute for the new image's description
        const title = $(this).attr("title") || "";


        // Swap the image
        $("main section p img").fadeOut(300, function () {
            $(this).attr("src", imageURL).fadeIn(300);
        });


        // Swap the heading text to match the image's title
        if (title) {
            $("main section h2").text(title);
        }
    });
});
