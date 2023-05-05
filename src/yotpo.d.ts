/**
 * A simple mechanism of waiting until the widget is 
 * fully-rendered on the page. Why setInterval? because 
 * we wanted to keep on checking until the rendering 
 * of the widget is completed.
 */
export type AppLoader = ReturnType<typeof setInterval>

/**
 * A Base type for all Yotpo elements
 */
export type YotpoElement = Partial<Element> & {
    className: string
}

/**
 * A way for you to implement a method to get an element
 */
export type ElementSelector = <SubElement extends YotpoElement>(element:SubElement) => HTMLElement

/**
 * A way for you to implement your own solution of retrieving multiple elements
 * @returns NodeListOf<Element>
 */
export type ElementSelectors = <SubElement extends YotpoElement>(element:SubElement) => NodeListOf<Element>