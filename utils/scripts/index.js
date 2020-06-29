// var granimInstance = new Granim({
//     element: "#canvas-image-blending",
//     direction: "top-bottom",
//     opacity: [1, 1],
//     isPausedWhenNotInView: true,
//     image: {
//         source:
//             "https://images.unsplash.com/photo-1508007226633-b7de6a10cb16?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=154096052e642a1b7cf97c577f2a4d17",
//         blendingMode: "multiply",
//     },
//     states: {
//         "default-state": {
//             gradients: [
//                 ["#29323c", "#485563"],
//                 ["#FF6B6B", "#556270"],
//                 ["#80d3fe", "#7ea0c4"],
//                 ["#f0ab51", "#eceba3"],
//             ],
//             transitionSpeed: 7000,
//         },
//     },
// });

$(document).ready(function () {
    // MODAL
    $(".modal").modal();
    // DROPDOWNS
    $(".dropdown-button").dropdown({
        belowOrigin: true,
    });
    // TABS
    $("ul.tabs").tabs();
    // SCROLLSPY
    $(".scrollspy").scrollSpy();
    //SIDENAV
    $(".button-collapse").sideNav();
});
