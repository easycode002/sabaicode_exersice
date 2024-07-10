function filterProperties(obj,...propTofilter){
    const afterFilter = {}
    for (let currentValue in obj){
        if (!propTofilter.includes(currentValue)){
            afterFilter[currentValue] = obj[currentValue]
        }
    }
    return afterFilter
}
const object = {a:1,b:2,c:3,d:4}
console.log(filterProperties(object,"d","b"));
