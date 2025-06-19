(function() {
    // существующий код

    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
    ym(102483727, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    // === 1. Блок R-A-15940482-1 ===
    const paragraphs = document.querySelectorAll("main p");
    const maxAds = 5;
    let insertedAds = 0;

    for (let i = 2; i < paragraphs.length && insertedAds < maxAds; i += 6) {
        const adId = `yandex_rtb_R-A-15940482-1-${insertedAds}`;
        const adContainer = document.createElement("div");
        adContainer.id = adId;
        paragraphs[i].parentNode.insertBefore(adContainer, paragraphs[i].nextSibling);

        window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
                blockId: "R-A-15940482-1",
                renderTo: adId
            });
        });

        insertedAds++;
    }

    // === 2. Блок R-A-15940482-4 (после </main>) ===
    const main = document.querySelector("main");
    if (main) {
        const feedAdContainer = document.createElement("div");
        feedAdContainer.id = "yandex_rtb_R-A-15940482-4";
        main.insertAdjacentElement("afterend", feedAdContainer);

        window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
                blockId: "R-A-15940482-4",
                renderTo: "yandex_rtb_R-A-15940482-4",
                type: "feed"
            });
        });
    }

    // === 3. Блок R-A-15940482-5 (fullscreen, перед </body>) ===
    window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
            blockId: "R-A-15940482-5",
            type: "fullscreen",
            platform: "desktop"
        });
    });

    // === 4 и 5. Прилипающие блоки (слева и справа) ===
    if (window.innerWidth >= 1024) { // Только на ПК
        const createStickyAd = (id, blockId, side) => {
            const container = document.createElement("div");
            container.id = id;
            container.style.cssText = `
                position: fixed;
                top: 100px;
                ${side}: 0;
                max-width: 400px;
                z-index: 9999;
                background: white;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            `;

            const closeBtn = document.createElement("div");
            closeBtn.innerHTML = `
                <svg width="60" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.793 6.793a1 1 0 000 1.414L28.586 12l-3.793 3.793a1 1 0 001.414 1.414L30 13.414l3.793 3.793a1 1 0 001.414-1.414L31.414 12l3.793-3.793a1 1 0 00-1.414-1.414L30 10.586l-3.793-3.793a1 1 0 00-1.414 0z" fill="#575C66"/>
                </svg>
            `;
            closeBtn.style.cssText = "position:absolute;top:0;right:0;cursor:pointer;padding:2px;";
            closeBtn.onclick = () => container.remove();
            container.appendChild(closeBtn);

            const adDiv = document.createElement("div");
            adDiv.id = `inner-${id}`;
            container.appendChild(adDiv);
            document.body.appendChild(container);

            window.yaContextCb.push(() => {
                Ya.Context.AdvManager.render({
                    blockId: blockId,
                    renderTo: `inner-${id}`
                });
            });
        };

        createStickyAd("yandex_rtb_R-A-15940482-3", "R-A-15940482-3", "left");
        createStickyAd("yandex_rtb_R-A-15940482-2", "R-A-15940482-2", "right");
    }
});
