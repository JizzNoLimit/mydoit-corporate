const swiper_client = new Swiper('.swiper_pengguna', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
    scale: 2,
    navigation: {
        nextEl: '.swiper_pengguna_button_next',
        prevEl: '.swiper_pengguna_button_prev',
    },
    pagination: {
        el: '.swiper_pengguna_pagination',
        clickable: true,
    },
    
})

const testimoni_client = [
    {
        name: 'alan-lee',
        desk: `Analisis kinerja keuangan yang disediakan oleh layanan ini sungguh luar biasa. Saya dapat dengan cepat mengidentifikasi tren dan mengambil tindakan yang diperlukan. Hal ini membantu perusahaan kami berkembang lebih efisien.<b>"PT Jaya Bersama - Alan lee”</b>`
    },
    {
        name: 'anisa-wati',
        desk: `Analisis kinerja keuangan yang disediakan oleh layanan ini sungguh luar biasa. Saya dapat dengan cepat mengidentifikasi tren dan mengambil tindakan yang diperlukan. Hal ini membantu perusahaan kami berkembang lebih efisien.<b>"PT Jaya Bersama - Anisa Wati"</b>`
    },
    {
        name: 'jhon-doe',
        desk: `Analisis kinerja keuangan yang disediakan oleh layanan ini sungguh luar biasa. Saya dapat dengan cepat mengidentifikasi tren dan mengambil tindakan yang diperlukan. Hal ini membantu perusahaan kami berkembang lebih efisien.<b>"PT Jaya Bersama - Jhon Doe"</b>`
    },
    {
        name: 'tomy-william',
        desk: `Analisis kinerja keuangan yang disediakan oleh layanan ini sungguh luar biasa. Saya dapat dengan cepat mengidentifikasi tren dan mengambil tindakan yang diperlukan. Hal ini membantu perusahaan kami berkembang lebih efisien.<b>"PT Jaya Bersama - Tomy Wiliam"</b>`
    },
]

swiper_client.on('slideChange', function () {
    const p = document.querySelector('.swiper_pengguna__text')
    // Mendapatkan indeks slide yang aktif
    var activeIndex = swiper_client.activeIndex

    // Mendapatkan element HTML dari slide yang aktif
    var activeSlide = swiper_client.slides[activeIndex]
    // Lakukan sesuatu dengan slide yang aktif
    testimoni_client.forEach(data => {
        if (activeSlide.getAttribute('data-nama') === data.name) {
            p.innerHTML = data.desk
        }
    });
})