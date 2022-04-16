<div className='doctorCard-container py-2 px-0'>
        <div className='doctorCard-content '>
            <div className='container'>
                <div className='row'>
                        <div className='col-10 doct-img d-flex justify-content-center'>
                            <img src='img/doctor1.jpg' alt='doctor Img' className='ms-3 mb-3'></img>
                        </div>
                        <GrFormClose className='col px-0'/>
                </div>
                <div className='doct-des text-center'>
                    <h6>Dr Ines Kammoun</h6>
                    <p className='m-0'><span>Speciality:</span> Dentist</p>
                    <div className='rating-icons'>
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={24}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                        style={{
                                            marginRight: 10,
                                            cursor: "pointer",
                                            width:15                                    
                                        }}
                                        />
                                    )
                                    })}
                        </div>
                    <a href="#" className="btn btn-primary  animated slideInLeft">Appointment</a>
                </div>
            </div>
                
                
                
        </div>
    </div>