// para saber que icono debe estar en movimiento
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {});
});


$('.modal').modal();
var seccionActual = $("#yo-img");

function cambioDeSeccion(cambioSeccion) {
  seccionActual.removeClass("animated infinite jello");
  seccionActual = cambioSeccion;
  seccionActual.addClass("animated infinite jello");
};

// para cargar la sección yo al iniciar 
cambioDeSeccion(seccionActual);
$.get("./yo.html", function (data) {
  $("#contenido-principal").html(data);
});

$(".footer-icon").hover(
  function () {
    $(this).addClass("animated wobble");
  }, function () {
    $(this).removeClass("animated wobble");
  }
);

$(".btn-nav").hover(
  function () {
    $(this).addClass("animated pulse");
  }, function () {
    $(this).removeClass("animated pulse");
  }
);

$("#portafolio").click(function () {
  cambioDeSeccion($("#estudios-img"));
  $.get("./portafolio.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#yo").click(function () {
  cambioDeSeccion($("#yo-img"));
  $.get("./yo.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#ingeniero").click(function () {
  cambioDeSeccion($("#ingeniero-img"));
  $.get("./ingeniero.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#desarrollador").click(function () {
  cambioDeSeccion($("#desarrollador-img"));
  $.get("./desarrollador.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#competencias").click(function () {
  cambioDeSeccion($("#competencias-img"));
  $.get("./competencias.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#experiencia").click(function () {
  cambioDeSeccion($("#experiencia-img"));
  $.get("./experiencia.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

