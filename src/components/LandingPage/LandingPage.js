import React, { useEffect, useState } from 'react';
import './index.css'

function App() {
    const [locations, setLocations] = useState([]);
    const [applianceTypes, setApplianceTypes] = useState([]);
    const [technicians, setTechnicians] = useState([]);

    useEffect(() => {
        fetch('https://nviribackend.onrender.com/locations')
            .then(response => response.json())
            .then(data => setLocations(data));

        fetch('https://nviribackend.onrender.com/appliance-types')
            .then(response => response.json())
            .then(data => setApplianceTypes(data));

        fetch('https://nviribackend.onrender.com/technicians')
            .then(response => response.json())
            .then(data => setTechnicians(data));
    }, []);

    return (
        <div className="App-container">
            <nav className='navbar-container'>
                <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724841828/blue_logo_hcjzjh.png" className='argon-logo' alt = "Argon" />
                <button className='logout-btn' type = "button">Logout</button>
            </nav>
            <div className='finding-container'>
                <div className='finding-left'>
                    <h1 className='finding-heading'>Take care of your home needs now!</h1>
                    <p className='finding-para'>ServicePro is your one-stop solution to troubleshoot, choose a vendor and book a technician.</p>
                    <div className='select-place-container'>
                    <select className='select'>
                    {locations.map(location => (
                        <option key={location.id} value={location.id} className='option'>
                            {location.location_name}
                        </option>
                    ))}
                </select>
                <p className='select-para'>Anywhere in the selected place</p>
                    </div>
                    <div className='select-place-container'>
                        <input type="text" list="appliance-types" className='appliance-input' placeholder='Search Home Appliances' />
                        <datalist id="appliance-types" className='datalist'>
                        {applianceTypes.map(type => (
                            <option key={type.id} value={type.type_name} />
                        ))}
                        </datalist>
                        <button type = "button" className='search-btn'>Search</button>
                    </div>
                </div>
                <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724843507/Frame_alpkbe.png" className='finding-right-image' />
            </div>

            <div className='services-container'>
                <h1 className='services-heading'>All Services</h1>
                <p className='services-para'>The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
                <ul className='services-list'>
                    <li className='list-item'>
                        <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724844390/Vector_7_akbqzu.png" className='services-img' />
                        <h2 className='appliance-name'>Fridge</h2> 
                        <p className='appliance-para'>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                    </li>

                    <li className='list-item'>
                        <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724844794/Vector_8_jjw7yn.png" className='services-img' />
                        <h2 className='appliance-name'>Air Conditioner</h2> 
                        <p className='appliance-para'>Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
                    </li>

                    <li className='list-item'>
                        <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724845132/Vector_10_x1habo.png" className='services-img' />
                        <h2 className='appliance-name'>Television</h2> 
                        <p className='appliance-para'>What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
                    </li>

                    <li className='list-item'>
                        <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724845019/fire-burner-thin_1_l3yyhx.png" className='services-img' />
                        <h2 className='appliance-name'>Gas Stove</h2> 
                        <p className='appliance-para'>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                    </li>

                    <li className='list-item'>
                        <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724844794/Vector_8_jjw7yn.png" className='services-img' />
                        <h2 className='appliance-name'>Air Conditioner</h2> 
                        <p className='appliance-para'>Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
                    </li>

                    <li className='list-item'>
                        <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724845132/Vector_10_x1habo.png" className='services-img' />
                        <h2 className='appliance-name'>Television</h2> 
                        <p className='appliance-para'>What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
                    </li>
                </ul>
            </div>
        
            <div className='book-container'>
                <h1 className='book-heading'>Book a request in 3 simple steps</h1>
                <div className='sub-book-container'>
                <div className='sub-book'>
                    <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724845338/undraw_forms_re_pkrt_1_kgqov5.png" className='book-imgs' />
                    <h1 className='book-sub-head'>Provide your appliance details</h1>
                    <p className='book-sub-para'>Let us know your appliance details and your issue.</p>
                </div>
                <div className='sub-book'>
                    <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724845845/Untitled_h7vquu.png" className='book-imgs' />
                    <h1 className='book-sub-head'>Choose your technician</h1>
                    <p className='book-sub-para'>Let us know your appliance details and your issue.</p>
                </div>
                <div className='sub-book'>
                    <img src = "https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724845898/undraw_certification_re_ifll_1_vp7jr3.png" className='book-imgs' />
                    <h1 className='book-sub-head'>Get it fixed!</h1>
                    <p className='book-sub-para'>Let us know your appliance details and your issue.</p>
                </div>
                </div>
            </div>

            <div className='technicians-container'>
                <h2 className='techni-head'>Featured Vendors</h2>
                <ul className='slider'>
                    {technicians.map(tech => (
                        <li key={tech.id} className='vendor'>
                            <h3 className='vendor-name'>{tech.name}</h3>
                            <p className='vendor-para'>Specialization: {tech.specialization}</p>
                            <p className='vendor-para'>Rating: {tech.rating}</p>
                            <p className='vendor-name'>{tech.description}</p>
                            <p className='vendor-para'>Contact: {tech.contact_info}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;