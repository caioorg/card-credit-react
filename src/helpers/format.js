const formartCC = value => {
    let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    let matches = v.match(/\d{4,16}/g)
    let match = matches &&  matches[0] || ''
    let parts = []

    for(let i=0; i < match.length ; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if(parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}

export default { formartCC }