import jacket from '../assets/jacket.jpg'
import couch from '../assets/couch.jpg'
import chair from '../assets/chair.jpg'

const dataSet = [
  {
      id: 1,
      title: 'Red Jacked',
      subTitle: '600',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit amet est placerat in egestas. Semper auctor neque vitae tempus quam. At auctor urna nunc id cursus metus aliquam',
      image: jacket
  },
  {
      id: 2,
      title: 'Couch',
      subTitle: '10000',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit amet est placerat in egestas. Semper auctor neque vitae tempus quam. At auctor urna nunc id cursus metus aliquam',
      image: couch
  },
  {
      id: 3,
      title: 'Chair',
      subTitle: '2000',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit amet est placerat in egestas. Semper auctor neque vitae tempus quam. At auctor urna nunc id cursus metus aliquam',
      image: chair
  }
]

export function data(params) {
    return dataSet
}
export function addData(newPost) {
    dataSet.unshift(newPost)
}