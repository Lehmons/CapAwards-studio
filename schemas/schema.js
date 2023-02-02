// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

//blocks
import HeadingOneTwoThreeNormalSmall from "./blocks/headingOneTwoThreeNormalSmall";
import Normal from "./blocks/normal";
import Simple from "./blocks/simple";

//documents
import Menu from "./documents/menu";
import Page from "./documents/page";
import Footer from "./documents/footer";
import Home from "./documents/home";
import General from "./documents/general";
import Faq from "./documents/faq";
import News from "./documents/news";
import StaticPage from "./documents/staticPage";

//objects
import ImageBlock from "./objects/imageBlock";
import ImageTextBlock from "./objects/imageTextBlock";
import ImageTextBlockBlue from "./objects/imageTextBlockBlue";
import FooterLink from "./objects/footerLink";
import TextBlock from "./objects/textBlock";
import QuoteBlock from "./objects/quoteBlock";
import Quotes from "./objects/quotes";
import SocialMedia from "./objects/socialMedia";
import BlueTextBlock from "./objects/blueTextBlock";
import SilverTextBlock from "./objects/silverTextBlock";
import LinkedPage from "./objects/linkedPage";
import NavShimmer from "./objects/navShimmer";
import Accordion from "./objects/accordion";
import GeneralQuotes from "./objects/generalQuotes";
import GeneralQuoteBlock from "./objects/generalQuoteBlock";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    GeneralQuotes,
    GeneralQuoteBlock,
    Faq,
    Accordion,
    News,
    NavShimmer,
    Menu,
    Home,
    General,
    Page,
    Footer,
    ImageBlock,
    ImageTextBlock,
    ImageTextBlockBlue,
    FooterLink,
    SocialMedia,
    TextBlock,
    QuoteBlock,
    Quotes,
    BlueTextBlock,
    SilverTextBlock,
    LinkedPage,
    HeadingOneTwoThreeNormalSmall,
    Normal,
    Simple,
    StaticPage,
  ]),
});
