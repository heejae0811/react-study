export const catStatus = {
  normal: '보통',
  fat: '비만',
  die: '사망',
}

export const cats = [
  {
    id: 0,
    profileImage: require('../assets/img/cat01.jpg'),
    name: '가가',
    gender: '여자',
    age: 1,
    weight: 3,
    status: catStatus.normal,
    history: []
  },
  {
    id: 1,
    profileImage: require('../assets/img/cat02.jpg'),
    name: '나나',
    gender: '여자',
    age: 7,
    weight: 15,
    status: catStatus.fat,
    history: []
  },
  {
    id: 2,
    profileImage: require('../assets/img/cat03.jpg'),
    name: '다다',
    gender: '여자',
    age: 15,
    weight: 12,
    status: catStatus.die,
    history: []
  }
]