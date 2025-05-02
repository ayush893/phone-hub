import React from "react";

// Static data for phones with more details
const phoneList = [
  {
    id: 1,
    name: "Samsung Galaxy S21",
    price: "₹69,999",
    image: "https://via.placeholder.com/150", // You can replace with real image URL
    link: "/phones/samsung-galaxy-s21",
    description: "The Samsung Galaxy S21 features a 120Hz AMOLED display, 5G, and a triple-camera system.",
    camera: "64MP + 12MP + 12MP",
    display: "6.2 inches, Dynamic AMOLED 2X, 120Hz",
    battery: "4000 mAh, Fast Charging",
    processor: "Exynos 2100",
    ram: "8GB",
    storage: "128GB"
  },
  {
    id: 2,
    name: "iPhone 13",
    price: "₹79,999",
    image: "https://via.placeholder.com/150", // You can replace with real image URL
    link: "/phones/iphone-13",
    description: "The iPhone 13 has a new A15 Bionic chip, improved battery life, and stunning camera upgrades.",
    camera: "12MP + 12MP",
    display: "6.1 inches, Super Retina XDR OLED",
    battery: "3240 mAh, Fast Charging",
    processor: "A15 Bionic Chip",
    ram: "4GB",
    storage: "128GB"
  },
  {
    id: 3,
    name: "OnePlus 9 Pro",
    price: "₹64,999",
    image: "https://via.placeholder.com/150", // You can replace with real image URL
    link: "/phones/oneplus-9-pro",
    description: "OnePlus 9 Pro offers flagship features like Snapdragon 888, a quad-camera setup, and 65W fast charging.",
    camera: "48MP + 50MP + 8MP + 2MP",
    display: "6.7 inches, Fluid AMOLED, 120Hz",
    battery: "4500 mAh, Warp Charging 65W",
    processor: "Snapdragon 888",
    ram: "12GB",
    storage: "256GB"
  },
  {
    id: 4,
    name: "Xiaomi Mi 11X",
    price: "₹29,999",
    image: "https://via.placeholder.com/150", // You can replace with real image URL
    link: "/phones/xiaomi-mi-11x",
    description: "The Xiaomi Mi 11X is a performance beast with a Snapdragon 870 chip and a high-refresh-rate AMOLED display.",
    camera: "48MP + 8MP + 5MP",
    display: "6.67 inches, AMOLED, 120Hz",
    battery: "4520 mAh, Fast Charging 33W",
    processor: "Snapdragon 870",
    ram: "6GB",
    storage: "128GB"
  },
  {
    id: 5,
    name: "Realme GT 5G",
    price: "₹37,999",
    image: "https://via.placeholder.com/150", // You can replace with real image URL
    link: "/phones/realme-gt-5g",
    description: "Realme GT 5G comes with Snapdragon 870, 120Hz AMOLED display, and 65W SuperDart Charging.",
    camera: "64MP + 8MP + 2MP",
    display: "6.43 inches, Super AMOLED, 120Hz",
    battery: "4500 mAh, SuperDart Charging 65W",
    processor: "Snapdragon 870",
    ram: "8GB",
    storage: "128GB"
  },
  {
    id: 6,
    name: "Oppo Reno 6 Pro",
    price: "₹39,999",
    image: "https://via.placeholder.com/150", // You can replace with real image URL
    link: "/phones/oppo-reno-6-pro",
    description: "Oppo Reno 6 Pro offers a 6.55-inch AMOLED display with 90Hz refresh rate, and a powerful MediaTek Dimensity 1200 chipset.",
    camera: "64MP + 8MP + 2MP + 2MP",
    display: "6.55 inches, AMOLED, 90Hz",
    battery: "4500 mAh, Fast Charging 65W",
    processor: "MediaTek Dimensity 1200",
    ram: "12GB",
    storage: "256GB"
  },
];

const MainContent = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Phone Listings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {phoneList.map((phone) => (
          <div
            key={phone.id}
            className="phone-card border rounded-lg p-4 shadow-lg transition duration-300 hover:shadow-xl"
          >
            <img
              src={phone.image}
              alt={phone.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{phone.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{phone.description}</p>
            <p className="text-lg font-bold text-primary mb-2">{phone.price}</p>

            <div className="specs mb-4">
              <p><strong>Camera:</strong> {phone.camera}</p>
              <p><strong>Display:</strong> {phone.display}</p>
              <p><strong>Battery:</strong> {phone.battery}</p>
              <p><strong>Processor:</strong> {phone.processor}</p>
              <p><strong>RAM:</strong> {phone.ram}</p>
              <p><strong>Storage:</strong> {phone.storage}</p>
            </div>

            <a
              href={phone.link}
              className="mt-4 inline-block bg-accent text-white py-2 px-4 rounded-lg text-center transition hover:bg-accent-dark"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
