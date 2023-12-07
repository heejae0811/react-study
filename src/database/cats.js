export const catStatus = {
  normal: '정상',
  fat: '비만',
  die: '사망',
}

export const catMessages = [
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

export const cats = [
  {
    profileImage: require('../assets/img/cat01.jpg'),
    name: '가가',
    gender: '암컷',
    age: 1,
    weight: 3,
    status: catStatus.normal,
    history: []
  },
  {
    profileImage: require('../assets/img/cat02.jpg'),
    name: '나나',
    gender: '암컷',
    age: 5,
    weight: 10,
    status: catStatus.fat,
    history: []
  },
  {
    profileImage: require('../assets/img/cat03.jpg'),
    name: '다다',
    gender: '수컷',
    age: 21,
    weight: 12,
    status: catStatus.die,
    history: []
  }
]