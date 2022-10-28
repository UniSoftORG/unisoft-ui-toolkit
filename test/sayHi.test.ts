import { sayHi } from '../src/index'

test('hi works', () => {
  const echoName = sayHi('Petar'); 
  expect (echoName).toStrictEqual('Petar')
})
