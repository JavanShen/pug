const req = require.context('./', false, /\.js$/)

const customComponets = {}

req.keys().forEach(key => {
    if (key === './index.js') return
    const componet = req(key).default
    customComponets[`n${componet.name}`] = componet
})

export default customComponets
