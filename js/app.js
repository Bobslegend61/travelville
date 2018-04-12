// SIDENAV
const sidenav = document.querySelector(".sidenav");
M.Sidenav.init(sidenav, {});

// SLIDER
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

// Autocomplete
const ac = document.querySelector(".autocomplete");
M.Autocomplete.init(ac, {
    data: {
        "Aruba": null,
        "Cancun Mexico": null,
        "Hawaii": null,
        "Florida": null,
        "Califonia": null,
        "Jamacia": null,
        "Europe": null
    }
});

// material box
const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

// scrollspy
const ss = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(ss, {});


