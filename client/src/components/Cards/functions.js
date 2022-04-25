

export default function slice_dogs(dogs_to_slice){
    
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
