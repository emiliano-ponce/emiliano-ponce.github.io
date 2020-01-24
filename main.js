$(function() {
    $("button.toggle").click(function() {
        $("div.content").fadeToggle(600)
        $(this).text(
          $(this).text() === "Buy Now"
            ? "Close"
            : "Buy Now"
        );
    })
})

