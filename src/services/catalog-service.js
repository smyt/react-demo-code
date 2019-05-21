export default  class CatalogService {

   data = [
    {
      id: 1,
      title : "some",
      price: 58,
      img: 'https://secure.ce-tescoassets.com/assets/CZ/472/0000054491472/ShotType1_540x540.jpg',
      description : 'Some text over here'
    },
    {
      id: 2,
      title : "some_2",
      price: 20,
      img: 'https://secure.ce-tescoassets.com/assets/CZ/472/0000054491472/ShotType1_540x540.jpg',
      description : 'Some text over here new '
    },
  ];

  getGoods() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ( Math.random() > 0.75) {
          reject(new Error('Something go wrong!!'))
        } else {
          resolve(this.data)
        }
      }, 700)

    })


  }
}