    //magnificPopup
    $("#open-popup").magnificPopup({
        items: [{
                src: "../img/slider-4.jpg",
                type: "image",
            },
            {
                src: "../img/slider-3.jpg",
                type: "image",
            },
            {
                src: "../img/slider-5.jpg",
                type: "image",
            },
            {
                src: "https://www.youtube.com/watch?v=L6CpfyOHPoc",
                type: "iframe", // this overrides default type
            },
        ],
        gallery: {
            enabled: true,
        },
        type: "image", // this is a default type
    });