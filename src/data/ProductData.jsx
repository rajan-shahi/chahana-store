// five jeans image
import img1 from "../images/Classic Slim fit jeans.jpg";
import img2 from "../images/High waisted skinny jeans.jpg";
import img3 from "../images/Relaxed Fit Cargo Jeans.jpg";
import img4 from "../images/Distressed Boyfriend Jeans.jpg";
import img5 from "../images/Stretchable Bootcut Jeans.jpg";
// five bags image
import img6 from "../images/Minimalist Tote Bag.jpg";
import img7 from "../images/Stylish Sling Bag.jpg";
import img8 from "../images/Hiking Backpack.jpg";
import img9 from "../images/Bohemian Crossbody Bag.jpg";
import img10 from "../images/Luxury Evening Clutch.jpg";
// five eye glasses image
import img11 from "../images/Modern Rectangle Eyeglasses.jpg";
import img12 from "../images/Luxury Oval Glasses.jpg";
import img13 from "../images/Sport Performance Glasses.jpg";
import img14 from "../images/Elegant Square Glasses.jpg";
import img15 from "../images/Vintage Round Eyeglasses.jpg";
// four shoes image
import img16 from "../images/Comfortable Sandals.jpg";
import img17 from "../images/Stylish Slip-On Shoes.jpg";
import img18 from "../images/High-Performance Hiking Boots.jpg";
import img19 from "../images/Comfort Running Shoes.jpg";
// five smart phone image
import img21 from "../images/PixelOne 6.jpg";
import img22 from "../images/VibeSmart V10.jpg";
import img23 from "../images/OnePlus Nord CE 3 Lite.jpg";
import img24 from "../images/Realme GT 7 Pro.jpg";
import img25 from "../images/iphone 16.jpg";
// four smart watch image
import img27 from "../images/Noise Pulse 2 max.jpg";
import img28 from "../images/Boat Lunar Discovery.jpg";
import img29 from "../images/Noise Pulse Go Buzz Smart.jpg";
import img30 from "../images/Boat wave call 2 plus.jpg";
// four laptop product image
import img31 from "../images/Acer ALG Gaming laptop 13th gen.jpg";
import img32 from "../images/Acer Aspire lite 12th gen.jpg";
import img33 from "../images/Acer nitro v gaming laptop 13th gen.jpg";
import img34 from "../images/Acer Travelmate Business Laptop.jpg";

const productData = {
  categories: {
    jeans: [
      {
        title: "Classic Slim Fit Jeans",
        brand: "DenimWorks",
        price: 3500,
        previous_price: 4000,
        discount_rate: 12.5,
        rating: 4.7,
        reviews: 1458,
        units_sold: 5210,
        images: img1,

        category: {
          gender: "Men",
          season: ["All Seasons"],
          use: ["Outdoor", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Blue", "Black", "Gray"],
          sizes: ["28", "30", "32", "34", "36", "38"],
        },
        description:
          "Premium slim-fit jeans crafted from durable stretch denim. Features a mid-rise waist, classic five-pocket styling, and a button fly closure. Perfect for everyday casual wear and outdoor adventures.",
        materials: "98% Cotton, 2% Elastane",
        wash_care: "Machine wash cold, tumble dry low.",
        store: {
          name: "DenimWorks Outlet",
          location: "Kathmandu, Nepal",
          established: "2010",
          is_verified: true,
        },
      },
      {
        title: "High-Waisted Skinny Jeans",
        brand: "Fashionista",
        price: 4200,
        previous_price: 4500,
        discount_rate: 6.7,
        rating: 4.5,
        reviews: 860,
        units_sold: 3250,
        images: img2,
        category: {
          gender: "Women",
          season: ["All Seasons"],
          use: ["Indoor", "Outdoor", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Indigo", "White", "Black"],
          sizes: ["24", "26", "28", "30", "32", "34"],
        },
        description:
          "Chic high-waisted skinny jeans with a flattering fit. Made from soft, stretchy denim for all-day comfort. Features a zip fly and metal button closure.",
        materials: "80% Cotton, 18% Polyester, 2% Spandex",
        wash_care: "Hand wash preferred, avoid bleach.",
        store: {
          name: "Fashionista Boutique",
          location: "Lalitpur, Nepal",
          established: "2015",
          is_verified: true,
        },
      },
      {
        title: "Relaxed Fit Cargo Jeans",
        brand: "UrbanStyle",
        price: 3800,
        previous_price: 4200,
        discount_rate: 9.5,
        rating: 4.3,
        reviews: 532,
        units_sold: 1780,
        images: img3,
        category: {
          gender: "Men",
          season: ["Winter", "Outdoor"],
          use: ["Outdoor", "Casual", "Workwear"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Khaki", "Olive Green", "Navy Blue"],
          sizes: ["30", "32", "34", "36", "38", "40"],
        },
        description:
          "Utility-inspired cargo jeans with a relaxed fit for easy movement. Equipped with multiple pockets for functionality. Made from heavyweight denim to withstand tough conditions.",
        materials: "100% Cotton",
        wash_care: "Machine wash warm, hang to dry.",
        store: {
          name: "DenimWorks Outlet",
          location: "Pokhara, Nepal",
          established: "2008",
          is_verified: true,
        },
      },
      {
        title: "Distressed Boyfriend Jeans",
        brand: "TrendyThreads",
        price: 5000,
        previous_price: 5500,
        discount_rate: 9.1,
        rating: 4.8,
        reviews: 789,
        units_sold: 2600,
        images: img4,
        category: {
          gender: "Women",
          season: ["Summer", "Spring"],
          use: ["Outdoor", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Light Blue", "Stone Wash"],
          sizes: ["26", "28", "30", "32", "34"],
        },
        description:
          "Trendy boyfriend jeans with an effortlessly casual vibe. Features a distressed finish, relaxed fit, and rolled-up hems. Ideal for pairing with crop tops or oversized shirts.",
        materials: "85% Cotton, 15% Polyester",
        wash_care: "Wash separately to prevent color transfer.",
        store: {
          name: "DenimWorks Outlet",
          location: "Biratnagar, Nepal",
          established: "2012",
          is_verified: false,
        },
      },
      {
        title: "Stretchable Bootcut Jeans",
        brand: "StyleCraft",
        price: 4500,
        previous_price: 4800,
        discount_rate: 6.3,
        rating: 4.6,
        reviews: 920,
        units_sold: 2950,
        images: img5,
        category: {
          gender: "Women",
          season: ["Winter", "Autumn"],
          use: ["Indoor", "Outdoor"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Dark Blue", "Black"],
          sizes: ["26", "28", "30", "32", "34"],
        },
        description:
          "Flattering bootcut jeans designed for maximum comfort. Stretchable denim material with a high-rise waist and smooth silhouette.",
        materials: "90% Cotton, 10% Spandex",
        wash_care: "Delicate machine wash, avoid bleach.",
        store: {
          name: "StyleCraft Emporium",
          location: "Dharan, Nepal",
          established: "2016",
          is_verified: true,
        },
      },
    ],
    bags: [
      {
        title: "Minimalist Tote Bag",
        brand: "PureStyle",
        price: 1800,
        previous_price: 2200,
        discount_rate: 18.18,
        rating: 4.4,
        reviews: 1025,
        units_sold: 3500,
        images: img6,
        category: {
          gender: "Women",
          season: ["All Seasons"],
          use: ["Casual", "Shopping"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Gray", "White"],
          sizes: ["One Size"],
        },
        description:
          "A minimalist design tote bag with spacious compartments and a sturdy build. Ideal for shopping and casual outings.",
        materials: "Cotton Canvas",
        wash_care: "Machine wash cold.",
        store: {
          name: "PureStyle Store",
          location: "Kathmandu, Nepal",
          established: "2018",
          is_verified: true,
        },
      },
      {
        title: "Stylish Sling Bag",
        brand: "UrbanTrend",
        price: 1500,
        previous_price: 1800,
        discount_rate: 16.67,
        rating: 4.3,
        reviews: 880,
        units_sold: 3000,
        images: img7,
        category: {
          gender: "Women",
          season: ["All Seasons"],
          use: ["Casual", "Evening"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Red", "Black", "Gold"],
          sizes: ["One Size"],
        },
        description:
          "A stylish sling bag perfect for evening outings, featuring a chic design and adjustable strap.",
        materials: "Synthetic Leather",
        wash_care: "Wipe with a soft cloth.",
        store: {
          name: "UrbanTrend Boutique",
          location: "Kathmandu, Nepal",
          established: "2017",
          is_verified: true,
        },
      },
      {
        title: "Hiking Backpack",
        brand: "TrailBlazer",
        price: 4500,
        previous_price: 5000,
        discount_rate: 10.0,
        rating: 4.7,
        reviews: 1450,
        units_sold: 5000,
        images: img8,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Outdoor", "Adventure"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Olive", "Black", "Gray"],
          sizes: ["One Size"],
        },
        description:
          "A rugged hiking backpack with multiple compartments, adjustable straps, and a water-resistant exterior.",
        materials: "Nylon",
        wash_care: "Spot clean with a damp cloth.",
        store: {
          name: "TrailBlazer Outdoors",
          location: "Kathmandu, Nepal",
          established: "2013",
          is_verified: true,
        },
      },
      {
        title: "Bohemian Crossbody Bag",
        brand: "BohoChic",
        price: 2500,
        previous_price: 2800,
        discount_rate: 10.71,
        rating: 4.6,
        reviews: 970,
        units_sold: 2200,
        images: img9,
        category: {
          gender: "Women",
          season: ["All Seasons"],
          use: ["Casual", "Evening"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Tan", "Black", "Burgundy"],
          sizes: ["One Size"],
        },
        description:
          "A bohemian-style crossbody bag with intricate design details and a spacious interior.",
        materials: "Suede, Leather",
        wash_care: "Wipe clean with a dry cloth.",
        store: {
          name: "BohoChic Boutique",
          location: "Kathmandu, Nepal",
          established: "2019",
          is_verified: true,
        },
      },
      {
        title: "Luxury Evening Clutch",
        brand: "GlamourEve",
        price: 3200,
        previous_price: 3500,
        discount_rate: 8.57,
        rating: 4.9,
        reviews: 500,
        units_sold: 800,
        images: img10,
        category: {
          gender: "Women",
          season: ["All Seasons"],
          use: ["Evening", "Party"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Gold", "Silver", "Black"],
          sizes: ["One Size"],
        },
        description:
          "A luxurious evening clutch with a sleek metallic finish, perfect for parties and formal events.",
        materials: "Metal, Faux Leather",
        wash_care: "Wipe with a dry cloth.",
        store: {
          name: "GlamourEve Boutique",
          location: "Kathmandu, Nepal",
          established: "2020",
          is_verified: true,
        },
      },
    ],
    glasses: [
      {
        title: "Modern Rectangle Eyeglasses",
        brand: "Visionary",
        price: 1800,
        previous_price: 2400,
        discount_rate: 25,
        rating: 4.3,
        reviews: 1150,
        units_sold: 3500,
        images: img11,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Casual", "Indoor"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Gray", "Blue"],
          sizes: ["Small", "Medium"],
        },
        description:
          "Sleek and modern rectangular eyeglasses designed for everyday use. Made with durable materials and comfortable fit.",
        materials: "Frame: TR90, Lenses: Optical Glass",
        wash_care: "Clean with a soft cloth and avoid exposure to high heat.",
        store: {
          name: "Visionary Eyewear",
          location: "Kathmandu, Nepal",
          established: "2017",
          is_verified: true,
        },
      },
      {
        title: "Luxury Oval Glasses",
        brand: "Elite Optics",
        price: 3000,
        previous_price: 3500,
        discount_rate: 14.3,
        rating: 4.9,
        reviews: 890,
        units_sold: 1500,
        images: img12,
        category: {
          gender: "Women",
          season: ["All Seasons"],
          use: ["Fashion", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Gold", "Silver"],
          sizes: ["Medium"],
        },
        description:
          "Elegant oval glasses designed for those who appreciate luxury. Crafted with precision and offering a stylish fit for every occasion.",
        materials: "Frame: Stainless Steel, Lenses: Optical Glass",
        wash_care: "Wipe with a microfiber cloth, avoid harsh chemicals.",
        store: {
          name: "Elite Optics",
          location: "Kathmandu, Nepal",
          established: "2018",
          is_verified: true,
        },
      },
      {
        title: "Sport Performance Glasses",
        brand: "ActiveLens",
        price: 2200,
        previous_price: 2700,
        discount_rate: 18.5,
        rating: 4.5,
        reviews: 670,
        units_sold: 2200,
        images: img13,
        category: {
          gender: "Unisex",
          season: ["Summer", "All Seasons"],
          use: ["Sports", "Outdoor"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Gray"],
          sizes: ["Medium", "Large"],
        },
        description:
          "Sporty glasses designed to withstand high-performance activities. Offers protection from UV rays and reduces glare for optimal outdoor performance.",
        materials: "Frame: Polycarbonate, Lenses: UV Protective",
        wash_care: "Clean with a soft cloth, avoid contact with sharp objects.",
        store: {
          name: "ActiveLens Sports",
          location: "Kathmandu, Nepal",
          established: "2021",
          is_verified: true,
        },
      },
      {
        title: "Elegant Square Glasses",
        brand: "UrbanLook",
        price: 1800,
        previous_price: 2200,
        discount_rate: 18.2,
        rating: 4.4,
        reviews: 780,
        units_sold: 1800,
        images: img14,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Casual", "Indoor"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Brown", "Gray"],
          sizes: ["Small", "Medium"],
        },
        description:
          "A fashionable pair of square glasses suitable for any occasion. Provides comfort and style in one sleek package.",
        materials: "Frame: Acetate, Lenses: Optical Glass",
        wash_care:
          "Clean with a microfiber cloth, avoid exposure to direct sunlight.",
        store: {
          name: "UrbanLook Eyewear",
          location: "Kathmandu, Nepal",
          established: "2020",
          is_verified: true,
        },
      },
      {
        title: "Vintage Round Eyeglasses",
        brand: "RetroVision",
        price: 2100,
        previous_price: 2700,
        discount_rate: 22.2,
        rating: 4.7,
        reviews: 1150,
        units_sold: 2300,
        images: img15,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Fashion", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Gold", "Black"],
          sizes: ["Small", "Medium"],
        },
        description:
          "A stylish and vintage-inspired round eyeglasses design. Perfect for fashion-conscious individuals looking for a unique look.",
        materials: "Frame: Metal, Lenses: Optical Glass",
        wash_care: "Clean with a soft cloth and store in the case.",
        store: {
          name: "RetroVision Opticals",
          location: "Kathmandu, Nepal",
          established: "2018",
          is_verified: true,
        },
      },
    ],
    shoes: [
      {
        title: "Comfortable Sandals",
        brand: "BeachStep",
        price: 1800,
        previous_price: 2200,
        discount_rate: 18.2,
        rating: 4.4,
        reviews: 760,
        units_sold: 3200,
        images: img16,
        category: {
          gender: "Unisex",
          season: ["Summer"],
          use: ["Outdoor", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Beige", "Navy"],
          sizes: ["6", "7", "8", "9"],
        },
        description:
          "Comfortable and stylish sandals designed for the summer season. Featuring adjustable straps for a secure fit and lightweight construction for all-day wear.",
        materials: "Upper: Synthetic, Sole: EVA",
        wash_care: "Wipe clean with a damp cloth.",
        store: {
          name: "BeachStep Shoes",
          location: "Kathmandu, Nepal",
          established: "2020",
          is_verified: true,
        },
      },
      {
        title: "Stylish Slip-On Shoes",
        brand: "SlipEase",
        price: 2200,
        previous_price: 2700,
        discount_rate: 18.5,
        rating: 4.3,
        reviews: 670,
        units_sold: 2400,
        images: img17,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Gray", "Black", "Blue"],
          sizes: ["6", "7", "8", "9"],
        },
        description:
          "Casual and comfortable slip-on shoes perfect for everyday use. Easy to wear and provides a relaxed, stylish look.",
        materials: "Upper: Canvas, Sole: Rubber",
        wash_care: "Wipe with a damp cloth, air dry.",
        store: {
          name: "SlipEase Footwear",
          location: "Kathmandu, Nepal",
          established: "2021",
          is_verified: true,
        },
      },
      {
        title: "High-Performance Hiking Boots",
        brand: "TrailBlaze",
        price: 5500,
        previous_price: 6000,
        discount_rate: 8.3,
        rating: 4.8,
        reviews: 1100,
        units_sold: 1900,
        images: img18,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Outdoor", "Sports"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Gray", "Olive", "Brown"],
          sizes: ["6", "7", "8", "9", "10"],
        },
        description:
          "Durable and high-performance hiking boots designed for rough terrain and outdoor adventures. Features advanced cushioning and ankle support.",
        materials: "Upper: Waterproof Fabric, Sole: Vibram",
        wash_care: "Clean with a soft brush and air dry.",
        store: {
          name: "TrailBlaze Gear",
          location: "Kathmandu, Nepal",
          established: "2016",
          is_verified: true,
        },
      },
      {
        title: "Comfort Running Shoes",
        brand: "ActiveStride",
        price: 3000,
        previous_price: 3500,
        discount_rate: 14.3,
        rating: 4.7,
        reviews: 1450,
        units_sold: 4200,
        images: img19,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Sports", "Outdoor"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Red", "Black", "Green"],
          sizes: ["6", "7", "8", "9", "10"],
        },
        description:
          "Lightweight and breathable running shoes designed for comfort and performance. Ideal for jogging, running, and casual outdoor activities.",
        materials: "Upper: Mesh, Sole: EVA",
        wash_care: "Spot clean with a damp cloth, air dry.",
        store: {
          name: "ActiveStride Footwear",
          location: "Kathmandu, Nepal",
          established: "2022",
          is_verified: true,
        },
      },
    ],
    smartphone: [
      {
        title: "PixelOne 6",
        brand: "PixelTech",
        price: 35000,
        previous_price: 40000,
        discount_rate: 12.5,
        rating: 4.9,
        reviews: 1900,
        units_sold: 5400,
        images: img21,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Smartphone", "Photography"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "White", "Red"],
          sizes: ["128GB", "256GB"],
        },
        description:
          "The PixelOne 6 is equipped with a 6.3-inch OLED display, Snapdragon 865 chipset, 12MP camera with advanced AI, and a 4000mAh battery. Perfect for photography enthusiasts.",
        materials: "Glass front and back, aluminum frame",
        wash_care: "Wipe with a microfiber cloth.",
        store: {
          name: "PixelTech Store",
          location: "Kathmandu, Nepal",
          established: "2018",
          is_verified: true,
        },
      },
      {
        title: "VibeSmart V10",
        brand: "VibeTech",
        price: 38000,
        previous_price: 43000,
        discount_rate: 11.6,
        rating: 4.6,
        reviews: 2300,
        units_sold: 6100,
        images: img22,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Smartphone", "Entertainment", "Gaming"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Platinum Gray", "Sapphire Blue", "Mint Green"],
          sizes: ["128GB", "256GB", "512GB"],
        },
        description:
          "The VibeSmart V10 features a 6.5-inch OLED display, Snapdragon 730G chipset, 48MP camera, and 4000mAh battery. Perfect for gaming and multimedia content.",
        materials: "Glass front, plastic back, aluminum frame",
        wash_care: "Wipe clean with a microfiber cloth.",
        store: {
          name: "VibeTech Electronics",
          location: "Kathmandu, Nepal",
          established: "2019",
          is_verified: true,
        },
      },
      {
        title: "OnePlus Nord CE 3 Lite",
        brand: "One Plus",
        price: 48000,
        previous_price: 55000,
        discount_rate: 12.7,
        rating: 4.7,
        reviews: 3500,
        units_sold: 8000,
        images: img23,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Smartphone", "Gaming", "Photography"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Obsidian Black", "Aurora Silver", "Crimson Red"],
          sizes: ["128GB", "256GB", "512GB"],
        },
        description:
          "EliteMax 5G is a flagship phone with a 6.9-inch Super AMOLED display, Snapdragon 888 chipset, 108MP camera, and 5000mAh battery. Designed for next-gen gaming and photography.",
        materials: "Glass front and back, aluminum frame",
        wash_care: "Wipe with a microfiber cloth.",
        store: {
          name: "EliteTech Store",
          location: "Kathmandu, Nepal",
          established: "2020",
          is_verified: true,
        },
      },
      {
        title: "Realme GT 7 Pro",
        brand: "Realme",
        price: 52000,
        previous_price: 57000,
        discount_rate: 8.77,
        rating: 4.8,
        reviews: 4200,
        units_sold: 8200,
        images: img24,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Smartphone", "Photography", "Productivity"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Cosmic Black", "Lunar Silver", "Neon Green"],
          sizes: ["128GB", "256GB", "512GB"],
        },
        description:
          "InfinityPro 12 offers a 6.8-inch OLED display, Snapdragon 888 chipset, 108MP quad-camera system, and a 5000mAh battery for outstanding performance.",
        materials: "Glass front and back, aluminum frame",
        wash_care: "Clean with a microfiber cloth.",
        store: {
          name: "InfinityTech Electronics",
          location: "Kathmandu, Nepal",
          established: "2019",
          is_verified: true,
        },
      },
      {
        title: "Iphone 16",
        brand: "Iphone",
        price: 33000,
        previous_price: 37000,
        discount_rate: 10.81,
        rating: 4.5,
        reviews: 1800,
        units_sold: 6000,
        images: img25,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Smartphone", "Casual", "Productivity"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Dark Gray", "Light Blue", "Gold"],
          sizes: ["128GB", "256GB"],
        },
        description:
          "VisionX 8 is equipped with a 6.4-inch AMOLED display, Snapdragon 720G chipset, 64MP camera, and 4000mAh battery. Ideal for casual users and productivity tasks.",
        materials: "Glass front, plastic back, aluminum frame",
        wash_care: "Wipe gently with a microfiber cloth.",
        store: {
          name: "VisionTech Store",
          location: "Kathmandu, Nepal",
          established: "2021",
          is_verified: true,
        },
      },
    ],
    smartwatch: [
      {
        title: "Noise Pulse 2 max",
        brand: "Noise",
        price: 9500,
        previous_price: 11000,
        discount_rate: 13.64,
        rating: 4.5,
        reviews: 1200,
        units_sold: 2900,
        images: img27,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Fitness", "Health", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Silver", "Gold"],
          sizes: ["Small", "Medium", "Large"],
        },
        description:
          "HealthTrack 4 comes with advanced fitness tracking features, including heart rate monitoring, GPS, and step tracking. The 1.4-inch AMOLED display provides clear and vibrant visuals.",
        materials: "Aluminum case, Silicone strap",
        wash_care: "Wipe with a soft cloth.",
        store: {
          name: "HealthTrack Electronics",
          location: "Kathmandu, Nepal",
          established: "2021",
          is_verified: true,
        },
      },
      {
        title: "Boat Lunar Discovery",
        brand: "Boat",
        price: 11000,
        previous_price: 13000,
        discount_rate: 15.38,
        rating: 4.4,
        reviews: 1500,
        units_sold: 3300,
        images: img28,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Fitness", "Health", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Red", "Navy Blue"],
          sizes: ["Small", "Large"],
        },
        description:
          "ActiveFit 2.0 offers heart rate monitoring, step tracking, and sleep analysis. The 1.4-inch HD display is perfect for viewing notifications and fitness data. Ideal for active individuals.",
        materials: "Plastic case, Silicone strap",
        wash_care: "Clean with a damp cloth.",
        store: {
          name: "ActiveFit Store",
          location: "Kathmandu, Nepal",
          established: "2019",
          is_verified: true,
        },
      },
      {
        title: "Noise Pulse Go Buzz Smart",
        brand: "Noise",
        price: 13000,
        previous_price: 15000,
        discount_rate: 13.33,
        rating: 4.8,
        reviews: 2000,
        units_sold: 5000,
        images: img29,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Fitness", "Sports", "Health"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Blue", "Gray"],
          sizes: ["Small", "Medium"],
        },
        description:
          "SportWatch X features a 1.5-inch OLED display, step tracking, heart rate monitoring, GPS, and sleep analysis. Water-resistant up to 100 meters, making it ideal for sports enthusiasts.",
        materials: "Stainless steel case, Silicone strap",
        wash_care: "Clean with a microfiber cloth.",
        store: {
          name: "SportTech Store",
          location: "Kathmandu, Nepal",
          established: "2020",
          is_verified: true,
        },
      },
      {
        title: "Boat wave call 2 plus",
        brand: "Boat",
        price: 11500,
        previous_price: 13500,
        discount_rate: 14.81,
        rating: 4.6,
        reviews: 1100,
        units_sold: 2800,
        images: img30,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Fitness", "Health", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Green", "Purple"],
          sizes: ["Small", "Large"],
        },
        description:
          "TrackFit 360 offers 24/7 fitness tracking with a 1.4-inch display, GPS, heart rate monitor, and sleep tracking. Enjoy up to 7 days of battery life on a single charge.",
        materials: "Plastic case, Silicone strap",
        wash_care: "Wipe with a soft cloth.",
        store: {
          name: "TrackFit Electronics",
          location: "Kathmandu, Nepal",
          established: "2021",
          is_verified: true,
        },
      },
    ],
    laptop: [
      {
        title: "Acer ALG Gaming laptop 13th gen",
        brand: "Acer",
        price: 120000,
        previous_price: 130000,
        discount_rate: 7.69,
        rating: 4.9,
        reviews: 2200,
        units_sold: 3500,
        images: img31,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Gaming", "Entertainment"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Red"],
          sizes: ["17.3-inch"],
        },
        description:
          "GamingMaster Z7 is a beast with a 17.3-inch 4K display, Intel Core i9 processor, 32GB RAM, and NVIDIA RTX 3080 graphics card. Designed for gamers who demand top performance.",
        materials: "Metal body",
        wash_care: "Clean with a damp cloth.",
        store: {
          name: "GamingMax Store",
          location: "Lalitpur, Nepal",
          established: "2020",
          is_verified: true,
        },
      },
      {
        title: "Acer Aspire lite 12th gen",
        brand: "Acer",
        price: 55000,
        previous_price: 60000,
        discount_rate: 8.33,
        rating: 4.5,
        reviews: 950,
        units_sold: 2100,
        images: img32,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Work", "Business", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Gray"],
          sizes: ["15.6-inch"],
        },
        description:
          "ThinkPad 15 offers a 15.6-inch full HD display, Intel Core i5, and 8GB RAM. Perfect for professional work, video conferencing, and productivity tasks.",
        materials: "Plastic body",
        wash_care: "Wipe with a dry cloth.",
        store: {
          name: "ThinkTech Electronics",
          location: "Kathmandu, Nepal",
          established: "2018",
          is_verified: true,
        },
      },
      {
        title: "Acer nitro v gaming laptop 13th gen",
        brand: "Acer",
        price: 80000,
        previous_price: 85000,
        discount_rate: 5.88,
        rating: 4.7,
        reviews: 1200,
        units_sold: 2200,
        images: img33,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Work", "Entertainment", "Casual"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Silver", "Space Gray"],
          sizes: ["14-inch"],
        },
        description:
          "ZenBook Pro 14 is a slim, high-performance laptop featuring a 14-inch 4K display, Intel Core i7, 16GB RAM, and SSD storage. Perfect for both work and entertainment.",
        materials: "Aluminum body",
        wash_care: "Wipe with a microfiber cloth.",
        store: {
          name: "ZenTech Store",
          location: "Lalitpur, Nepal",
          established: "2021",
          is_verified: true,
        },
      },
      {
        title: "Acer Travelmate Business Laptop",
        brand: "Acer",
        price: 40000,
        previous_price: 45000,
        discount_rate: 11.11,
        rating: 4.2,
        reviews: 700,
        units_sold: 1300,
        images: img34,
        category: {
          gender: "Unisex",
          season: ["All Seasons"],
          use: ["Work", "Entertainment"],
          age_group: "Adults",
        },
        variants: {
          colors: ["Black", "Blue"],
          sizes: ["13.3-inch"],
        },
        description:
          "WebBook 13 is a budget-friendly ultrabook with a 13.3-inch display, Intel Core i5, and 8GB RAM. Ideal for everyday tasks like browsing, office work, and video streaming.",
        materials: "Plastic body",
        wash_care: "Wipe with a damp cloth.",
        store: {
          name: "WebTech Electronics",
          location: "Kathmandu, Nepal",
          established: "2021",
          is_verified: true,
        },
      },
    ],
  },
};

export default productData;
