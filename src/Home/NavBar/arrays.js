import cart from "../../assets/cart.svg";
import person from "../../assets/person.svg";
import search from "../../assets/search.svg";

const navigation = [
  { name: "Women", href: "/products", current: true },
  { name: "Men", href: "/products", current: false },
  { name: "About", href: "/aboutUs", current: false },
  { name: "Contact", href: "#footer", current: false },
];

const about = [
  { name: "About", href: "/aboutUs", current: true },
  { name: "Stores", href: "/stores", current: false },
  { name: "Factories", href: "/aboutUs#section2", current: false },
  { name: "Inviromental Initiatives", href: "/aboutUs#section4", current: false },
  { name: "Our Carbon Commitment", href: "/aboutUs#section6", current: false },
  { name: "Annual Impact Report", href: "/aboutUs#section6", current: false },
  { name: "Cleaner Fashion", href: "/aboutUs#section4", current: false }
];

const icons = [
  { name: "search", URL: search, href: "/products" },
  { name: "person", URL: person, href: "/products" },
  { name: "cart", URL: cart, href: "/products" },
];
export default navigation;
export {about,icons};