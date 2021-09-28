$(function () {
  $("#ri-grid").gridrotator({
    rows: 3,
    columns: 6,
    maxStep: 2,
    interval: 2000,
    w1024: {
      rows: 3,
      columns: 5,
    },
    w768: {
      rows: 3,
      columns: 5,
    },
    w480: {
      rows: 3,
      columns: 3,
    },
    w320: {
      rows: 3,
      columns: 3,
    },
    w240: {
      rows: 3,
      columns: 3,
    },
  });
});
