// ---------------------------------
// YENİ: YÜKLEME EKRANI MANTIĞI
// ---------------------------------
// Bu fonksiyon, tüm görseller dahil her şey yüklendiğinde çalışır
window.onload = function() {
    const loader = document.getElementById("loader");
    if (loader) {
        // Animasyonun biraz görünmesi için kısa bir gecikme
        setTimeout(() => {
            loader.classList.add("loader-hidden");
        }, 1000); // 500ms
    }
};

document.addEventListener("DOMContentLoaded", function() {

    // ---------------------------------
    // ÇEVİRİ SÖZLÜĞÜ (6 DİL)
    // (Bu bölüm öncekiyle aynı, değişiklik yok)
    // ---------------------------------
    const translations = {
        "tr": { "pageTitle": "Adelin Software - Yenilikçi Dijital Çözümler", "navHome": "Ana Sayfa", "navAbout": "Hakkımızda", "navProjects": "Projelerimiz", "navContact": "İletişim", "heroTitle1": "Geleceği", "heroTitle2": "Kodluyoruz", "heroSubtitle": "Adelin Software, işinizi dijital dünyaya taşıyan yenilikçi ve güçlü yazılım çözümleri sunar.", "heroButton": "Projelerimizi Keşfedin", "aboutTitle": "Hakkımızda", "aboutSubTitle": "Biz Kimiz?", "aboutDesc": "Adelin Software, dijital dünyanın sınırlarını zorlayan, yenilikçi ve kullanıcı odaklı yazılım çözümleri üreten bir teknoloji oluşumudur. Web ve mobil platformlarda, yapay zekadan otomasyon sistemlerine kadar geniş bir yelpazede hizmet veriyoruz.", "aboutMissionTitle": "Misyonumuz", "aboutMissionDesc": "Kullanıcıların ihtiyaçlarına yönelik en yüksek kalitede, ölçeklenebilir ve güvenli yazılım çözümleri sunarak dijital dönüşüm yolculuklarında onlara rehberlik etmek.", "aboutVisionTitle": "Vizyonumuz", "aboutVisionDesc": "Teknoloji alanında global bir lider olmak, yapay zeka ve otomasyon sistemleri ile sektörlere yön veren, sürdürülebilir ve yenilikçi projelere imza atmak.", "projectsTitle": "Yaklaşan Projelerimiz", "projectsSubtitle": "Yakında Google Play Store ve App Store'da!", "project1Desc": "Gelişmiş risk yönetimi ve arbitraj stratejileri. Finansal hedeflerinize ulaşmak hiç bu kadar kolay olmamıştı!", "project1Status": "Yakında App Store, Google Play ve Web'de!", "project2Desc": "Pati-severlerin yeni gözdesi! Aşı takvimi, dijital sağlık karnesi, sohbet ve yardımlaşma. Tüm \"Pati\" bilgileri tek yerde.", "project2Status": "Yakında Google Play Store'da!", "project3Desc": "Modern, kullanıcı dostu ve kişiselleştirilebilir dijital tesbih deneyimi. Manevi yolculuğunuzda yeni yardımcınız.", "project3Status": "Yakında Google Play Store'da!", "contactTitle": "Bize Ulaşın", "contactSubtitle": "Proje fikriniz mi var? Sizinle tanışmak için sabırsızlanıyoruz.", "contactInfoTitle": "İletişim Bilgileri", "contactInfoDesc": "Proje teklifleri, işbirlikleri veya sorularınız için bize yazabilirsiniz.", "contactInfoLocation": "Türkiye", "contactFormTitle": "Mesaj Gönderin", "formName": "Adınız Soyadınız", "formEmail": "E-posta Adresiniz", "formSubject": "Konu", "formMessage": "Mesajınız", "formButton": "Formu Gönder", "footerLinks": "Hızlı Erişim", "footerLegal": "© [YEAR] Adelin Software. Tüm Hakları Saklıdır. | Bu sitedeki tüm içerik ve materyaller izne tabidir.", "formSuccess": "Mesajınız başarıyla gönderildi. Teşekkür ederiz!", "formError": "Bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
        "en": { "pageTitle": "Adelin Software - Innovative Digital Solutions", "navHome": "Home", "navAbout": "About Us", "navProjects": "Our Projects", "navContact": "Contact", "heroTitle1": "Coding", "heroTitle2": "the Future", "heroSubtitle": "Adelin Software offers innovative and powerful software solutions that bring your business into the digital world.", "heroButton": "Discover Our Projects", "aboutTitle": "About Us", "aboutSubTitle": "Who We Are?", "aboutDesc": "Adelin Software is a technology entity that pushes the boundaries of the digital world, producing innovative and user-oriented software solutions. We provide services on web and mobile platforms, from artificial intelligence to automation systems.", "aboutMissionTitle": "Our Mission", "aboutMissionDesc": "To guide users on their digital transformation journeys by providing the highest quality, scalable, and secure software solutions tailored to their needs.", "aboutVisionTitle": "Our Vision", "aboutVisionDesc": "To be a global leader in technology, shaping industries with artificial intelligence and automation systems, and undertaking sustainable and innovative projects.", "projectsTitle": "Our Upcoming Projects", "projectsSubtitle": "Coming soon to Google Play Store and App Store!", "project1Desc": "Advanced risk management and arbitrage strategies. Achieving your financial goals has never been easier!", "project1Status": "Coming soon to App Store, Google Play, and Web!", "project2Desc": "The new favorite for pet lovers! Vaccination schedule, digital health record, chat, and support. All \"Paw\" info in one place.", "project2Status": "Coming soon to Google Play Store!", "project3Desc": "A modern, user-friendly, and customizable digital tasbih (dhikr) experience. Your new assistant on your spiritual journey.", "project3Status": "Coming soon to Google Play Store!", "contactTitle": "Contact Us", "contactSubtitle": "Have a project idea? We look forward to meeting you.", "contactInfoTitle": "Contact Information", "contactInfoDesc": "You can write to us for project proposals, collaborations, or questions.", "contactInfoLocation": "Turkey", "contactFormTitle": "Send a Message", "formName": "Your Name", "formEmail": "Your E-mail Address", "formSubject": "Subject", "formMessage": "Your Message", "formButton": "Send Form", "footerLinks": "Quick Access", "footerLegal": "© [YEAR] Adelin Software. All Rights Reserved. | All content and materials on this site are subject to permission.", "formSuccess": "Your message has been sent successfully. Thank you!", "formError": "An error occurred. Please try again later." },
        "de": { "pageTitle": "Adelin Software - Innovative Digitale Lösungen", "navHome": "Startseite", "navAbout": "Über uns", "navProjects": "Projekte", "navContact": "Kontakt", "heroTitle1": "Wir Kodieren", "heroTitle2": "die Zukunft", "heroSubtitle": "Adelin Software bietet innovative und leistungsstarke Softwarelösungen, die Ihr Unternehmen in die digitale Welt bringen.", "heroButton": "Projekte Entdecken", "aboutTitle": "Über uns", "aboutSubTitle": "Wer wir sind?", "aboutDesc": "Adelin Software ist ein Technologieunternehmen, das die Grenzen der digitalen Welt erweitert und innovative, benutzerorientierte Softwarelösungen entwickelt. Wir bieten Dienstleistungen auf Web- und Mobilplattformen, von künstlicher Intelligenz bis hin zu Automatisierungssystemen.", "aboutMissionTitle": "Unsere Mission", "aboutMissionDesc": "Benutzer auf ihrem Weg der digitalen Transformation zu begleiten, indem wir qualitativ hochwertige, skalierbare und sichere Softwarelösungen anbieten, die auf ihre Bedürfnisse zugeschnitten sind.", "aboutVisionTitle": "Unsere Vision", "aboutVisionDesc": "Ein weltweit führendes Technologieunternehmen zu sein, das mit künstlicher Intelligenz und Automatisierungssystemen Branchen prägt und nachhaltige, innovative Projekte durchführt.", "projectsTitle": "Kommende Projekte", "projectsSubtitle": "Bald im Google Play Store und App Store!", "project1Desc": "Fortschrittliches Risikomanagement und Arbitrage-Strategien. Ihre finanziellen Ziele zu erreichen war noch nie einfacher!", "project1Status": "Bald im App Store, Google Play und Web!", "project2Desc": "Der neue Favorit für Tierliebhaber! Impfkalender, digitale Gesundheitsakte, Chat und Hilfe. Alle \"Pfoten\"-Infos an einem Ort.", "project2Status": "Bald im Google Play Store!", "project3Desc": "Eine moderne, benutzerfreundliche und anpassbare digitale Tasbih (Dhikr)-Erfahrung. Ihr neuer Assistent auf Ihrer spirituellen Reise.", "project3Status": "Bald im Google Play Store!", "contactTitle": "Kontaktieren Sie uns", "contactSubtitle": "Haben Sie eine Projektidee? Wir freuen uns darauf, Sie kennenzuleren.", "contactInfoTitle": "Kontaktinformationen", "contactInfoDesc": "Sie können uns für Projektvorschläge, Kooperationen oder Fragen schreiben.", "contactInfoLocation": "Türkei", "contactFormTitle": "Nachricht Senden", "formName": "Ihr Name", "formEmail": "Ihre E-Mail-Adresse", "formSubject": "Betreff", "formMessage": "Ihre Nachricht", "formButton": "Formular Senden", "footerLinks": "Schnellzugriff", "footerLegal": "© [YEAR] Adelin Software. Alle Rechte vorbehalten. | Alle Inhalte und Materialien auf dieser Website unterliegen der Genehmigung.", "formSuccess": "Ihre Nachricht wurde erfolgreich gesendet. Vielen Dank!", "formError": "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
        "fr": { "pageTitle": "Adelin Software - Solutions Numériques Innovantes", "navHome": "Accueil", "navAbout": "À propos", "navProjects": "Projets", "navContact": "Contact", "heroTitle1": "Nous Codons", "heroTitle2": "l'Avenir", "heroSubtitle": "Adelin Software propose des solutions logicielles innovantes et puissantes qui propulsent votre entreprise dans le monde numérique.", "heroButton": "Découvrir Nos Projets", "aboutTitle": "À propos de nous", "aboutSubTitle": "Qui sommes-nous ?", "aboutDesc": "Adelin Software est une entité technologique qui repousse les limites du monde numérique en produisant des solutions logicielles innovantes et centrées sur l'utilisateur. Nous fournissons des services sur les plateformes web et mobiles, de l'intelligence artificielle aux systèmes d'automatisation.", "aboutMissionTitle": "Notre Mission", "aboutMissionDesc": "Guider les utilisateurs dans leur parcours de transformation numérique en fournissant des solutions logicielles de la plus haute qualité, évolutives et sécurisées, adaptées à leurs besoins.", "aboutVisionTitle": "Notre Vision", "aboutVisionDesc": "Être un leader mondial de la technologie, façonner les industries grâce à l'intelligence artificielle et aux systèmes d'automatisation, et entreprendre des projets durables et innovants.", "projectsTitle": "Nos Prochains Projets", "projectsSubtitle": "Bientôt sur Google Play Store et App Store !", "project1Desc": "Gestion avancée des risques et stratégies d'arbitrage. Atteindre vos objectifs financiers n'a jamais été aussi facile !", "project1Status": "Bientôt sur l'App Store, Google Play et le Web !", "project2Desc": "Le nouveau favori des amoureux des animaux ! Calendrier de vaccination, carnet de santé numérique, chat et assistance. Toutes les infos \"Patte\" en un seul lieu.", "project2Status": "Bientôt sur le Google Play Store !", "project3Desc": "Une expérience de tasbih (dhikr) numérique moderne, conviviale et personnalisable. Votre nouvel assistant dans votre voyage spirituel.", "project3Status": "Bientôt sur le Google Play Store !", "contactTitle": "Contactez-nous", "contactSubtitle": "Vous avez une idée de projet ? Nous sommes impatients de vous rencontrer.", "contactInfoTitle": "Informations de Contact", "contactInfoDesc": "Vous pouvez nous écrire pour des propositions de projets, des collaborations ou des questions.", "contactInfoLocation": "Turquie", "contactFormTitle": "Envoyer un Message", "formName": "Votre Nom", "formEmail": "Votre Adresse E-mail", "formSubject": "Sujet", "formMessage": "Votre Message", "formButton": "Envoyer le Formulaire", "footerLinks": "Accès Rapide", "footerLegal": "© [YEAR] Adelin Software. Tous droits réservés. | Tout le contenu et les matériaux de ce site sont soumis à autorisation.", "formSuccess": "Votre message a été envoyé avec succès. Merci !", "formError": "Une erreur est survenue. Veuillez réessayer plus tard." },
        "zh": { "pageTitle": "Adelin Software - 创新数字解决方案", "navHome": "首页", "navAbout": "关于我们", "navProjects": "我们的项目", "navContact": "联系方式", "heroTitle1": "编码", "heroTitle2": "未来", "heroSubtitle": "Adelin Software 提供创新且强大的软件解决方案，将您的业务带入数字世界。", "heroButton": "发现我们的项目", "aboutTitle": "关于我们", "aboutSubTitle": "我们是谁？", "aboutDesc": "Adelin Software 是一个推动数字世界界限的技术实体，生产创新且面向用户的软件解决方案。我们在网络和移动平台上提供从人工智能到自动化系统的服务。", "aboutMissionTitle": "我们的使命", "aboutMissionDesc": "通过提供最高质量、可扩展和安全的软件解决方案来指导用户的数字化转型之旅，以满足他们的需求。", "aboutVisionTitle": "我们的愿G景", "aboutVisionDesc": "成为全球技术领导者，通过人工智能和自动化系统塑造行业，并承担可持续和创新的项目。", "projectsTitle": "我们即将推出的项目", "projectsSubtitle": "即将在 Google Play 商店和 App Store 上架！", "project1Desc": "先进的风险管理和套利策略。实现您的财务目标从未如此简单！", "project1Status": "即将在 App Store、Google Play 和 Web 上推出！", "project2Desc": "宠物爱好者的新宠！疫苗接种时间表、数字健康记录、聊天和互助。所有“爪子”信息尽在一个地方。", "project2Status": "即将在 Google Play 商店上架！", "project3Desc": "现代、用户友好且可定制的数字念珠 (dhikr) 体验。您精神之旅的新助手。", "project3Status": "即将在 Google Play 商店上架！", "contactTitle": "联系我们", "contactSubtitle": "有项目想法吗？我们期待与您会面。", "contactInfoTitle": "联系信息", "contactInfoDesc": "您可以就项目提案、合作或问题与我们联系。", "contactInfoLocation": "土耳其", "contactFormTitle": "发送消息", "formName": "您的姓名", "formEmail": "您的电子邮件地址", "formSubject": "主题", "formMessage": "您的留言", "formButton": "发送表格", "footerLinks": "快速访问", "footerLegal": "© [YEAR] Adelin Software. 版权所有。 | 本网站上的所有内容和材料均需获得许可。", "formSuccess": "您的消息已成功发送。谢谢！", "formError": "发生错误。请稍后再试。" },
        "ja": { "pageTitle": "Adelin Software - 革新的なデジタルソリューション", "navHome": "ホーム", "navAbout": "私たちについて", "navProjects": "プロジェクト", "navContact": "お問い合わせ", "heroTitle1": "未来を", "heroTitle2": "コーディング", "heroSubtitle": "Adelin Softwareは、ビジネスをデジタルの世界に導く、革新的で強力なソフトウェアソリューションを提供します。", "heroButton": "プロジェクトを見る", "aboutTitle": "私たちについて", "aboutSubTitle": "私たちは誰ですか？", "aboutDesc": "Adelin Softwareは、デジタル世界の限界を押し広げ、革新的でユーザー指向のソフトウェアソリューションを生み出すテクノロジーエンティティです。私たちは、AIから自動化システムまで、Webおよびモバイルプラットフォームでサービスを提供しています。", "aboutMissionTitle": "私たちの使命", "aboutMissionDesc": "ユーザーのニーズに合わせた最高品質でスケーlebelかつ安全なソフトウェアソリューションを提供することにより、ユーザーのデジタルトランスフォーメーションの旅を導きます。", "aboutVisionTitle": "私たちのビジョン", "aboutVisionDesc": "テクノロジーのグローバルリーダーとなり、AIと自動化システムで産業を形成し、持続可能で革新的なプロジェクトを遂行します。", "projectsTitle": "近日公開プロジェクト", "projectsSubtitle": "近日Google PlayストアとApp Storeに登場！", "project1Desc": "高度なリスク管理とアービトラージ戦略。財務目標の達成がこれまでになく簡単になりました！", "project1Status": "近日App Store、Google Play、Webに登場！", "project2Desc": "ペット愛好家の新しいお気に入り！ワクチン接種スケジュール、デジタル健康記録、チャット、助け合い。すべての「肉球」情報を1か所に。", "project2Status": "近日Google Playストアに登場！", "project3Desc": "モダンで使いやすく、カスタマイズ可能なデジタルタスビ（ズィクル）体験。あなたの精神的な旅の新しいアシスタント。", "project3Status": "近日Google Playストアに登場！", "contactTitle": "お問い合わせ", "contactSubtitle": "プロジェクトのアイデアがありますか？お会いできるのを楽しみにしています。", "contactInfoTitle": "連絡先情報", "contactInfoDesc": "プロジェクトの提案、協力、または質問については、こちらにご連絡ください。", "contactInfoLocation": "トルコ", "contactFormTitle": "メッセージを送る", "formName": "お名前", "formEmail": "メールアドレス", "formSubject": "件名", "formMessage": "メッセージ", "formButton": "フォームを送信", "footerLinks": "クイックアクセス", "footerLegal": "© [YEAR] Adelin Software. 全著作権所有。 | このサイトのすべてのコンテンツおよび資料は許可が必要です。", "formSuccess": "メッセージは正常に送信されました。ありがとうございます！", "formError": "エラーが発生しました。後でもう一度お試しください。" }
    };

    // ---------------------------------
    // DİL DEĞİŞTİRME FONKSİYONU
    // (Aynı, değişiklik yok)
    // ---------------------------------
    const langOptions = document.querySelectorAll(".lang-option");
    const currentLangText = document.getElementById("current-lang-text");
    const currentYear = new Date().getFullYear();

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language '${lang}' not found.`);
            return;
        }
        const trans = translations[lang];
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (trans[key]) {
                let text = trans[key].replace("[YEAR]", currentYear);
                el.innerHTML = text;
            }
        });
        document.title = trans.pageTitle;
        window.formSuccessMessage = trans.formSuccess;
        window.formErrorMessage = trans.formError;
        currentLangText.textContent = lang.toUpperCase();
        localStorage.setItem("adelinLang", lang);
    }

    // ---------------------------------
    // GÜNCELLENDİ: DİL MENÜSÜ MANTIĞI (TIKLAMA İLE)
    // ---------------------------------
    const langSwitcher = document.querySelector(".lang-switcher");
    const langToggle = document.querySelector(".lang-toggle");

    if (langToggle) {
        langToggle.addEventListener("click", (e) => {
            e.preventDefault();
            // .active class'ını ata elemente ekle/kaldır
            langSwitcher.classList.toggle("active");
        });
    }

    // Dil seçeneğine tıklandığında menüyü kapat
    langOptions.forEach(option => {
        option.addEventListener("click", (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute("data-lang");
            setLanguage(lang);
            
            // Menüyü kapat
            langSwitcher.classList.remove("active");
            
            // Mobil menüyü de kapat (açıksa)
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // Sayfada herhangi bir yere tıklayınca dil menüsünü kapat
    window.addEventListener("click", (e) => {
        // Tıklanan yer dil menüsünün içinde değilse
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove("active");
        }
    });

    // ---------------------------------
    // Mobil Menü (Hamburger)
    // (Dil menüsü kapatma mantığı eklendi)
    // ---------------------------------
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link:not(.lang-toggle)"); // Dil tetikleyicisi hariç

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // ---------------------------------
    // Scroll-Tabanlı Animasyonlar (Fade-in)
    // (Aynı, değişiklik yok)
    // ---------------------------------
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    fadeElements.forEach(el => { observer.observe(el); });

    // ---------------------------------
    // İletişim Formu Gönderme
    // (Aynı, değişiklik yok)
    // ---------------------------------
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    window.formSuccessMessage = translations.tr.formSuccess;
    window.formErrorMessage = translations.tr.formError;

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        try {
            const response = await fetch(event.target.action, { method: form.method, body: data, headers: { 'Accept': 'application/json' } });
            if (response.ok) {
                formStatus.textContent = window.formSuccessMessage;
                formStatus.style.color = "var(--accent-color)";
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) { formStatus.textContent = data["errors"].map(error => error["message"]).join(", "); } else { formStatus.textContent = window.formErrorMessage; }
                    formStatus.style.color = "#E57373";
                });
            }
        } catch (error) {
            formStatus.textContent = window.formErrorMessage;
            formStatus.style.color = "#E53E3E";
        }
    }
    if (form) { form.addEventListener("submit", handleSubmit); }

    // ---------------------------------
    // SAYFA YÜKLENİNCE DİLİ AYARLA
    // (Aynı, değişiklik yok)
    // ---------------------------------
    const savedLang = localStorage.getItem("adelinLang") || "tr";
    setLanguage(savedLang);

    // ---------------------------------
    // YENİ: HERO BÖLÜMÜ PARÇACIK ANİMASYONU
    // ---------------------------------
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = document.getElementById('hero').offsetHeight; // Hero bölümünün yüksekliği kadar

        let particlesArray = [];
        const numberOfParticles = 100; // Parçacık sayısı
        
        // Fare pozisyonu
        const mouse = {
            x: null,
            y: null,
            radius: 150 // Fare etki alanı
        };

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y - document.getElementById('hero').getBoundingClientRect().top; // Canvas'a göre Y pozisyonu
        });
        window.addEventListener('mouseout', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        });
        
        // Parçacık Sınıfı
        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Fare ile etkileşim (itme)
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 5;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 5;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 5;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 5;
                    }
                }
                
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }
        
        // Parçacıkları oluştur
        function init() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1; // 1 ile 3 arası
                let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2; // -0.2 ile +0.2 arası
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = 'rgba(212, 175, 55, 0.5)'; // Vurgu rengi (Altın)

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }
        
        // Parçacıklar arası çizgi çek
        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                                 + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(212, 175, 55, ${opacityValue})`; // Vurgu rengi
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        // Animasyon döngüsü
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }

        // Ekran yeniden boyutlandığında canvas'ı ayarla
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = document.getElementById('hero').offsetHeight;
            mouse.radius = 150;
            init(); // Parçacıkları yeniden oluştur
        });

        init();
        animate();
    }
});