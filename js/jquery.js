$(() => {
  $(".navbar_section").load("../components/navbar.html");
  $(".title_section").load("../components/title.html");
  $(".welcome_section").load("../components/welcome.html");
  $(".trust_section").load("../components/trust.html");
  $(".menu_section").load("../components/menu.html");
  $(".parallax_section").load("../components/parallax.html");
  $(".location_section").load("../components/location.html");
  $(".footer_section").load("../components/footer.html");
  AOS.init();

  /*  ANIMATIONS */
  function pizzaAnimation($class, $top, $effectIn, $effectOut) {
    const img = $($class);
    var scroll = $(window).scrollTop();
    if (scroll >= $top) return img.removeClass($effectOut).addClass($effectIn);
    return img.removeClass($effectIn).addClass($effectOut);
  }

  $(window).on("scroll", () => {
    pizzaAnimation(".pizza-menu-left", 1500, "roll-in-left", "roll-out-left");
    pizzaAnimation(
      ".pizza-menu-right",
      2200,
      "roll-in-right",
      "roll-out-right"
    );
  });
});
