// --- MEGA MENU FUNCTIONS (GLOBAL SCOPE) ---
// Các hàm này cần ở phạm vi toàn cục để onmouseover/onmouseleave trong HTML có thể gọi
function showMegaMenu() {
    const menu = document.getElementById('level2');
    if (menu) menu.style.display = 'flex';
}

function hideMegaMenu() {
    const menu = document.getElementById('level2');
    if (menu) menu.style.display = 'none';
}


// Chờ cho toàn bộ nội dung trang được tải xong
document.addEventListener('DOMContentLoaded', function () {

    // --- KHỞI TẠO CÁC THÀNH PHẦN ---

    // Xử lý menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Khởi tạo Swiper cho slider thương hiệu (được thêm lại)
    try {
        new Swiper(".brand-slider", {
            slidesPerView: 3, // Mặc định cho màn hình nhỏ (mobile)
            spaceBetween: 10,
            grid: {
                rows: 2,
                fill: 'row',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            },
        });
    } catch (e) {
        console.error("Swiper for brands initialization failed:", e);
    }
    
    // --- HEADER MEGA MENU LOGIC & DATA ---
    const menuData = [
        {
          name: "Thời trang Việt",
            brandImages: [ "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+1", "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+2", "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+3", "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+4", "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+5", "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+6" ],
            children: [
              { name: "Thời trang Nam", children: ["Áo sơ mi, áo polo, áo thun", "Áo polo, Tshirt", "Quần âu, kaki, jeans, short" , "Áo khoác", "Giày dép da", " Vlazer, vest, Comlpe", "Sịp, Đùi", "Giày dép thể thao", "Túi, cặp, Ví da", "Phụ Kiện thời trang"] },
              { name: "Thời trang Nữ", children: ["Váy liền, Đầm công sở", "Đầm dạo phố, Đầm dự tiệc", "Đầm maxi, Váy hai dây mùa hè", "Áo dài Việt", "Áo công sơ", "Quần culottes – quần suông", "Chân váy, Quần short nữ", "Đồ mặc nhà cao cấp", "Túi xách tay – túi đeo chéo", "Giày cao gót", "Giày búp bê – giày lười nữ", "Dép sandal nữ", "Ví nữ, phụ kiện thời trang"] },
              { name: "Thời trang Trẻ em", children: ["Áo sơ mi, thun bé trai", "Quần các loại cho bé trai", "Áo khoác , áo gió bé trai", "Bộ đồ bé trai (set áo + quần)", "Váy đầm cho bé gái", "Áo thun, áo kiểu bé gái", "Chân váy, quần bé gái", "Áo khoác – cardigan bé gái", "Bộ đồ bé gái (set áo + váy/quần)"] },
              { name: "Thời trang Thể thao", children: ["Giày thể thao nam – nữ", "Giày chạy bộ – giày cầu lông", "Dép thể thao – dép đi phòng tập", "Nón thể thao – nón lưỡi trai", "Vớ thể thao – khăn – băng đô", "Balo thể thao – túi đựng giày – túi gym"] },
              { name: "Thời trang theo Mùa", children: ["Thời trang Mùa Hè", "Thời trang Mùa Đông", "Trang phục Lễ hội – Tết"] },
              { name: "Thời trang tặng Bố", children: ["Áo sơ mi dài tay", "Áo polo", "Quần âu, quần âu vải", "Áo len cổ lọ", "Áo khoác vest", "Cà vạt", "Thắt lưng da", "Đồng hồ, Mũ len"] },
              { name: "Thời trang tặng Mẹ", children: ["Váy liền", "Áo blouse", "Chân váy midi", "Áo len nhẹ", "Áo khoác dáng dài", "Khăn lụa, Khăn choàng", "Túi xách tay", "Trang sức (bông tai, vòng cổ)"] },
              { name: "Trang phục dân tộc", children: ["Áo dài thiết kế cao cấp", "Áo tứ thân - Lễ hội", "Áo bà ba cao cấp - Miền Tây", "Váy yếm và Áo yếm thiết kế", "Khăn vấn và phụ kiện đầu truyền thống", "Nón lá thủ công - Làng nghề", "Trang phục dân tộc thiểu số - Dệt tay", "Giày vải thổ cẩm - Dệt thủ công", "Set quà tặng trang phục dân tộc - Bản giới hạn"] }
            ],
          },
          { 
            name: "Gia dụng & Đời sống Việt", 
            brandImages: [ "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G1", "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G2", "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G3", "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G4", "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G5", "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G6" ],
            children: [
              { name: "Đồ dùng nhà bếp cao cấp", children: ["Nồi chảo", "Dụng cụ pha trà, cà phê", "Bình thủy tinh, bình giữ nhiệt"] },
              { name: "Đồ nội thất nhỏ", children: ["Đèn trang trí", "Tranh treo tường", "Thảm trang trí"] },
              { name: "Tiện ích sống hiện đại", children: ["Máy lọc không khí", "Máy xay, ép chậm", "Thiết bị cảm ứng, điều khiển thông minh"] }
            ] 
          },
          { 
            name: "Đặc sản vùng miền – Ẩm thực truyền thống", 
            brandImages: [ "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D1", "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D2", "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D3", "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D4", "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D5", "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D6" ],
            children: [
              { name: "Đặc sản nước chấm – gia vị", children: ["Nước mắm truyền thống", "Tương ớt – mắm nêm thủ công", "Muối chấm – muối tôm"] },
              { name: "Bánh mứt truyền thống", children: ["Bánh cốm – bánh chưng – bánh phu thê", "Mứt gừng – mứt dừa", "Bánh đậu xanh – bánh in"] },
              { name: "Đặc sản vùng miền", children: ["Chè đặc sản vùng núi", "Mật ong rừng – sâm núi", "Trà thảo mộc đặc sản"] }
            ] 
          },
          { 
            name: "Thực phẩm hữu cơ & Sống xanh", 
            brandImages: [ "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T1", "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T2", "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T3", "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T4", "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T5", "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T6" ],
            children: [
              { name: "Rau củ, ngũ cốc hữu cơ", children: ["Hạt điều – hạt mắc ca – hạt sen", "Gạo hữu cơ – gạo lứt", "Tinh bột nghệ – bột rau"] },
              { name: "Đồ uống tốt cho sức khỏe", children: ["Nước detox – nước ép lạnh", "Trà hoa – trà thảo dược", "Giấm trái cây – mật ong"] },
              { name: "Đồ ăn chay – ăn kiêng", children: ["Thực phẩm low-carb – keto", "Đồ ăn chay chế biến sẵn"] }
            ] 
          },
          { 
            name: "Mỹ phẩm – Chăm sóc cá nhân", 
            brandImages: [ "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M1", "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M2", "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M3", "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M4", "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M5", "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M6" ],
            children: [
              { name: "Dưỡng da – làm sạch tự nhiên", children: ["Sữa rửa mặt – nước hoa hồng", "Mặt nạ – serum thảo dược", "Kem dưỡng ẩm – dưỡng trắng"] },
              { name: "Dầu gội, chăm sóc tóc", children: ["Dầu gội bồ kết – thảo mộc", "Tinh dầu dưỡng tóc – serum"] },
              { name: "Sản phẩm spa tại nhà", children: ["Muối tắm – xông hơi", "Tinh dầu – đá muối"] }
            ] 
          },
          { 
            name: "Quà tặng – Doanh nghiệp – Văn hoá", 
            brandImages: [ "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q1", "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q2", "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q3", "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q4", "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q5", "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q6" ],
            children: [
              { name: "Quà Tết – Lễ tặng sang trọng", children: ["Giỏ quà đặc sản", "Hộp quà thảo dược", "Set quà trà – bánh – mứt"] },
              { name: "Đồ lưu niệm văn hoá", children: ["Tranh – tượng gỗ", "Bộ thư pháp – sổ tay"] },
              { name: "Quà doanh nghiệp cá nhân hoá", children: ["Quà khắc tên – in logo", "Set quà ký ức văn hoá"] }
            ] 
          },
          { 
            name: "Y học cổ truyền – Phục hồi sức khỏe", 
            brandImages: [ "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y1", "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y2", "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y3", "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y4", "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y5", "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y6" ],
            children: [
              { name: "Thảo dược – thuốc Nam", children: ["Cao lá – cao xoa – cao dán", "Trà dược – ngâm rượu", "Bột thảo dược uống"] },
              { name: "Phục hồi thể chất – xương khớp", children: ["Dụng cụ massage – đá nóng", "Đai lưng – chườm nóng thảo mộc", "Xông hơi – xông thảo dược"] }
            ] 
          },
          { 
            name: "Thủ công mỹ nghệ – Làng nghề", 
            brandImages: [ "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC1", "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC2", "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC3", "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC4", "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC5", "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC6" ],
            children: [
              { name: "Gốm sứ – Mây tre – Sơn mài", children: ["Bình gốm – chén bát", "Giỏ tre – rổ tre", "Tranh sơn mài – hộp sơn mài"] },
              { name: "Trang trí nghệ thuật", children: ["Tranh treo – tượng nhỏ", "Đèn ngủ – đèn bàn thủ công"] },
              { name: "Đồ dùng hàng ngày mỹ nghệ", children: ["Cốc sứ – khay trà – hộp gỗ"] }
            ] 
          },
          { 
            name: "Dụng cụ & Thiết bị thể thao", 
            brandImages: [ "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT1", "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT2", "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT3", "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT4", "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT5", "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT6" ],
            children: [
              { name: "Yoga – Thiền – Fitness tại nhà", children: ["Thảm yoga – gạch yoga", "Bóng tập – dây kháng lực", "Ghế thiền – gối ngồi"] },
              { name: "Thể thao ngoài trời", children: ["Dụng cụ cầu lông – bóng bàn", "Dụng cụ đi bộ – trekking"] }
            ] 
          },
          { 
            name: "Sản phẩm handmade – Sáng tạo Việt", 
            brandImages: [ "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM1", "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM2", "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM3", "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM4", "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM5", "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM6" ],
            children: [
              { name: "Đồ trang trí sáng tạo", children: ["Đèn giấy – tranh cắt giấy", "Bình hoa vải – phụ kiện decor"] },
              { name: "Phụ kiện cá nhân handmade", children: ["Túi vải – ví da thủ công", "Trang sức làm tay – phụ kiện gỗ"] },
              { name: "Đồ dùng sáng tạo", children: ["Sổ tay vẽ tay – bookmark – lịch đứng"] }
            ] 
          },
          { 
            name: "Đồ chơi – Quà tặng trẻ em", 
            brandImages: [ "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC1", "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC2", "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC3", "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC4", "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC5", "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC6" ],
            children: [
              { name: "Đồ chơi an toàn Việt", children: ["Bộ đồ chơi gỗ – xếp hình", "Đồ chơi lắp ráp – đồ chơi trí tuệ"] },
              { name: "Quà tặng sinh nhật, trung thu", children: ["Lồng đèn giấy – đồ thủ công", "Set vẽ – tô tượng – đồ chơi giáo dục"] }
            ] 
          },
          { 
            name: "Sản phẩm cho người Việt xa quê – Việt kiều", 
            brandImages: [ "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK1", "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK2", "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK3", "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK4", "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK5", "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK6" ],
            children: [
              { name: "Đặc sản quê nhà tiện gửi đi xa", children: ["Đặc sản khô – đóng hộp", "Hộp quà truyền thống", "Thực phẩm dễ bảo quản – gửi xa"] },
              { name: "Đồ lưu niệm mang bản sắc Việt", children: ["Tranh – tượng – đồ mỹ nghệ", "Quà tặng Tết – lễ truyền thống"] }
            ] 
          }
    ];

    const level2Container = document.getElementById('level2Container');
    const level3Container = document.getElementById('level3');
    const level4Container = document.getElementById('level4');
    const brandImageColumn = document.getElementById('brand-image-column');

    function setActive(container, activeElement) {
        if (!container) return;
        Array.from(container.children).forEach(child => child.classList.remove('active'));
        if (activeElement) {
            activeElement.classList.add('active');
        }
    }

    function renderLevel2() {
        if (!level2Container) return;
        level2Container.innerHTML = '';
        menuData.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'menu-item';
            div.textContent = item.name;
            div.onmouseover = () => renderLevel3(index);
            level2Container.appendChild(div);
        });
        if (menuData.length > 0) {
            renderLevel3(0);
        }
    }

    function renderLevel3(index) {
        if (!level2Container || !level3Container || !brandImageColumn) return;
        setActive(level2Container, level2Container.children[index]);
        
        brandImageColumn.innerHTML = '';
        const images = menuData[index].brandImages;
        if (images && images.length > 0) {
            images.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = "Brand Image";
                brandImageColumn.appendChild(img);
            });
        }
        
        level3Container.innerHTML = '';
        if(level4Container) level4Container.innerHTML = '';
        const level3List = menuData[index].children;

        level3List.forEach((child, childIndex) => {
            const div = document.createElement('div');
            div.className = 'menu-item';
            div.textContent = child.name;
            div.onmouseover = () => renderLevel4(index, childIndex);
            level3Container.appendChild(div);
        });

        if (level3List.length > 0) {
            renderLevel4(index, 0);
        }
    }

    function renderLevel4(index2, index3) {
        if (!level3Container || !level4Container) return;
        setActive(level3Container, level3Container.children[index3]);
        
        level4Container.innerHTML = '';
        const level4List = menuData[index2]?.children[index3]?.children || [];

        level4List.forEach(name => {
            const div = document.createElement('div');
            div.className = 'menu-item';
            div.textContent = name;
            div.onclick = function() {
                console.log(`Chuyển đến trang cho: ${name}`);
            };
            level4Container.appendChild(div);
        });
    }

    renderLevel2();


    // --- HỆ THỐNG ĐA NGÔN NGỮ ---
    const translations = {
        "vi": {
            "contact_link": "Liên hệ",
            "search_placeholder": "Tìm kiếm sản phẩm...",
            "menu_home": "Trang Chủ",
            "menu_products": "Sản Phẩm",
            "menu_collections": "Ngành hàng",
            "footer_support_title": "Hỗ trợ khách hàng",
            "footer_link_faq": "Câu hỏi thường gặp",
            "footer_link_returns": "Chính sách đổi trả",
            "footer_link_guides": "Hướng dẫn mua hàng",
            "footer_about_title": "Về HHV",
            "footer_link_intro": "Giới thiệu",
            "footer_link_careers": "Cơ hội việc làm",
            "footer_link_policy": "Chính sách & Điều khoản",
            "footer_partners_title": "Hợp tác",
            "footer_link_sellers": "Bán hàng cùng HHV",
            "footer_link_affiliate": "Chương trình đối tác",
            "footer_social_title": "Theo dõi chúng tôi",
            "newsletter_title": "Đăng ký nhận tin",
            "newsletter_placeholder": "Nhập email của bạn...",
            "newsletter_button": "Đăng Ký",
            "footer_app_title": "Tải ứng dụng",
            "company_info": "Địa chỉ: 123 Đường ABC, Quận 1, Thành phố Hồ Chí Minh. Mã số thuế: 0123456789",
            "copyright_new": "© Copyright 2022 by HOANGLONGDEVIL. Đã đăng ký bản quyền."
        },
        // "en": {
        //     "contact_link": "Contact",
        //     "search_placeholder": "Search for products...",
        //     "menu_home": "Home",
        //     "menu_products": "Products",
        //     "menu_collections": "Industry",
        //     "footer_support_title": "Customer Support",
        //     "footer_link_faq": "FAQ",
        //     "footer_link_returns": "Return Policy",
        //     "footer_link_guides": "Shopping Guides",
        //     "footer_about_title": "About HHV",
        //     "footer_link_intro": "About Us",
        //     "footer_link_careers": "Careers",
        //     "footer_link_policy": "Policy & Terms",
        //     "footer_partners_title": "Partnership",
        //     "footer_link_sellers": "Sell on HHV",
        //     "footer_link_affiliate": "Affiliate Program",
        //     "footer_social_title": "Follow Us",
        //     "newsletter_title": "Subscribe to our Newsletter",
        //     "newsletter_placeholder": "Enter your email...",
        //     "newsletter_button": "Subscribe",
        //     "footer_app_title": "Download App",
        //     "company_info": "Address: 123 ABC Street, District 1, Ho Chi Minh City. Tax ID: 0123456789",
        //     "copyright_new": "© Copyright 2022 by HOANGLONGDEVIL. All rights reserved."
        // }
    };

    const languageSwitchers = document.querySelectorAll('.lang-switcher');

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        languageSwitchers.forEach(switcher => {
            if (switcher.getAttribute('data-lang-set') === lang) {
                switcher.classList.add('active');
            } else {
                switcher.classList.remove('active');
            }
        });
    };

    languageSwitchers.forEach(switcher => {
        switcher.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang-set');
            setLanguage(selectedLang);
        });
    });
    
    const savedLang = localStorage.getItem('language') || (navigator.language.startsWith('vi') ? 'vi' : 'en');
    setLanguage(savedLang);

    // --- SCRIPT FOR NEW BODY CONTENT (FROM BODY 1) ---
    try {
        const bodyMenuData = [
          {
            name: "Thời trang Việt",
            brandImages: [ "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+1", "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+2", "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+3", "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+4", "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+5", "https://via.placeholder.com/180x80/0d6efd/ffffff?text=Brand+6" ],
            children: [
              { name: "Thời trang Nam", children: ["Áo sơ mi, áo polo, áo thun", "Áo polo, Tshirt", "Quần âu, kaki, jeans, short" , "Áo khoác", "Giày dép da", " Vlazer, vest, Comlpe", "Sịp, Đùi", "Giày dép thể thao", "Túi, cặp, Ví da", "Phụ Kiện thời trang"] },
              { name: "Thời trang Nữ", children: ["Váy liền, Đầm công sở", "Đầm dạo phố, Đầm dự tiệc", "Đầm maxi, Váy hai dây mùa hè", "Áo dài Việt", "Áo công sơ", "Quần culottes – quần suông", "Chân váy, Quần short nữ", "Đồ mặc nhà cao cấp", "Túi xách tay – túi đeo chéo", "Giày cao gót", "Giày búp bê – giày lười nữ", "Dép sandal nữ", "Ví nữ, phụ kiện thời trang"] },
              { name: "Thời trang Trẻ em", children: ["Áo sơ mi, thun bé trai", "Quần các loại cho bé trai", "Áo khoác , áo gió bé trai", "Bộ đồ bé trai (set áo + quần)", "Váy đầm cho bé gái", "Áo thun, áo kiểu bé gái", "Chân váy, quần bé gái", "Áo khoác – cardigan bé gái", "Bộ đồ bé gái (set áo + váy/quần)"] },
              { name: "Thời trang Thể thao", children: ["Giày thể thao nam – nữ", "Giày chạy bộ – giày cầu lông", "Dép thể thao – dép đi phòng tập", "Nón thể thao – nón lưỡi trai", "Vớ thể thao – khăn – băng đô", "Balo thể thao – túi đựng giày – túi gym"] },
              { name: "Thời trang theo Mùa", children: ["Thời trang Mùa Hè", "Thời trang Mùa Đông", "Trang phục Lễ hội – Tết"] },
              { name: "Thời trang tặng Bố", children: ["Áo sơ mi dài tay", "Áo polo", "Quần âu, quần âu vải", "Áo len cổ lọ", "Áo khoác vest", "Cà vạt", "Thắt lưng da", "Đồng hồ, Mũ len"] },
              { name: "Thời trang tặng Mẹ", children: ["Váy liền", "Áo blouse", "Chân váy midi", "Áo len nhẹ", "Áo khoác dáng dài", "Khăn lụa, Khăn choàng", "Túi xách tay", "Trang sức (bông tai, vòng cổ)"] },
              { name: "Trang phục dân tộc", children: ["Áo dài thiết kế cao cấp", "Áo tứ thân - Lễ hội", "Áo bà ba cao cấp - Miền Tây", "Váy yếm và Áo yếm thiết kế", "Khăn vấn và phụ kiện đầu truyền thống", "Nón lá thủ công - Làng nghề", "Trang phục dân tộc thiểu số - Dệt tay", "Giày vải thổ cẩm - Dệt thủ công", "Set quà tặng trang phục dân tộc - Bản giới hạn"] }
            ],
          },
          { 
            name: "Gia dụng & Đời sống Việt", 
            brandImages: [ "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G1", "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G2", "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G3", "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G4", "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G5", "https://via.placeholder.com/180x80/28a745/ffffff?text=Brand+G6" ],
            children: [
              { name: "Đồ dùng nhà bếp cao cấp", children: ["Nồi chảo", "Dụng cụ pha trà, cà phê", "Bình thủy tinh, bình giữ nhiệt"] },
              { name: "Đồ nội thất nhỏ", children: ["Đèn trang trí", "Tranh treo tường", "Thảm trang trí"] },
              { name: "Tiện ích sống hiện đại", children: ["Máy lọc không khí", "Máy xay, ép chậm", "Thiết bị cảm ứng, điều khiển thông minh"] }
            ] 
          },
          { 
            name: "Đặc sản vùng miền – Ẩm thực truyền thống", 
            brandImages: [ "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D1", "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D2", "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D3", "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D4", "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D5", "https://via.placeholder.com/180x80/dc3545/ffffff?text=Brand+D6" ],
            children: [
              { name: "Đặc sản nước chấm – gia vị", children: ["Nước mắm truyền thống", "Tương ớt – mắm nêm thủ công", "Muối chấm – muối tôm"] },
              { name: "Bánh mứt truyền thống", children: ["Bánh cốm – bánh chưng – bánh phu thê", "Mứt gừng – mứt dừa", "Bánh đậu xanh – bánh in"] },
              { name: "Đặc sản vùng miền", children: ["Chè đặc sản vùng núi", "Mật ong rừng – sâm núi", "Trà thảo mộc đặc sản"] }
            ] 
          },
          { 
            name: "Thực phẩm hữu cơ & Sống xanh", 
            brandImages: [ "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T1", "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T2", "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T3", "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T4", "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T5", "https://via.placeholder.com/180x80/198754/ffffff?text=Brand+T6" ],
            children: [
              { name: "Rau củ, ngũ cốc hữu cơ", children: ["Hạt điều – hạt mắc ca – hạt sen", "Gạo hữu cơ – gạo lứt", "Tinh bột nghệ – bột rau"] },
              { name: "Đồ uống tốt cho sức khỏe", children: ["Nước detox – nước ép lạnh", "Trà hoa – trà thảo dược", "Giấm trái cây – mật ong"] },
              { name: "Đồ ăn chay – ăn kiêng", children: ["Thực phẩm low-carb – keto", "Đồ ăn chay chế biến sẵn"] }
            ] 
          },
          { 
            name: "Mỹ phẩm – Chăm sóc cá nhân", 
            brandImages: [ "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M1", "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M2", "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M3", "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M4", "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M5", "https://via.placeholder.com/180x80/fd7e14/ffffff?text=Brand+M6" ],
            children: [
              { name: "Dưỡng da – làm sạch tự nhiên", children: ["Sữa rửa mặt – nước hoa hồng", "Mặt nạ – serum thảo dược", "Kem dưỡng ẩm – dưỡng trắng"] },
              { name: "Dầu gội, chăm sóc tóc", children: ["Dầu gội bồ kết – thảo mộc", "Tinh dầu dưỡng tóc – serum"] },
              { name: "Sản phẩm spa tại nhà", children: ["Muối tắm – xông hơi", "Tinh dầu – đá muối"] }
            ] 
          },
          { 
            name: "Quà tặng – Doanh nghiệp – Văn hoá", 
            brandImages: [ "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q1", "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q2", "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q3", "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q4", "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q5", "https://via.placeholder.com/180x80/6f42c1/ffffff?text=Brand+Q6" ],
            children: [
              { name: "Quà Tết – Lễ tặng sang trọng", children: ["Giỏ quà đặc sản", "Hộp quà thảo dược", "Set quà trà – bánh – mứt"] },
              { name: "Đồ lưu niệm văn hoá", children: ["Tranh – tượng gỗ", "Bộ thư pháp – sổ tay"] },
              { name: "Quà doanh nghiệp cá nhân hoá", children: ["Quà khắc tên – in logo", "Set quà ký ức văn hoá"] }
            ] 
          },
          { 
            name: "Y học cổ truyền – Phục hồi sức khỏe", 
            brandImages: [ "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y1", "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y2", "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y3", "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y4", "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y5", "https://via.placeholder.com/180x80/d63384/ffffff?text=Brand+Y6" ],
            children: [
              { name: "Thảo dược – thuốc Nam", children: ["Cao lá – cao xoa – cao dán", "Trà dược – ngâm rượu", "Bột thảo dược uống"] },
              { name: "Phục hồi thể chất – xương khớp", children: ["Dụng cụ massage – đá nóng", "Đai lưng – chườm nóng thảo mộc", "Xông hơi – xông thảo dược"] }
            ] 
          },
          { 
            name: "Thủ công mỹ nghệ – Làng nghề", 
            brandImages: [ "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC1", "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC2", "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC3", "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC4", "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC5", "https://via.placeholder.com/180x80/757575/ffffff?text=Brand+TC6" ],
            children: [
              { name: "Gốm sứ – Mây tre – Sơn mài", children: ["Bình gốm – chén bát", "Giỏ tre – rổ tre", "Tranh sơn mài – hộp sơn mài"] },
              { name: "Trang trí nghệ thuật", children: ["Tranh treo – tượng nhỏ", "Đèn ngủ – đèn bàn thủ công"] },
              { name: "Đồ dùng hàng ngày mỹ nghệ", children: ["Cốc sứ – khay trà – hộp gỗ"] }
            ] 
          },
          { 
            name: "Dụng cụ & Thiết bị thể thao", 
            brandImages: [ "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT1", "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT2", "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT3", "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT4", "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT5", "https://via.placeholder.com/180x80/20c997/ffffff?text=Brand+TT6" ],
            children: [
              { name: "Yoga – Thiền – Fitness tại nhà", children: ["Thảm yoga – gạch yoga", "Bóng tập – dây kháng lực", "Ghế thiền – gối ngồi"] },
              { name: "Thể thao ngoài trời", children: ["Dụng cụ cầu lông – bóng bàn", "Dụng cụ đi bộ – trekking"] }
            ] 
          },
          { 
            name: "Sản phẩm handmade – Sáng tạo Việt", 
            brandImages: [ "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM1", "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM2", "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM3", "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM4", "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM5", "https://via.placeholder.com/180x80/0dcaf0/ffffff?text=Brand+HM6" ],
            children: [
              { name: "Đồ trang trí sáng tạo", children: ["Đèn giấy – tranh cắt giấy", "Bình hoa vải – phụ kiện decor"] },
              { name: "Phụ kiện cá nhân handmade", children: ["Túi vải – ví da thủ công", "Trang sức làm tay – phụ kiện gỗ"] },
              { name: "Đồ dùng sáng tạo", children: ["Sổ tay vẽ tay – bookmark – lịch đứng"] }
            ] 
          },
          { 
            name: "Đồ chơi – Quà tặng trẻ em", 
            brandImages: [ "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC1", "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC2", "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC3", "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC4", "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC5", "https://via.placeholder.com/180x80/ffc107/000000?text=Brand+DC6" ],
            children: [
              { name: "Đồ chơi an toàn Việt", children: ["Bộ đồ chơi gỗ – xếp hình", "Đồ chơi lắp ráp – đồ chơi trí tuệ"] },
              { name: "Quà tặng sinh nhật, trung thu", children: ["Lồng đèn giấy – đồ thủ công", "Set vẽ – tô tượng – đồ chơi giáo dục"] }
            ] 
          },
          { 
            name: "Sản phẩm cho người Việt xa quê – Việt kiều", 
            brandImages: [ "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK1", "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK2", "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK3", "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK4", "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK5", "https://via.placeholder.com/180x80/adb5bd/ffffff?text=Brand+VK6" ],
            children: [
              { name: "Đặc sản quê nhà tiện gửi đi xa", children: ["Đặc sản khô – đóng hộp", "Hộp quà truyền thống", "Thực phẩm dễ bảo quản – gửi xa"] },
              { name: "Đồ lưu niệm mang bản sắc Việt", children: ["Tranh – tượng – đồ mỹ nghệ", "Quà tặng Tết – lễ truyền thống"] }
            ] 
          }
        ];
        
        const categoryColumn = document.getElementById('category-column');
        const bannerContainer = document.getElementById('banner-container');
        const subcategoryContainer = document.getElementById('subcategory-container');
        const level3ColumnBody = document.getElementById('level-3-column');
        const level4ColumnBody = document.getElementById('level-4-column');
        const brandImageColumnBody = document.getElementById('brand-image-column');
        const megaMenuWrapper = document.getElementById('mega-menu-wrapper');

        function renderCategories() {
            if (!categoryColumn) return;
            categoryColumn.innerHTML = '';
            bodyMenuData.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'category-item';
                div.textContent = item.name;
                div.onmouseover = () => {
                    setActiveCategory(categoryColumn, div);
                    showSubcategories(index);
                };
                categoryColumn.appendChild(div);
            });
        }
        
        function updateBrandPanel(level2Index) {
            if (!brandImageColumnBody) return;
            brandImageColumnBody.innerHTML = '';
            const images = bodyMenuData[level2Index].brandImages;
            if (images && images.length > 0) {
                images.forEach(imageUrl => {
                    const img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = "Brand Image";
                    brandImageColumnBody.appendChild(img);
                });
            }
        }

        function renderLevel3Body(level2Index) {
            if (!level3ColumnBody || !level4ColumnBody) return;
            level3ColumnBody.innerHTML = '';
            level4ColumnBody.innerHTML = ''; 
            const level3List = bodyMenuData[level2Index].children;

            level3List.forEach((item, level3Index) => {
                const div = document.createElement('div');
                div.className = 'menu-item';
                div.textContent = item.name;
                div.onmouseover = () => renderLevel4Body(level2Index, level3Index);
                level3ColumnBody.appendChild(div);
            });

            if(level3List.length > 0) {
                renderLevel4Body(level2Index, 0);
            }
        }

        function renderLevel4Body(level2Index, level3Index) {
            if (!level3ColumnBody || !level4ColumnBody) return;
            setActiveCategory(level3ColumnBody, level3ColumnBody.children[level3Index]);
            level4ColumnBody.innerHTML = '';
            const level4List = bodyMenuData[level2Index]?.children[level3Index]?.children || [];

            level4List.forEach(name => {
                const div = document.createElement('div');
                div.className = 'menu-item';
                div.textContent = name;
                div.onclick = () => {
                    window.location.href = `/product-list?category=${encodeURIComponent(name)}`;
                };
                level4ColumnBody.appendChild(div);
            });
        }

        function showSubcategories(index) {
            if (!bannerContainer || !subcategoryContainer) return;
            bannerContainer.style.display = 'none';
            subcategoryContainer.style.display = 'flex';
            renderLevel3Body(index);
            updateBrandPanel(index);
        }

        function showBanners() {
            if (!bannerContainer || !subcategoryContainer) return;
            bannerContainer.style.display = 'flex';
            subcategoryContainer.style.display = 'none';
            setActiveCategory(categoryColumn, null);
        }
        
        function setActiveCategory(container, activeElement) {
            if(!container) return;
            Array.from(container.children).forEach(child => child.classList.remove('active'));
            if (activeElement) {
                activeElement.classList.add('active');
            }
        }

        let slideIndex = 1;
        let sliderTimer;
        const slides = document.querySelectorAll('.banner-slider img');
        const totalSlides = slides.length;

        function showSlide(n) {
            if (totalSlides === 0) return;
            if (n > totalSlides) { slideIndex = 1 }
            if (n < 1) { slideIndex = totalSlides }
            
            slides.forEach(slide => slide.classList.remove('active'));
            if(slides[slideIndex - 1]) {
                slides[slideIndex - 1].classList.add('active');
            }
        }

        function navigateSlide(n) {
            clearInterval(sliderTimer);
            showSlide(slideIndex += n);
            sliderTimer = setInterval(() => navigateSlide(1), 4000);
        }
        
        function autoRunSlider() {
           sliderTimer = setInterval(() => navigateSlide(1), 4000);
        }

        if (megaMenuWrapper) {
            megaMenuWrapper.addEventListener('mouseleave', showBanners);
        }
        const prevBtn = document.querySelector('.slider-btn.prev');
        const nextBtn = document.querySelector('.slider-btn.next');
        if (prevBtn) prevBtn.addEventListener('click', () => navigateSlide(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => navigateSlide(1));

        renderCategories();
        if (totalSlides > 0) {
          showSlide(slideIndex);
          autoRunSlider();
        }

    } catch (e) {
        console.error("Error initializing body content:", e);
    }
    
    const featuredProductsData = [
        { name: "Sản phẩm 1", brand: "Thương hiệu A", sold: 123, rating: 4.5, price: "250.000đ" },
        { name: "Sản phẩm 2", brand: "Thương hiệu B", sold: 89, rating: 3.0, price: "180.000đ" },
        { name: "Sản phẩm 3", brand: "Thương hiệu C", sold: 245, rating: 5.0, price: "320.000đ" },
        { name: "Sản phẩm 4", brand: "Thương hiệu D", sold: 63, rating: 2.5, price: "150.000đ" },
        { name: "Sản phẩm 5", brand: "Thương hiệu E", sold: 201, rating: 4.0, price: "450.000đ" },
        { name: "Sản phẩm 6", brand: "Thương hiệu F", sold: 94, rating: 3.5, price: "280.000đ" },
        { name: "Sản phẩm 7", brand: "Thương hiệu G", sold: 58, rating: 1.5, price: "120.000đ" },
        { name: "Sản phẩm 8", brand: "Thương hiệu H", sold: 170, rating: 5.0, price: "550.000đ" }
    ];

    const suggestionProductsData = [
        { name: "Sản phẩm 1", brand: "Thương hiệu A", sold: 150, rating: 4.5, price: "250.000đ" },
        { name: "Sản phẩm 2", brand: "Thương hiệu B", sold: 90, rating: 3.8, price: "180.000đ" },
        { name: "Sản phẩm 3", brand: "Thương hiệu C", sold: 120, rating: 4.2, price: "320.000đ" },
        { name: "Sản phẩm 4", brand: "Thương hiệu D", sold: 30, rating: 2.9, price: "150.000đ" },
        { name: "Sản phẩm 5", brand: "Thương hiệu E", sold: 210, rating: 4.9, price: "450.000đ" },
        { name: "Sản phẩm 6", brand: "Thương hiệu F", sold: 60, rating: 3.5, price: "280.000đ" },
        { name: "Sản phẩm 7", brand: "Thương hiệu G", sold: 180, rating: 4.7, price: "120.000đ" },
        { name: "Sản phẩm 8", brand: "Thương hiệu H", sold: 75, rating: 3.2, price: "550.000đ" },
        { name: "Sản phẩm 9", brand: "Thương hiệu I", sold: 200, rating: 5.0, price: "220.000đ" },
        { name: "Sản phẩm 10", brand: "Thương hiệu J", sold: 110, rating: 4.0, price: "330.000đ" },
        { name: "Sản phẩm 11", brand: "Thương hiệu K", sold: 50, rating: 3.7, price: "190.000đ" },
        { name: "Sản phẩm 12", brand: "Thương hiệu L", sold: 140, rating: 4.4, price: "480.000đ" },
        { name: "Sản phẩm 13", brand: "Thương hiệu M", sold: 65, rating: 3.3, price: "210.000đ" },
        { name: "Sản phẩm 14", brand: "Thương hiệu N", sold: 99, rating: 4.0, price: "290.000đ" },
        { name: "Sản phẩm 15", brand: "Thương hiệu O", sold: 155, rating: 4.6, price: "380.000đ" },
        { name: "Sản phẩm 16", brand: "Thương hiệu P", sold: 175, rating: 4.8, price: "600.000đ" },
        { name: "Sản phẩm 17", brand: "Thương hiệu Q", sold: 20, rating: 2.5, price: "90.000đ" },
        { name: "Sản phẩm 18", brand: "Thương hiệu R", sold: 85, rating: 3.9, price: "260.000đ" },
        { name: "Sản phẩm 19", brand: "Thương hiệu S", sold: 130, rating: 4.1, price: "340.000đ" },
        { name: "Sản phẩm 20", brand: "Thương hiệu T", sold: 40, rating: 2.7, price: "130.000đ" },
        { name: "Sản phẩm 21", brand: "Thương hiệu U", sold: 100, rating: 3.6, price: "240.000đ" },
        { name: "Sản phẩm 22", brand: "Thương hiệu V", sold: 160, rating: 4.3, price: "490.000đ" },
        { name: "Sản phẩm 23", brand: "Thương hiệu W", sold: 35, rating: 2.8, price: "110.000đ" },
        { name: "Sản phẩm 24", brand: "Thương hiệu X", sold: 190, rating: 4.9, price: "650.000đ" },
        { name: "Sản phẩm 25", brand: "Thương hiệu Y", sold: 125, rating: 4.2, price: "310.000đ" },
        { name: "Sản phẩm 26", brand: "Thương hiệu Z", sold: 70, rating: 3.4, price: "200.000đ" },
        { name: "Sản phẩm 27", brand: "Thương hiệu AA", sold: 185, rating: 4.6, price: "580.000đ" },
        { name: "Sản phẩm 28", brand: "Thương hiệu AB", sold: 45, rating: 3.0, price: "140.000đ" },
        { name: "Sản phẩm 29", brand: "Thương hiệu AC", sold: 115, rating: 4.0, price: "300.000đ" },
        { name: "Sản phẩm 30", brand: "Thương hiệu AD", sold: 135, rating: 4.4, price: "470.000đ" },
        { name: "Sản phẩm 31", brand: "Thương hiệu AE", sold: 60, rating: 3.6, price: "230.000đ" },
        { name: "Sản phẩm 32", brand: "Thương hiệu AF", sold: 170, rating: 4.7, price: "520.000đ" },
        { name: "Sản phẩm 33", brand: "Thương hiệu AG", sold: 25, rating: 2.6, price: "100.000đ" },
        { name: "Sản phẩm 34", brand: "Thương hiệu AH", sold: 195, rating: 5.0, price: "700.000đ" },
        { name: "Sản phẩm 35", brand: "Thương hiệu AI", sold: 80, rating: 3.9, price: "270.000đ" },
        { name: "Sản phẩm 36", brand: "Thương hiệu AJ", sold: 145, rating: 4.3, price: "460.000đ" },
        { name: "Sản phẩm 37", brand: "Thương hiệu AK", sold: 105, rating: 3.8, price: "290.000đ" },
        { name: "Sản phẩm 38", brand: "Thương hiệu AL", sold: 90, rating: 3.7, price: "250.000đ" },
        { name: "Sản phẩm 39", brand: "Thương hiệu AM", sold: 155, rating: 4.5, price: "500.000đ" },
        { name: "Sản phẩm 40", brand: "Thương hiệu AN", sold: 60, rating: 3.5, price: "180.000đ" },
        { name: "Sản phẩm 41", brand: "Thương hiệu AO", sold: 130, rating: 4.2, price: "360.000đ" },
        { name: "Sản phẩm 42", brand: "Thương hiệu AP", sold: 30, rating: 2.9, price: "120.000đ" },
        { name: "Sản phẩm 43", brand: "Thương hiệu AQ", sold: 210, rating: 4.9, price: "750.000đ" },
        { name: "Sản phẩm 44", brand: "Thương hiệu AR", sold: 60, rating: 3.5, price: "200.000đ" },
        { name: "Sản phẩm 45", brand: "Thương hiệu AS", sold: 180, rating: 4.7, price: "540.000đ" },
        { name: "Sản phẩm 46", brand: "Thương hiệu AT", sold: 75, rating: 3.2, price: "220.000đ" },
        { name: "Sản phẩm 47", brand: "Thương hiệu AU", sold: 200, rating: 5.0, price: "800.000đ" },
        { name: "Sản phẩm 48", brand: "Thương hiệu AV", sold: 110, rating: 4.0, price: "350.000đ" },
        { name: "Sản phẩm 49", brand: "Thương hiệu AW", sold: 100, rating: 4.3, price: "400.000đ" },
        { name: "Sản phẩm 50", brand: "Thương hiệu AX", sold: 170, rating: 4.6, price: "560.000đ" }
    ];
    
    function createProductCard(p) {
        const fullStars = Math.floor(p.rating);
        const halfStar = p.rating % 1 >= 0.5;
        let stars = '★'.repeat(fullStars);
        if (halfStar) stars += '⯨';
        stars = stars.padEnd(5, '☆');

        const card = document.createElement("div");
        card.className = "bg-white border border-gray-200 rounded-lg p-2.5 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full";

        card.innerHTML = `
            <img src="https://via.placeholder.com/150x200" alt="${p.name}" class="w-full h-48 object-cover rounded-md mb-3">
            <div class="flex-grow flex flex-col">
                <h3 class="font-bold text-gray-800 mb-1 truncate text-sm">${p.name}</h3>
                <p class="text-xs text-gray-500 mb-2">Thương hiệu: <span class="font-medium">${p.brand}</span></p>
                <p class="text-base font-bold text-red-600 mt-auto">${p.price}</p>
            </div>
            <div class="flex justify-between items-center text-xs text-gray-500 mt-2">
                <span>Đã bán: ${p.sold}</span>
                <span class="text-yellow-400 text-sm">${stars}</span>
            </div>
        `;
        return card;
    }

    function renderFeaturedProducts() {
        const container = document.getElementById("featured-products-container");
        if (!container) return;
        container.innerHTML = "";
        featuredProductsData.forEach(p => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide h-auto';
            
            const card = createProductCard(p);
            slide.appendChild(card);
            container.appendChild(slide);
        });
    }
    
    function renderSuggestionProducts() {
        const container = document.getElementById("suggestion-products-container");
        if (!container) return;
        container.innerHTML = "";
        suggestionProductsData.forEach(p => {
            const card = createProductCard(p);
            container.appendChild(card);
        });
    }

    renderFeaturedProducts();
    renderSuggestionProducts();

    try {
       new Swiper(".featured-products-slider", {
           slidesPerView: 2,
           spaceBetween: 16,
           loop: true,
           autoplay: {
               delay: 4000,
               disableOnInteraction: false,
           },
           navigation: {
               nextEl: ".featured-products-slider .swiper-button-next",
               prevEl: ".featured-products-slider .swiper-button-prev",
           },
           breakpoints: {
               640: { slidesPerView: 3 },
               768: { slidesPerView: 4 },
               1024: { slidesPerView: 5 },
           },
       });
    } catch(e) {
       console.error("Swiper for featured products initialization failed:", e);
    }
    
    try {
       new Swiper(".promo-banner-slider", {
           loop: true,
           autoplay: {
               delay: 5000,
               disableOnInteraction: false,
           },
           pagination: {
               el: ".swiper-pagination",
               clickable: true,
           },
           navigation: {
               nextEl: ".promo-banner-slider .swiper-button-next",
               prevEl: ".promo-banner-slider .swiper-button-prev",
           },
       });
    } catch(e) {
       console.error("Swiper for promo banner initialization failed:", e);
    }

});