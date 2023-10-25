$(function () {
  $(".add_tocart").on("click", function () {
    $("#side_slider").toggle("fast", function () {});
  });
});

$(document).ready(function () {
  $("#login").click(function (e) {
    $("html, body").animate({ scrollTop: 0 }, "normal");
    $(".login_form").css("display", "block");
    $("#page-mask").fadeIn("fast").css("display", "block");
  });
});

$(document).ready(function () {
  $("#page-mask").click(function (e) {
    $(".login_form").css("display", "none");
    $("#page-mask").css("display", "none");
  });
});
