

const textList = [
    "Welcome To My Portofolio",
    "I Am Programmer",
    "I Have Skills",
    "Web Development",
    "Cyber Security",
    "Data Science",
    "AI Development",
    "Desktop Development"
];

let textIndex = 0;
let charIndex = 0;

function type() {
    const textElement = document.getElementById('typed-text');
    const words = textList[textIndex].split(' ');

    if (charIndex < words.length) {
        const word = words[charIndex];
        const span = document.createElement('span');
        span.textContent = word;

        // Menentukan warna merah hanya pada kata terakhir
        if (charIndex === words.length - 1) {
            span.style.color = 'red';
        }

        textElement.appendChild(span);
        textElement.appendChild(document.createTextNode(' ')); // Menambahkan spasi
        charIndex++;
        setTimeout(type, 500);
    } else {
        setTimeout(erase, 1500);
    }
}




function erase() {
    const textElement = document.getElementById('typed-text');
    const spans = textElement.querySelectorAll('span');
    if (charIndex > 0) {
        const lastSpan = spans[spans.length - 1];
        lastSpan.parentNode.removeChild(lastSpan);
        charIndex--;
        setTimeout(erase, 200);
    } else {
        textIndex = (textIndex + 1) % textList.length;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();

    const image = document.getElementById('profile-image');
    image.style.transform = 'translateY(0)';
    image.style.opacity = '1';
    
    // Menggunakan animasi CSS pada gambar
    image.classList.add('image-appear');
});
document.addEventListener('DOMContentLoaded', () => {
    const staticTextElement = document.querySelector('.static-text');
    const text = staticTextElement.innerHTML;

    // Membuat warna kombinasi
    const coloredText = text.replace(/(Hello|Pixcel Narang)/g, '<span style="color: white;">$1</span>')
                            .replace(/(Experience|2 Years)/g, '<span style="color: red;">$1</span>')
                            .replace(/(new|qualification|Work)/g, '<span style="color: purple;">$1</span>');

    // Menetapkan teks berwarna kembali ke elemen
    staticTextElement.innerHTML = coloredText;
});
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let projects = document.querySelectorAll(".project");
        projects.forEach(function (project) {
            if (isElementInViewport(project)) {
                project.classList.add("fade-in");
                project.classList.remove("fade-out");
            } else {
                project.classList.remove("fade-in");
                project.classList.add("fade-out");
            }
        });
    });
 document.addEventListener("DOMContentLoaded", function (){
        window.addEventListener("scroll", function (){
            let fotos = document.querySelectorAll(".foto");
            fotos.forEach(function (foto){
                if(isElementInViewport(foto)){
                    foto.classList.add("fade-in");
                    foto.classList.remove("fade-out");
                } else {
                    foto.classList.remove("fade-in");
                    foto.classList.add("fade-out");
                }
            })
        })
    })

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
document.addEventListener("DOMContentLoaded", function (){
    window.addEventListener("scroll", function (){
        let fotos = document.querySelectorAll(".foto");
        fotos.forEach(function (foto){
            if(isElementInViewportFoto(foto)){
                foto.classList.add("fade-in");
                foto.classList.remove("fade-out");
            } else {
                foto.classList.remove("fade-in");
                foto.classList.add("fade-out");
            }
        })
    })
})

function isElementInViewportFoto(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Tambahkan script.js dengan konten berikut:

document.addEventListener('DOMContentLoaded', function () {
    var skillItems = document.querySelectorAll('.skill-item');

    function toggleSkillsAnimation() {
        skillItems.forEach(function (item, index) {
            setTimeout(function () {
                item.classList.toggle('fade-in');
            }, index * 1000); // Setiap item ditampilkan setelah 1000ms (1 detik)
        });
    }

    // Panggil fungsi toggleSkillsAnimation saat halaman dimuat
    toggleSkillsAnimation();

    // Setel interval untuk memanggil kembali fungsi setiap 4 detik
    setInterval(function () {
        toggleSkillsAnimation();
    }, 4000);
});


document.addEventListener('DOMContentLoaded', function (){
    const whatsappbutton = document.getElementById('whatsapp-button');

    whatsappbutton.addEventListener('click', function(){
        window.location.href = 'https://api.whatsapp.com/send?phone=6282253654152';
    });
});
function copyCode() {
    // Menyalin teks ke clipboard
    var codeContainer = document.getElementById('codeContainer');
    var codeText = codeContainer.querySelector('code').innerText;

    var tempInput = document.createElement('textarea');
    tempInput.value = codeText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Memberikan umpan balik (opsional)
    alert('Code copied to clipboard!');
}

const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});
