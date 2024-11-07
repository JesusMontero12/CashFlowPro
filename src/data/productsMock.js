export let products = [
  {
    name: "Camiseta Minimalista",
    description:
      "Camiseta de algodón 100% con diseño minimalista y corte recto.",
    price: 29000,
    costPrice: 10000,
    discount: 10,
    colors: [
      {
        color: "BLANCO",
        sizes: [
          { size: "S", stock: 10 },
          { size: "M", stock: 15 },
          { size: "L", stock: 5 },
        ],
      },
    ],
    photo: [
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730738408/proyects/CashFlowPro/products/camiseta-marron1-3_amjx9z.jpg",
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730738407/proyects/CashFlowPro/products/camiseta-marron1-2_jlo4f8.jpg",
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730738407/proyects/CashFlowPro/products/camiseta-marron1-1_aueool.jpg",
    ],
    category: ["Ropa", "Casual"],
    registrationDate: "2024-11-01T12:00:00Z",
    lastUpdateDate: "2024-11-03T15:00:00Z",
    sale: 20,
    active: true,
    supplier: "Proveedor ABC",
    minimumReplenishmentQuantity: 5,
    ratings: [
      {
        user: "usuario001",
        scores: 5,
        comment: "Muy cómoda y de buena calidad.",
      },
    ],
  },
  {
    name: "Pantalón Corto",
    description:
      "Pantalón corto de tela ligera ideal para actividades diarias.",
    price: 34990,
    costPrice: 15000,
    discount: 0,
    colors: [
      {
        color: "NEGRO",
        sizes: [
          { size: "M", stock: 8 },
          { size: "L", stock: 12 },
        ],
      },
      {
        color: "AZUL",
        sizes: [
          { size: "S", stock: 10 },
          { size: "M", stock: 5 },
        ],
      },
    ],
    photo: [
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730739785/proyects/CashFlowPro/products/pantalon-cargo-corto1-3_nioo4s.jpg",
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730739785/proyects/CashFlowPro/products/pantalon-cargo-corto1-2_vqy6hd.jpg",
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730739785/proyects/CashFlowPro/products/pantalon-cargo-corto1-1_pqlpvn.jpg",
    ],
    category: ["Ropa", "Casual"],
    registrationDate: "2024-11-02T10:00:00Z",
    lastUpdateDate: "2024-11-03T16:00:00Z",
    sale: 15,
    active: true,
    supplier: "Proveedor XYZ",
    minimumReplenishmentQuantity: 3,
    ratings: [],
  },
  {
    name: "Pantalon chandal",
    description: `Pantalon ligero y fresco, perfecto para primavera y otoño.`,
    price: 49990,
    costPrice: 2000,
    discount: 0,
    colors: [
      {
        color: "ROJO",
        sizes: [
          { size: "S", stock: 5 },
          { size: "M", stock: 3 },
        ],
      },
      {
        color: "VERDE",
        sizes: [
          { size: "M", stock: 7 },
          { size: "L", stock: 4 },
        ],
      },
    ],
    photo: [
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730739833/proyects/CashFlowPro/products/pantalon-chandal1-3_bfcu5f.jpg",
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730739785/proyects/CashFlowPro/products/pantalon-chandal1-1_pqqe5i.jpg",
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730739785/proyects/CashFlowPro/products/pantalon-chandal1-2_gwwwxm.jpg",
    ],
    category: ["Ropa", "Verano"],
    registrationDate: "2024-11-01T14:00:00Z",
    lastUpdateDate: "2024-11-03T17:00:00Z",
    sale: 10,
    active: true,
    supplier: "Proveedor DEF",
    minimumReplenishmentQuantity: 2,
    ratings: [],
  },
  {
    name: "Chaqueta de Cuero",
    description:
      "Chaqueta de cuero auténtico, perfecta para cualquier ocasión.",
    price: 12990,
    costPrice: 6000,
    discount: 0,
    colors: [
      {
        color: "NEGRO",
        sizes: [
          { size: "S", stock: 2 },
          { size: "M", stock: 3 },
          { size: "L", stock: 4 },
        ],
      },
    ],
    photo: [
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730738427/proyects/CashFlowPro/products/chaqueta-cuero2-1_fvnonr.jpg",
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730738431/proyects/CashFlowPro/products/chaqueta-cuero2-2_f4vazy.jpg",
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730738431/proyects/CashFlowPro/products/chaqueta-cuero2-3_h5cp9q.jpg",
    ],
    category: ["Ropa", "Abrigos"],
    registrationDate: "2024-11-01T08:00:00Z",
    lastUpdateDate: "2024-11-03T18:00:00Z",
    sale: 5,
    active: true,
    supplier: "Proveedor GHI",
    minimumReplenishmentQuantity: 1,
    ratings: [
      {
        usuario: "usuario002",
        puntuacion: 4,
        comentario: "Buena calidad, pero un poco cara.",
      },
    ],
  },
  {
    name: "Lentes de sol",
    description:
      "Lentes de sol nueva coleccion de verano",
    price: 59990,
    costPrice: 2500,
    discount: 0,
    colors: [
      {
        color: "",
        sizes: [
          { size: "", stock: 10 },
          { size: "", stock: 8 },
        ],
      },
      {
        color: "NEGRO",
        sizes: [
          { size: "", stock: 5 },
          { size: "", stock: 6 },
        ],
      },
    ],
    photo: [
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730738771/proyects/CashFlowPro/products/lentes-sol-deportivos1-1_qn3nx8.jpg",
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730738772/proyects/CashFlowPro/products/lentes-sol-deportivos1-3_amaz26.jpg",
      "https://res.cloudinary.com/dqngvzxqy/image/upload/v1730738771/proyects/CashFlowPro/products/lentes-sol-deportivos1-2_o6vefn.jpg",
    ],
    category: ["Accesorios", "Casual"],
    registrationDate: "2024-11-02T12:00:00Z",
    lastUpdateDate: "2024-11-03T19:00:00Z",
    sale: 12,
    active: true,
    supplier: "Proveedor JKL",
    minimumReplenishmentQuantity: 4,
    ratings: [],
  },
];
