// const getState = state => {
//     let logState = () => console.log(`Your state is ${state}`)
//     return [state, logState];
// }

// const [state, logState] = getState('stable')
// console.log(state) // The console should print out 'stable'
// logState() // The console should print out 'Your state is stable'

/////////////////////////////////////////////////////////////
const user = {
    id: 101,
    email: 'josh@nextacademy.com',
    personalInfo: {
        name: 'Josh',
        address: {
            line1: 'AG-7, Glomac Damansara',
            state: 'Kuala Lumpur',
            country: 'Malaysia'
        }
    }
}

const {
    gender = 'male',
    email,
    personalInfo: {
        address: {
            line1, state, country
        }
    }
} = user

let josh = {
    gender: gender,
    email: email,
    address: line1 + ' ' + state + ' ' + country,
}

console.log(josh);