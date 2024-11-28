const videoContainer = document.getElementById('video-container');
const section = document.getElementById('features');

window.addEventListener('scroll', () => {
    // Ambil posisi atas dan bawah section
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    // Ambil posisi scroll
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Hanya ubah ukuran video jika scroll berada di dalam section
    if (scrollY + windowHeight > sectionTop && scrollY < sectionBottom) {
        const relativeScroll = scrollY + windowHeight - sectionTop; // Posisi scroll relatif terhadap section
        if (relativeScroll > 100) {
            videoContainer.style.width = '96%';
        } else {
            videoContainer.style.width = '40%';
        }
    } else {
        // Reset ke ukuran default jika keluar dari section
        videoContainer.style.width = '80%';
    }
});

var countDownDate = new Date("Dec 17, 2024 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s "

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Selamat Berulang Tahun Ndut! from ay"
        finished.style.display = "block";

        // Play sound
        var audio = document.getElementById("endSound");
        audio.play().catch(function (error) {
            console.error("Error playing audio:", error);
          });
    }
}, 1000)

