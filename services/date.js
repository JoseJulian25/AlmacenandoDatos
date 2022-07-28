export const unicasFechas = (tasks) => {
    const unicos = new Array;
    
    tasks.forEach(tasks =>{
        if(!unicos.includes(tasks.dateFormat)){
            unicos.push(tasks.dateFormat)
        }
    })
    return unicos
}

export const ordenarFechas = (dates) => {
    return dates.sort((a,b) => {
        const primeraFecha = moment(a, "DD/MM/YYYY")
        const segundaFecha = moment(b, "DD/MM/YYYY")
        
        return primeraFecha - segundaFecha;
    })
}