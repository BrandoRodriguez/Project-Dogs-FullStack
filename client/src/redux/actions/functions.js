

export function filter_temperament(dogs, temperament){

    if (temperament !== 'All'){
        
        let temperament_array

        let filter_dogs = dogs.filter(function(item, idx) {

            try {
                temperament_array = item.temperament.split(', ')
            } catch {
                temperament_array = []
            }

            if ( temperament_array.includes(temperament) )
                return item

        })
        return filter_dogs
    }

    return dogs
}

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

export function orderName(dogs, order_value){

    let dogs_filter

    if (order_value === 'ASC name'){
        dogs_filter = dogs.sort(orderNameAsc)
    } else if (order_value === 'DESC name'){
        dogs_filter = dogs.sort(orderNameDesc)
    }

    return dogs_filter

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

export function orderWeight(dogs, weight_value){
    return dogs
}