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
    const path = window.location.pathname;
    if (path === "/" || path.includes("category")) return;

    // === 1. В абзацы: R-A-15940482-1 ===
    const paragraphs = document.querySelectorAll("main p");
    const maxAds = 5;
    let insertedAds = 0;

    for (let i = 1; i < paragraphs.length && insertedAds < maxAds; i += 5) {
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

    // === 2. Блок R-A-15940482-4 после </main> ===
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

    // === 3. Полноэкранный блок R-A-15940482-5 ===
    window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
            blockId: "R-A-15940482-5",
            type: "fullscreen",
            platform: "desktop"
        });
    });

    // === 4 и 5. Прилипающие блоки (только на десктопе) ===
    if (window.innerWidth >= 1024) {
    const createStickyAd = (id, blockId, side) => {
        let wrapper = null;

        const renderAd = () => {
            if (!wrapper || !document.body.contains(wrapper)) {
                wrapper = document.createElement("div");
                wrapper.style.cssText = `
                    position: fixed;
                    top: 90px;
                    ${side}: 0;
                    z-index: 9999;
                    max-width: 300px;
                `;

                const adContainer = document.createElement("div");
                adContainer.id = id;

                wrapper.appendChild(adContainer);
                document.body.appendChild(wrapper);
            } else {
                const adContainer = wrapper.querySelector(`#${id}`);
                if (adContainer) adContainer.innerHTML = "";
            }

            const adContainer = document.getElementById(id);
            if (adContainer) {
                adContainer.innerHTML = ``;
            }

            window.yaContextCb.push(() => {
                Ya.Context.AdvManager.render({
                    blockId: blockId,
                    renderTo: id
                });
            });
        };

        renderAd();

        const refreshInterval = blockId === "R-A-15940482-3" ? 45000 : 55000;
        setInterval(() => {
            renderAd();
        }, refreshInterval);
    };
    createStickyAd("yandex_rtb_R-A-15940482-3", "R-A-15940482-3", "left");
    // Moe.video
    const adContainer = document.createElement("div");
    adContainer.id = "mvcontentroll";
    document.body.appendChild(adContainer);

    const script = document.createElement("script");
    script.src = "https://cdn1.moe.video/p/cr.js";
    script.onload = () => {
        addContentRoll({
            element: '#mvcontentroll',
            width: '100%',
            placement: 10444,
            promo: true,
            advertCount: 50,
            slot: 'page',
            sound: 'onclick',
            deviceMode: 'all',
            background: 'none',
            fly: {
                mode: 'always',
                animation: 'fly',
                width: 450,
                closeSecOffset: 10,
                position: 'bottom-right',
                indent: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
                positionMobile: 'bottom',
            },
        });
    };
    document.body.appendChild(script);
}
