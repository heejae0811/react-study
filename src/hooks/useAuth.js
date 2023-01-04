import {useState, useCallback} from 'react'

// useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다.
export default (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handler = useCallback((e) => {
    const blank = /\s/

    if (blank.test(e.target.value) === true) {
      alert('공백은 사용할 수 없습니다.')
      return
    }

    setValue(e.target.value)
  }, [])

  return [value, handler, setValue]
};