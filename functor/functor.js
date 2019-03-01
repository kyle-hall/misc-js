
const Identity = value => ({
  map: fn => Identity(fn(value)),
  valueOf: () => value,
  toString: () => `Identity(${value})`,
  [Symbol.iterator]: function* () {
    yield value
  }
})

const trace = x => {
  console.log(x)
  return x
}

const u = Identity(2)

// Identity Law
u.map(trace)
u.map(x => x).map(trace)

const f = n => n + 1
const g = n => n * 2

// Composition Law
const r1 = u.map(x => f(g(x)))
const r2 = u.map(g).map(f)

r1.map(trace)
r2.map(trace)

// Javascript-y things

// Addition of number and string types - enabled by the valueOf method
const ints = (Identity(2) + Identity(4))
trace(ints)

const hi = (Identity('h') + Identity('i'))
trace(hi)

// Printing an Identity with toString method

console.log(u.toString())

// We can iterate over Identity objects, even when they are mixed in with other types

const arr = [1, 2, ...Identity(3)]
trace(arr)
