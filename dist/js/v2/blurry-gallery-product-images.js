/**
 * The reason why the product images in the Gallery lightbox, is because, it's designed
 * to retrieved the squared version of the image, instead of original. This solution
 * just "swaps out" the square version to the original
 */
(() => {
    const getElement = (element) => document.querySelector(element.className);
    const getElements = (element) => document.querySelectorAll(element.className);
    const loader = setInterval(() => {
        const images = getElements({ className: '.yotpo-lightbox-product-main-image' });
        images.forEach(image => {
            const imgSrc = image.getAttribute('data-src');
            if (null !== imgSrc && imgSrc.includes('square')) {
                const originalSrc = imgSrc.replace('square', 'original');
                image.setAttribute('data-src', originalSrc);
            }
        });
    }, 100);
})();
export {};
