
function example() {
  const greeting = 'Hello'

  const ob = {
    greeting: 'Yo',
    speak: (name) => {
      console.log(`${this.greeting} ${name}`)
      console.log(this)
    }
  }

  const ob2 = {
    greeting: 'Yuck',
    speak: function(name) {
      console.log(`${this.greeting} ${name}`)
      console.log(this)
    }
  }

  ob.speak('John')
  ob2.speak('Jane')
}

example()
