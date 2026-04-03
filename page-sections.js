function renderSharedSections() {
    document.getElementById('shared-sections').innerHTML = `
    <!-- Beta Section -->
    <section class="section-full-image alpha-section" id="alpha-section">
        <div style="position: absolute; inset: 0; background: hsl(0 0% 0% / 0.35); z-index: 0;"></div>
        <picture style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;">
            <source media="(max-width: 768px)" srcset="images/ns-train-horizontal-1000w.webp" type="image/webp">
            <source media="(max-width: 1024px)" srcset="images/ns-train-horizontal-1600w.webp" type="image/webp">
            <source srcset="images/ns-train-horizontal-2400w.webp" type="image/webp">
            <img src="images/ns-train-horizontal-1600w.jpg" alt="" loading="lazy"
                style="width: 100%; height: 100%; object-fit: cover; object-position: center bottom;">
        </picture>
        <div class="full-image-overlay">
            <h2>${t('beta.h2')}</h2>
            <p class="beta-subtitle">${t('beta.subtitle')}</p>
            <form class="aanmeld-form" id="aanmeld-form-shared">
                <input type="hidden" name="access_key" value="9332ad0c-08e2-4730-a502-5131d56d698f">
                <input type="hidden" name="subject" value="Nieuwe aanmelding - Sentiom Beta">
                <input type="text" name="naam" placeholder="${t('beta.name')}" required>
                <input type="email" name="email" placeholder="${t('beta.email')}" required>
                <input type="tel" name="telefoon" placeholder="${t('beta.phone')}">
                <input type="text" name="gemeente" placeholder="${t('beta.municipality')}">
                <textarea name="vraag" placeholder="${t('beta.question')}"></textarea>
                <button type="submit" class="btn-primary btn-cta-large">${t('beta.submit')}</button>
            </form>
            <p class="form-success" id="form-success-shared">${t('beta.success')}</p>
        </div>
    </section>

    <!-- News Section -->
    <section id="news" class="section-features">
        <div class="features-container">
            <div class="features-header">
                <h2>${t('news.h2')}</h2>
            </div>
            <div class="features-grid">
                <a href="https://www.linkedin.com/posts/polderr_%F0%9D%90%96%F0%9D%90%9E-%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%AF%F0%9D%90%9E-%F0%9D%90%9A-%F0%9D%90%B0%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%AB-yesterday-activity-7393721594663149568-om1M" target="_blank" class="feature-card" style="text-decoration: none; color: inherit;">
                    <picture>
                        <source srcset="images/hackaton-400w.webp 400w, images/hackaton-600w.webp 600w, images/hackaton-800w.webp 800w" type="image/webp">
                        <img src="images/hackaton-600w.jpg"
                            srcset="images/hackaton-400w.jpg 400w, images/hackaton-600w.jpg 600w, images/hackaton-800w.jpg 800w"
                            sizes="(max-width: 768px) 100vw, 362px"
                            alt="Team DataDoor - Hackathon November 2025"
                            class="feature-card-image" loading="lazy">
                    </picture>
                    <div class="feature-card-content">
                        <h3>${t('news.article1')}</h3>
                        <p>November 2025</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
`;

    document.getElementById('aanmeld-form-shared').addEventListener('submit', async function (e) {
        e.preventDefault();
        const data = new FormData(this);
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
        if (res.ok) {
            this.style.display = 'none';
            document.getElementById('form-success-shared').style.display = 'block';
        }
    });
}

renderSharedSections();
