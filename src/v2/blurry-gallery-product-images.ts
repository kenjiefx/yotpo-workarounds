import { ElementSelector, YotpoElement, ElementSelectors, AppLoader } from "../yotpo"
import { GalleryProductImage } from "../yotpo.v2"

/**
 * The reason why the product images in the Gallery lightbox, is because, it's designed
 * to retrieved the squared version of the image, instead of original. This solution
 * just "swaps out" the square version to the original
 */
(()=>{
    const getElement:ElementSelector = <SubElement extends YotpoElement>(element:SubElement) => document.querySelector(element.className)
    const getElements:ElementSelectors = <SubElement extends YotpoElement>(element:SubElement) => document.querySelectorAll(element.className)
    const loader: AppLoader = setInterval(()=>{
        const images = getElements<GalleryProductImage>({className:'.yotpo-lightbox-product-main-image'})
        images.forEach(image=>{
            const imgSrc = image.getAttribute('data-src')
            if (null!==imgSrc&&imgSrc.includes('square')) {
                const originalSrc = imgSrc.replace('square','original')
                image.setAttribute('data-src',originalSrc)
            }
        })
    },100)
})()

/** Remove the exports declaration above this line */