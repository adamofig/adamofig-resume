// para saber que icono debe estar en movimiento
$('.modal').modal();
var seccionActual = $("#yo-img");

function cambioDeSeccion(cambioSeccion) {
  seccionActual.removeClass("animated infinite jello");
  seccionActual = cambioSeccion;
  seccionActual.addClass("animated infinite jello");
};

// para cargar la sección yo al iniciar 
cambioDeSeccion(seccionActual);
$.get("contenido/yo.html", function (data) {
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

$("#estudios").click(function () {
  cambioDeSeccion($("#estudios-img"));
  $.get("contenido/estudios.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#yo").click(function () {
  cambioDeSeccion($("#yo-img"));
  $.get("contenido/yo.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#ingeniero").click(function () {
  cambioDeSeccion($("#ingeniero-img"));
  $.get("contenido/ingeniero.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#desarrollador").click(function () {
  cambioDeSeccion($("#desarrollador-img"));
  $.get("contenido/desarrollador.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#competencias").click(function () {
  cambioDeSeccion($("#competencias-img"));
  $.get("contenido/competencias.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#experiencia").click(function () {
  cambioDeSeccion($("#experiencia-img"));
  $.get("contenido/experiencia.html", function (data) {
    $("#contenido-principal").html(data);
  });
});

$("#portafolio").click(function () {
  cambioDeSeccion($("#portafolio-img"));
  $.get("contenido/portafolio.html", function (data) {
    $("#contenido-principal").html(data);
  });
});