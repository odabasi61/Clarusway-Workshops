let counter = 0;

$(document).bind("mousewheel", function (event) {
  if (event.originalEvent.wheelDelta > 0) {
    counter += 10;
    $(".gallery-box-outer").css({
      transform:
        "perspective(100rem) rotateX(-8deg) rotateY(" + counter + "deg)",
    });
  } else {
    counter -= 10;
    $(".gallery-box-outer").css({
      transform:
        "perspective(100rem) rotateX(-8deg) rotateY(" + counter + "deg)",
    });
  }
});
