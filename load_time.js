(() => {
    window.onload = () => {
        const entry = performance.getEntriesByType("navigation")[0];
        const pageLoadTime = entry.loadEventStart - entry.loadEventEnd;

        const paragraph = document.createElement('p');
        paragraph.innerHTML = `Время загрузки страницы <strong>${pageLoadTime.toFixed(2)} ms</strong>`;

        document.querySelector('footer').appendChild(paragraph);
    };
} )();