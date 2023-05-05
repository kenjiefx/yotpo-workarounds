import { YotpoElement } from "./yotpo"

export type ReviewWidget = YotpoElement & {
    className: '.yotpo .yotpo-main-widget'
}

export type StarRatingsWidget = YotpoElement & {
    className: '.yotpo .bottomLine'
}

export type GalleryProductImage = YotpoElement & {
    className: '.yotpo-lightbox-product-main-image'
}