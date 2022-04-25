

function slice_dogs(){
    let perros_to_show = []
    
    if (api_dogs.length !== 0 && show.slice_array.length === 0 ){
        
        let new_array = api_dogs.reduce((fake_array, item, index) => { 
    
            const chunk_index = Math.floor(index/8)
    
            if(!fake_array[chunk_index]) {
                fake_array[chunk_index] = [] // start a new chunk
            }
    
            fake_array[chunk_index].push(item)
            return fake_array
        }, [])
    
        setShow( prevState => {
            return { ...prevState, slice_array: new_array } ;
        })
    } 
    
    if (show.slice_array.length !== 0) {
        perros_to_show = show.slice_array[show.current_page]
    }
}
