export const catStatus = {
  normal: 'Normal',
  fat: 'Fat',
  die: 'Die',
}

export const cats = [
  {
    id: 0,
    profileImage: require('../assets/img/cat01.jpg'),
    name: '가가',
    gender: 'Female',
    age: 1,
    weight: 3,
    status: catStatus.normal,
    history: []
  },
  {
    id: 1,
    profileImage: require('../assets/img/cat02.jpg'),
    name: '나나',
    gender: 'Female',
    age: 7,
    weight: 15,
    status: catStatus.fat,
    history: []
  },
  {
    id: 2,
    profileImage: require('../assets/img/cat03.jpg'),
    name: '다다',
    gender: 'Male',
    age: 15,
    weight: 12,
    status: catStatus.die,
    history: []
  }
]