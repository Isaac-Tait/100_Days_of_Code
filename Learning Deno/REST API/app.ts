import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const env = Deno.env.toObject()
const PORT = env.PORT || 4000
const HOST = env.HOST || '127.0.0.1'

interface Dog {
    name: string
    age: number
    vaccinations: boolean
    "Owners Name": string
}

let dogs: Array<Dog> = [
    {
        name: 'Fido',
        age: 56,
        vaccinations: false,
        "Owners Name": "Bob & Cindy"
    },
    {
        name: 'Quickdraw',
        age: 14,
        vaccinations: true,
        "Owners Name": "Bill & Chelsea"
    },
]

// Returns a list of dogs
export const getDogs = ({ response }: { response: any }) => {
    response.body = dogs
}

// Retrieve a single dog by name
export const getDog = ({
    params,
    response,
  }: {
    params: {
      name: string
    }
    response: any
  }) => {
    const dog = dogs.filter((dog) => dog.name === params.name)
    if (dog.length) {
      response.status = 200
      response.body = dog[0]
      return
    }
  
    response.status = 400
    response.body = { msg: `Cannot find dog ${params.name}` }
  }
  

const router = new Router()
router
  .get('/dogs', getDogs)
  .get('/dogs/:name', getDog)
  //.post('/dogs', addDog)
  //.put('/dogs/:name', updateDog)
  //.delete('/dogs/:name', removeDog)

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT}...`)

await app.listen(`${HOST}:${PORT}`)

// Your First Deno App
// https://www.freecodecamp.org/news/the-deno-handbook/#your-first-deno-app
