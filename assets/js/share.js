// Functions for "HOME PAGE"
function shareIndexOnFacebook() {
  shareCurrentPageOnFB("Historias de la pandemia");
}

function shareIndexOnTwitter() {
  shareCurrentPageOnTW("Historias de la pandemia");
}

function shareIndexOnWhatsapp() {
  shareCurrentPageOnWS("Historias de la pandemia");
}

// Functions for "imprescindibles"
function shareImprescindiblesOnFacebook() {
  shareCurrentPageOnFB("Los imprescindibles");
}

function shareImprescindiblesOnTwitter() {
  shareCurrentPageOnTW("Los imprescindibles");
}

function shareImprescindiblesOnWhatsapp() {
  shareCurrentPageOnWS("Los imprescindibles");
}

// Functions for "inolvidables"
function shareInolvidablesOnFacebook() {
  shareCurrentPageOnFB("Los inolvidables");
}

function shareInolvidablesOnTwitter() {
  shareCurrentPageOnTW("Los inolvidables");
}

function shareInolvidablesOnWhatsapp() {
  shareCurrentPageOnWS("Los inolvidables");
}

// Functions for "resilientes"
function shareResilientesOnFacebook() {
  shareCurrentPageOnFB("Los resilientes");
}

function shareResilientesOnTwitter() {
  shareCurrentPageOnTW("Los resilientes");
}

function shareResilientesOnWhatsapp() {
  shareCurrentPageOnWS("Los resilientes");
}

// Functions for "aislados"
function shareAisladosOnFacebook() {
  shareCurrentPageOnFB("Los aislados");
}

function shareAisladosOnTwitter() {
  shareCurrentPageOnTW("Los aislados");
}

function shareAisladosOnWhatsapp() {
  shareCurrentPageOnWS("Los aislados");
}

// Main share functions
function shareCurrentPageOnTW(message = "Historias de la pandemia") {
  var URI = window.location.href;
  var dir = URI;
  var tit = message;
  var tit2 = encodeURIComponent(tit);
  // window.open(
  //   "http://twitter.com/?status=" + tit2 + "%20" + dir + "",
  //   "ventana",
  //   "width=600,height=400,left=50,top=50,toolbar=yes"
  // );

  window.open(
    "https://twitter.com/intent/tweet?text=" + tit2 + "%20" + dir + "",
    "ventana",
    "width=600,height=400,left=50,top=50,toolbar=yes"
  );
  void 0;
}

function shareCurrentPageOnFB(message = "Historias de la pandemia") {
  var URI = window.location.href;
  var dir = URI;
  var tit = message;
  var tit2 = encodeURIComponent(tit);
  var dir2 = encodeURIComponent(dir);
  window.open(
    "http://www.facebook.com/share.php?u=" + dir2 + "&t=" + tit2 + "",
    "ventana",
    "width=600,height=400,left=50,top=50,toolbar=yes"
  );
  void 0;
}

function shareCurrentPageOnWS(message = "Historias de la pandemia") {
  var URI = window.location.href;
  var dir = URI;
  var tit = message;
  var tit2 = encodeURIComponent(tit);
  window.open(
    "https://wa.me/?text=" + tit2 + "%20" + dir + "",
    "ventana",
    "width=600,height=400,left=50,top=50,toolbar=yes"
  );
  void 0;
}

function redirectToPage(linkHref) {
  window.location.href = linkHref;
}

function shareWSConvoca(prefijo) {
  var dir = "";
  var tit = prefijo + " Hola Convoca, mi nombre es ";
  var tit2 = encodeURIComponent(tit);
  window.open(
    "https://wa.me/51980486800?text=" + tit2 + "%20" + dir + "",
    "ventana",
    "width=600,height=400,left=50,top=50,toolbar=yes"
  );
  void 0;
}

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  const activeItem = false;
  if (activeItem) {
    $("#hidden_item").removeClass("d-none");
    $("#hidden_item a").attr("href", "http://www.google.com/");
  }

  $("#btnFloatWS").tooltip("show");
  setTimeout(() => {
    $("#btnFloatWS").tooltip("hide");
  }, 5000);
});
