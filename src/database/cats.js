export const CatStatus = {
  s1: '너무 마름',
  s2: '마름',
  s3: '보통',
  s4: '통통',
  s5: '비만',
  s6: '고도비만',
  s7: '초고도비만'
}

export const cats = [
  {
    name: '김하영',
    weight: 1,
    age: 1,
    gender: '여자',
    status: CatStatus.s3,
    profileImage: require('../assets/img/cat01.jpg'),
    eatCount: 0,
    history: []
  },
  {
    name: '이휘재',
    weight: 1,
    age: 1,
    gender: '여자',
    status: CatStatus.s3,
    profileImage: require('../assets/img/cat02.jpg'),
    history: []
  },
  {

    name: '강다연',
    weight: 1,
    age: 1,
    gender: '여자',
    status: CatStatus.s3,
    profileImage: require('../assets/img/cat03.jpg'),
    history: []
  }
]
