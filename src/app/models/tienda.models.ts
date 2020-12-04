export class Tienda {
  tiendaItems: Array<Object>;

  constructor() {
    this.tiendaItems = [
      {
        texto:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet culpa distinctio amet dolorum quam ad quos nesciunt saepe sequi deserunt.",
        titulo: "Orange Mineral Water",
        imagen: "minerawater-oragne.jpg",
        precios: 20,
      },
      {
        texto:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet culpa distinctio amet dolorum quam ad quos nesciunt saepe sequi deserunt.",
        titulo: "Water",
        imagen: "water-bottle.jpg",
        precios: 15,
      },
      {
        texto:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet culpa distinctio amet dolorum quam ad quos nesciunt saepe sequi deserunt.",
        titulo: "Cococola",
        imagen: "cocacola.jpg",
        precios: 30,
      },
    ];
  }
}
