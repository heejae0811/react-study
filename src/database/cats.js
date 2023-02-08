export const catStatus = {
  normal: 'Normal',
  fat: 'Fat',
  die: 'Die',
}

export const catMessage = [
  '집사, 나랑 놀아줘~',
  '집사야, 정신차려',
  '나를 건들지마라!!',
  '배가 고프다',
  '야옹~',
  '핡!',
  '졸리다.. 잠이 온다...',
  '...',
  '주인놈아, 내 집에서 나가라~!',
  '나는 너가 좋다.. 영광으로 알아라!'
]

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