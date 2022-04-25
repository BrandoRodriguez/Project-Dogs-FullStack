import './Pagination.css'

function Pagination(current_page) {

    try{
        let element_active = document.querySelector(".active")
        element_active.className = 'prev';

        let element = document.getElementById(current_page)
        element.className = 'active'
    }
    catch(err){
    }

    // const nextHandle = (e) => { // Control del boton next
    //     e.preventDefault();

    //     if (show.current_page <= 7){
    //         setShow( prevState => {
    //             return { ...prevState, current_page: prevState.current_page + 1 }
    //         })
    //     }
    // }

    // const backHandle = (e) => { // Control del boton back

    //     e.preventDefault();

    //     if (show.current_page !== 0) {
    //         setShow( prevState => {
    //             return { ...prevState, current_page: prevState.current_page - 1 }
    //         })

    //     } else {
    //         setShow( prevState => {
    //             return { ...prevState, current_page: 0}
    //         })
    //     }
    // }

    // const setPage = (e) => {
    //     e.preventDefault();
    //     setShow( prevState => {
    //         return { ...prevState, current_page: e.target.id}
    //     })
    // }

    return (
        <>
            <div className='pagination'>
                <ul>
                    <li>
                        <a href="/" className="prev">
                            Previous
                        </a>
                        <a href="/">01</a>
                        <a href="/" className="active">02</a>
                        <a href="/">03</a>
                        <a href="/">04</a>
                        <a href="/">06</a>
                        <a href="/">07</a>
                        <a href="/">07</a>
                        <a href="/" className="next">Next
                        </a>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default Pagination;