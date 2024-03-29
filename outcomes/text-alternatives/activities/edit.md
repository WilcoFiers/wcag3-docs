---
subtitle: Edit
---

- **Choosing appropriate text alternatives:**  
    Imagine that you’re reading the web page aloud over the phone to someone who needs to understand the page. This should help you decide what (if any) information or function the images have. If they appear to have no informative value and aren’t links or buttons, it’s probably safe to treat them as [decorative](https://www.w3.org/WAI/tutorials/images/decorative/).
    
- **Prioritize information in text alternative:**  
    Aim to put the most important information at the beginning.
    
- **Length of the text alternative:**  
    The `alt` text should be the most concise description possible of the image’s purpose. If anything more than a short phrase or sentence is needed, it would be better to use one of the long description methods discussed in [complex images](https://www.w3.org/WAI/tutorials/images/complex/).
    
- **Responsive design:**  
    Icons with text labels will often drop the text labels when viewed on smaller screens. Ensure that icons are readable at that size, understandable without text, and have text descriptions.
    
- **Punctuation within `alt` attributes:**
    
    - As for any text, using punctuation in the text alternative makes the information easier to understand. In particular, remember to add space characters in the `alt` text when there’s no space character between the image and adjacent text, to avoid having words running together when they are read by a screen reader.
        
    - If you use a null (empty) text alternative (`alt=""`) to hide decorative images, make sure that there is no space character in between the quotes. If a space character is present, the image may not be effectively hidden from assistive technologies. For instance, some screen readers will still announce the presence of an image if a space character is put between the quotes.
        
- **Superfluous information in the text alternative:**  
    Usually, there’s no need to include words like “image”, “icon”, or “picture” in the alt text. People who can see will know this already, and screen readers announce the presence of an image. In some situations, it may be important to distinguish between paintings, photographs, or illustrations, etc., but it’s best to avoid the more generic use of the terms.
    
- **SVG graphics:**
    
    - SVG graphics can be referenced in the `src` attribute of an `<img>` element like other image formats (PNG, JPEG, GIF). In this case, the examples of this tutorial can be used with SVG as well.
        
    - As SVG images consist of tags like HTML, their code can also be used in HTML5 directly. In this case you can provide a text alternative in a `<title>` element within the SVG image. To improve accessibility support, that title should be referenced from an `aria-labelledby` attribute of the `<svg>` element, for example:
        
    
    `<svg aria-labelledby="svgtitle1"> <title id="svgtitle1">Settings</title> [other svg code] </svg>`
    
- **Logos:**  
    Logo images with text are exempt from some of the accessibility requirements. For instance, there is no minimum contrast requirement.