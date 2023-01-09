import {useState, useCallback} from 'react'

/*
커스텀 훅을 만드는 방법
1. use 라는 키워드로 시작하는 파일을 만들고, 그 안에 함수를 작성한다.
2. useState, useEffect, useCallback, useReducer 등 훅을 사용하여 원하는 기능을 구현하고, 컴포넌트에서 사용하고 싶은 값들을 반환한다.
*/
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  // useCallback(함수, 배열)
  // useCallback은 함수를 memoization 하기 위해서 사용되는 hook 함수이다. == 함수를 새로 만들지 않고 재사용
  const onChange = useCallback(e => {
    const blank = /\s/

    if (blank.test(e.target.value) === true) {
      alert('공백은 사용할 수 없습니다.')
      return
    }

    setValue(e.target.value)
  }, [])

  const reset = useCallback(() =>
    setValue(defaultValue), [defaultValue]
  )

  return [value, onChange, reset]
}

export default useInput