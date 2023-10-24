
const keys = document.querySelectorAll(".key");
const audios = document.querySelectorAll("audio");

keys.forEach(function (key) {
    key.addEventListener("click", function () {
        audios.forEach(function (audio) {
            if (key.getAttribute("connect") === audio.getAttribute("connect")) {
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.currentTime = 0;
                };
            };
        });
    });
});

document.addEventListener("keydown", function (key) {
    audios.forEach(function (audio) {
        if (audio.getAttribute("key") === key.key) {
            keys.forEach(function(btn){
                if (audio.getAttribute("connect" )=== btn.getAttribute("connect")) {
                    btn.classList.toggle("active");
                    setTimeout(function(){
                        btn.classList.remove("active");
                    },200);
                };
            });
            if (audio.paused) {
                audio.play();
            } else {
                audio.currentTime = 0;
            };
        };
    });
})

