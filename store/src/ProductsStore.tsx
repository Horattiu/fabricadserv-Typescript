// Define the Product interface
interface Product {
  id: string;
  category: string;
  title: string;
  price: number;
  imageUrl: string;
  model: string;
  texturePath: string;
  size: string;
  moreImages: string[];
}

// Create an array of products with type annotations
const productsArray: Product[] = [
  {
    id: "price_1NQZAYKeASpJmZ80DtPpaXwe",
    category: "desks",
    title: "Coffee Table",
    price: 20.0,
    imageUrl: "/Gallery/pic1.jpg",
    model: "/model/scene.gltf",
    texturePath: "",
    size: "20 x 60",
    moreImages: [
      "/Gallery/pic2.jpg",
      "/Gallery/pic4.jpg",
      // Add more image URLs here
    ],
  },
  {
    id: "price_1NQZAYKeASpJmZ80DtPpaXwe",
    category: "desks",
    title: "Coffee Table 2",
    price: 20.0,
    imageUrl: "/Gallery/pic1.jpg",
    model: "/model/scene.gltf",
    texturePath: "",
    size: "20 x 60",
    moreImages: [
      "/Gallery/pic2.jpg",
      "/Gallery/pic4.jpg",
      // Add more image URLs here
    ],
  },
  {
    id: "price_1NQZPCKeASpJmZ80zmUGBPRp",
    category: "chairs",
    title: "chair",
    price: 10.0,
    imageUrl: "/Gallery/pic2.jpg",
    model: "/model2/scene.gltf",
    texturePath: "",
    size: "80 x 200",
    moreImages: ["/Gallery/pic2.jpg", "/Gallery/pic4.jpg"],
  },
  {
    id: "price_1NQZPCKeASpJmZ80zmUGBPRp",
    category: "chairs",
    title: "chair 2",
    price: 10.0,
    imageUrl: "/Gallery/pic2.jpg",
    model: "/model2/scene.gltf",
    texturePath: "",
    size: "80 x 200",
    moreImages: ["/Gallery/pic2.jpg", "/Gallery/pic4.jpg"],
  },
  {
    id: "price_1NQZSkKeASpJmZ80zUzbejyO",
    category: "toys",
    title: "Toy",
    price: 32.0,
    imageUrl: "/Gallery/pic3.jpg",
    model: "/model3/scene.gltf",
    texturePath: "",
    size: "100 x 400",
    moreImages: ["/Gallery/pic2.jpg", "/Gallery/pic4.jpg"],
  },
  {
    id: "price_1NxTG6KeASpJmZ80Kb7u8uOP",
    category: "tables",
    title: "desk 2",
    price: 32.0,
    imageUrl: "/Gallery/pic3.jpg",
    model: "/model4/scene.gltf",
    texturePath: "",
    size: "100 x 400",
    moreImages: ["/Gallery/pic2.jpg", "/Gallery/pic4.jpg"],
  },
  {
    id: "price_1NyKUHKeASpJmZ80MyOVo46c",
    category: "beds",
    title: "chair 3",
    price: 200,
    imageUrl: "/Gallery/pic1.jpg",
    model: "/model5/scene.gltf",
    texturePath: "",
    size: "100 x 400",
    moreImages: ["/Gallery/pic2.jpg", "/Gallery/pic4.jpg"],
  },
];

// Define the getProductData function with a type annotation for the parameter and return value
function getProductData(id: string): Product | undefined {
  const productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID " + id);
    return undefined;
  }

  return productData;
}

// Export the productsArray and getProductData
export { productsArray, getProductData };
