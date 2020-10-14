export const classNameString = (def, classes) => {

    let className = [def]
    
    if ( classes !== undefined ) {
        className.push(...classes)
    }

    return className.join(" ")

}