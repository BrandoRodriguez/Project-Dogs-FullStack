

// export function filtering(){

//     // Filtrando
//     if (current_temperament !== 'All'){
        
//         let temperament_array

//         let filter_dogs = searchBreed.filter(function(item, idx) {
//             console.log('entrando en filter')
            
//             try {
//                 temperament_array = item.temperament.split(', ')
//             } catch {
//                 temperament_array = []
//             }

//             if ( temperament_array.includes(current_temperament) )
//                 return item

//         })

//         dispatch({type: SEARCH_BREEDS, payload: filter_dogs})
//     }

//     // Ordenando

//     if (current_order === 'ASC name')
//         searchBreed.sort(orderNameAsc)
//     else
//         searchBreed.sort(orderNameDesc)

//     // Dividiendo
//     let all_dogs_sliced = slice_dogs(searchBreed)
//     let show_dogs = all_dogs_sliced[current_page]
// }

export function slice_dogs(dogs_to_slice){

    let new_array = dogs_to_slice.reduce((fake_array, item, index) => { 

        const chunk_index = Math.floor(index/8)

        if(!fake_array[chunk_index]) {
            fake_array[chunk_index] = [] // start a new chunk
        }

        fake_array[chunk_index].push(item)
        return fake_array
    }, [])

    return new_array
}

export function orderNameAsc( a, b ) {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
}

export function orderNameDesc( a, b ) {
    if ( a.name < b.name ){
        return 1;
    }
    if ( a.name > b.name ){
        return -1;
    }
    return 0;
}
