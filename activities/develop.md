---
type: activity
title: Activities
subtitle: Develop
---

## Summary

The purpose of this guideline is to ensure that all non-text content is also available in text. Text refers to electronic text, not an image of text. Electronic text has the unique advantage that it is presentation neutral.

## Why

Electronic text, such as ASCII or Unicode, can be rendered visually, auditorily, tactilely, or by any combination. As a result, information rendered in electronic text can be presented in whatever form best meets the needs of the user. It can also be easily enlarged, spoken aloud so that it is easier for people with reading disabilities to understand, or rendered in whatever tactile form best meets the needs of a user.

## Who it helps

- People who have difficulty perceiving visual content can use assistive technology to read text aloud, present it visually, or convert it to braille.
- Text alternatives may help some people who have difficulty understanding the meaning of photographs, drawings, and other images (e.g., line drawings, graphic designs, paintings, three-dimensional representations), graphs, charts, animations, etc.
- People who are deaf-blind can read the text in braille.
- People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding automatic translation of text into sign language.
- Text alternatives support the ability to search for non-text content and to repurpose content in a variety of ways.
- People using mobile devices can turn off images, especially for data-roaming.
- Search engines can index images.

## How

Most platforms provide ways of associating alternative text with an image. For example, Web pages, electronic documents like PDF and ePub, and electronic books (ebooks) use HTML and ARIA semantic code to label images, graphics, icons, or buttons with text alternatives. Mobile platforms provide code to associate an image with a text description. Audio and other media with a sound track can provide text transcripts. (Captions for audio are covered in another guideline.)

## Planning responsibilities

- Ensure that text alternatives are equivalents for non-text content.
- Text alternatives must convey the purpose of an image or function to provide an equivalent user experience. For instance, an appropriate text alternative for a search button would be “search” rather than “magnifying lens”.
- For every image, write alternative text that provides the information or function of the image. For purely decorative images, there is no need to write alternative text but the images need to be hidden correctly from assistive technology.

## Tips for collaboration

- Designers, Editors and/or Content Managers know what non-text contents convey.
- Developers use semantic attributes/properties to provide text alternatives.
- QA testers know to test for appropriate text alternatives, including semantic code evaluation.
- Search Engine Optimizers (SEO) know how to maximize the increase in search engine visibility provided by text alternatives. However, the ability to leverage this increase cannot cause any text alternative guidelines to be broken.

## Planning for each stage

### How to get started early

- Providing text alternatives will help all users and maximize potentials by making non-text content machine-readable.
    - Early project meetings need to discuss accessibility and the importance of improving the usability of the site for people with disabilities. This should include training on how to create good quality text alternatives.
    - Decide who will create text alternatives for images and who will review and approve it.
- Appropriate alternative text is not an exact science. Some people prefer most images to have more detailed description; and others prefer much less description.
    - Consider conducting usability testing on existing or similar products to better understand people's preferences.

### How to remediate

- You don't usually see the alt text on a web page, it is in the web page markup.
- Every image should include text alternative in the code.
    - If an image conveys information useful for interacting with or understanding the web page content, then it needs alternative text.
    - If an image is just decorative and people don't need to know about the image, then it should be implemented so that assistive technologies will ignore it.
- Automated tests can tell you if alt is missing.
- To determine if the alternative text is appropriate, you need to see the image and judge it in context.
    - The text needs to convey the same meaning as the image. That is, if someone cannot see the image, they get the important information from the image in the alternative text.
    - Alternative text depends on context. For example, for an image of a dog on a kennel club website, the alt text might include the breed of the dog; however, the same image on a dog park website may be there just to make the page more attractive, and the image might not need any alt text (and should have null alt). One way to help think about appropriate alt text is: if you were helping someone read and interact with the web page and they cannot see it, what would you say about the image?
    - Images that are functional — for example, images that initiate actions (like submit buttons) and linked images (like in navigation) — need alt text that is the functional equivalent.
    - If there is text in the image — for example, in a logo — that text needs to be included in the alt text.
    - If the image has complex information — such as charts or graphs — the image should have a short alt text to identify the image, and then the detailed description of the information should be provided elsewhere (for example, in a data table).

## Design responsibilities

- Work with content authors and developers to provide text alternatives for non-text content.
- Share what the non-text content you designed is supposed to convey to users.

## Designer tips

- Provide a place in your design for text alternatives for images and media. For example, you might need:

- Text along with icons and graphical buttons
Captions and descriptions for complex graphs

## User testing and meaningful involvement

- As early as possible in your project, learn the basics of how people with disabilities use the web by reading online resources and watching videos.

- [Ilya, senior staff member who is blind](https://www.w3.org/WAI/people-use-web/user-stories/#accountant) | How People with Disabilities Use the Web > Stories of Web Users
- [Preety, middle school student with Attention Deficit Hyperactivity Disorder and Dyslexia](https://www.w3.org/WAI/people-use-web/user-stories/#classroomstudent) | How People with Disabilities Use the Web > Stories of Web Users
- [Kaseem, teenager who is deaf and blind](https://www.w3.org/WAI/people-use-web/user-stories/#teenager) | How People with Disabilities Use the Web > Stories of Web Users
- [Video: Text to Speech](https://www.w3.org/WAI/perspective-videos/speech/) | Web Accessibility Perspectives

- Determine if the assistive technology user perceives the text alternative and gets equivalent information from it.

## Technical responsibilities

- Ensure that alternative text for images is added to all informational and functional images.
- Use empty alternative text, alt="" for decorative images, or include them in the CSS instead.
- Text alternatives are usually provided by those responsible for written content.

## Technical tips

- If the image is not important for understanding the content — for example, it is just decoration or eye candy — it should be implemented so that assistive technology ignore it. One way to help determine if an image should have null alt is to ask yourself: If the image was removed, would the user still get all the information from the page?
- The alternative text does not need to include the words button, link, or image of. (Screen readers automatically provide that information.)
- If the image is sufficiently described in the text — for example, a simple diagram illustrating what's written in the web page text — it can have brief alt text such as Diagram of work flow as describe above.
- In HTML (which is web page code, called markup), alt is an attribute of the image element, and other elements. (So alt tag is technically incorrect; the correct terminology is alt attribute, or you can say alt text.) It looks like this in markup: > img alt="WAI logo" src="/wai/logo.png"<

- **A data chart:** A bar chart compares how many widgets were sold in June, July, and August. The short label says, Figure one - Sales in June, July and August. The longer description identifies the type of chart, provides a high-level summary of the data, trends and implications comparable to those available from the chart. Where possible and practical, the actual data is provided in a table.
- **An audio recording of a speech:** The link to an audio clip says, Chairman's speech to the assembly. A link to a text transcript is provided immediately after the link to the audio clip.
- **An animation that illustrates how a car engine works:** An animation shows how a car engine works. There is no audio and the animation is part of a tutorial that describes how an engine works. Since the text of the tutorial already provides a full explanation, the image is an alternative for text and the text alternative includes only a brief description of the animation and refers to the tutorial text for more information.
- **A traffic Web camera:** A Web site allows users to select from a variety of Web cameras positioned throughout a major city. After a camera is selected, the image updates every two minutes. A short text alternative identifies the Web camera as traffic Web camera. The site also provides a table of travel times for each of the routes covered by the Web cameras. The table is also updated every two minutes.
- **A photograph of an historic event in a news story:** A photograph of two world leaders shaking hands accompanies a news story about an international summit meeting. The text alternative says, President X of Country X shakes hands with Prime Minister Y of country Y.
- **A photograph of a historic event in content discussing diplomatic relationships:** The same image is used in a different context intended to explain nuances in diplomatic encounters. The image of the president shaking hands with the prime minister appears on a Web site discussing intricate diplomatic relationships. The first text alternative reads, President X of country X shakes hands with Prime Minister Y of country Y on January 2, 2009. An additional text alternative describes the room where the leaders are standing as well as the expressions on the leaders' faces, and identifies the other people in the room. The additional description might be included on the same page as the photograph or in a separate file associated with the image through a link or other standard programmatic mechanism.
- **An audio recording of a press conference:** A Web page includes a link to an audio recording of a press conference. The link text identifies the audio recording. The page also links to a text transcript of the press conference. The transcript includes a verbatim record of everything the speakers say. It identifies who is speaking as well as noting other significant sounds that are part of the recording, such as applause, laughter, questions from the audience, and so on.
- **An e-learning application:** An e-learning application uses sound effects to indicate whether or not the answers are correct. The chime sound indicates that the answer is correct and the beep sound indicates that the answer is incorrect. A text description is also included so that people who can't hear or understand the sound understand whether the answer is correct or incorrect.
- **A linked thumbnail image:** A thumbnail image of the front page of a newspaper links to the home page of the Smallville Times. The text alternative says Smallville Times.
- **The same image used on different sites:** Different alternatives for an image of the world: An image of the world that is used on a travel site as a link to the International Travel section has the text alternative International Travel. The same image is used as a link on a university Web site with the text alternative International Campuses.
- **An image map:** An image of a building floor plan is interactive, allowing the user to select a particular room and navigate to a page containing information about that room. The short text alternative describes the image and its interactive purpose: Building floor plan. Select a room for more information.

## W3C Resources

- [Video: Text to Speech | Web Accessibility Perspectives](https://www.w3.org/WAI/perspective-videos/speech/)
- [Images Concepts | Web Accessibility Tutorials - Guidance on how to create websites that meet WCAG](https://www.w3.org/WAI/tutorials/images/)
- [an alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Image text alternatives (alt text) | Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/#images)
- [HTML 5.3 4.7.5.1.3. A link or button containing nothing but an image](https://www.w3.org/TR/html53/semantics-embedded-content.html#a-link-or-button-containing-nothing-but-an-image)
- [HTML 5.3 section 4.7.5.1.19 Logos, insignia, flags, or emblems](https://www.w3.org/TR/html53/semantics-embedded-content.html#logos-insignia-flags-or-emblems)

