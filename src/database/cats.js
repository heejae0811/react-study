export const catStatus = {
  normal: 'Normal',
  fat: 'Fat',
  die: 'Die',
}

// TODO :: 가가 삭제 안됨, id를 추가해야하나?
export const cats = [
  {
    profileImage: require('../assets/img/cat01.jpg'),
    name: '가가',
    gender: 'Female',
    age: 1,
    weight: 3,
    status: catStatus.normal,
    history: []
  },
  {
    profileImage: require('../assets/img/cat02.jpg'),
    name: '나나',
    gender: 'Female',
    age: 7,
    weight: 15,
    status: catStatus.fat,
    history: []
  },
  {
    profileImage: require('../assets/img/cat03.jpg'),
    name: '다다',
    gender: 'Male',
    age: 15,
    weight: 12,
    status: catStatus.die,
    history: []
  }
]