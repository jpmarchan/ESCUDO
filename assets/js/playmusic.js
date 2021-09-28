let musica = new Audio("https://convoca.pe/historiasdelbicentenario/especialtes.mp3");
const ckbEspecialAudioSM = document.getElementById("chkEspecialAudioSM");
const ckbEspecialAudioLG = document.getElementById("chkEspecialAudioLG");
var riGrid = document.getElementById("gridImagesSection");
var mc = new Hammer(riGrid);

$(document).ready(function () {
  let prevUrl = document.referrer;
  if (prevUrl.indexOf(window.location.host) !== -1) {
    musica.play();
    $("#overlay").removeClass("d-lg-block");
  } else {
    $("#overlay").addClass("d-lg-block");
  }
  activePanGesture();
  // musica.play();
  ckbEspecialAudioSM.checked = false;
  ckbEspecialAudioLG.checked = false;
});

musica.addEventListener(
  "ended",
  function () {
    ckbEspecialAudioSM.checked = false;
    ckbEspecialAudioLG.checked = false;
  },
  false
);
musica.addEventListener(
  "pause",
  function () {
    ckbEspecialAudioSM.checked = false;
    ckbEspecialAudioLG.checked = false;
  },
  false
);
musica.addEventListener(
  "play",
  function () {
    ckbEspecialAudioSM.checked = true;
    ckbEspecialAudioLG.checked = true;
    disablePanGesture();
  },
  false
);

function playEspecialAudio(idChk) {
  const ckbPlayer = document.getElementById(idChk);
  if (ckbPlayer.checked) {
    musica.play();
  } else {
    musica.pause();
    musica.currentTime = 0;
  }
}

function activePanGesture() {
  mc.get("pan").set({
    direction: Hammer.DIRECTION_VERTICAL,
  });
  mc.on("pan", function () {
    musica.play();
  });
}

function disablePanGesture() {
  mc.off("pan");
  $("#gridImagesSection").addClass("touchImportant");
}

function offOverlay() {
  musica.play();
  $("#overlay").removeClass("d-lg-block");
}
