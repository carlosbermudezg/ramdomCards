const Cards = ( { user, color } )=>{

    const {street, city, state, country, postcode, coordinates, timezone} = user.location
    const { title, first, last } = user.name

    return(
        <div className="card" style={ { color: color } }>
            <div className="card__header">
                <h1> { title + ' ' + first + ' ' + last } </h1>
            </div>
            <div className="card__body">
                <img src={ user.picture.large } alt="img-profile" />
            </div>
            <div className="card__footer">
                <ul>
                    <li> <small> <i class="fa-solid fa-envelope"></i> { user.email }  </small> </li>
                    <li> <small> <i class="fa-solid fa-phone"></i> { user.phone } </small>  </li>
                    <li> <small> <i class="fa-solid fa-location-dot"></i> { country + ' ' + state + ' ' + city } </small> </li>
                </ul>
            </div>
        </div> 
    )
}

export default Cards