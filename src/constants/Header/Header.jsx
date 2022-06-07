import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [destination, setDestination] = React.useState("");
    const [openDate, setOpenDate] = React.useState(false);
    const [date, setDate] = React.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        },
    ]);
    const [openOptions, setOpenOptions] = React.useState(false);
    const [options, setOptions] = React.useState({
        Adult: 1,
        Children: 0,
        Room: 1,

    });
    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    const handleSearch = () => {
        navigate("/hotels",{state:{destination , date , options}})
    };
    return (
        <div className='app__header'>
            <div className={type === "list" ? "app__header-container listMode" : "app__header-container"}>
                <div className='app__header-list'>
                    <div className='app__header-list_item'>
                        <FontAwesomeIcon icon={faBed} />
                        <span onClick={handleSearch}n>Hotels</span>
                    </div>
                    <div className="app__header-list_item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="app__header-list_item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="app__header-list_item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="app__header-list_item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                { type !== "list" && (
                <>
                <h1 className='app__header-title'>A life of discounts? It's Genius.</h1>
                <p className='app__header-desc'>Get rewarded for your travels - unlock instant savings of 20% or more with a free Relax.com account.</p>
                <button type='button' className='custom__button'> Sign In / Register</button>
                <div className='app__header-search'>
                    <div className='app__header-search_item'>
                        <FontAwesomeIcon icon={faBed} className='app__header-icon' />
                        <input type='text' placeholder='Search Destination' className='app-input' />
                        onChange={(e) => setDestination(e.target.value)}
                    </div>

                    <div className='line'></div>


                    <div className='app__header-search_item'>
                        <FontAwesomeIcon icon={faCalendarDays} onClick={() => setOpenDate(!openDate)} className='app__header-icon' />
                        <span onClick={() => setOpenDate(!openDate)} className='app-inputtext'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="app__date"
                        />}
                    </div>

                    <div className='line'></div>

                    <div className='app__header-search_item'>
                        <FontAwesomeIcon icon={faPerson} onClick={() => setOpenOptions(!openOptions)} className='app__header-icon' />
                        <span onClick={() => setOpenOptions(!openOptions)} className='app-inputtext'>{`${options.Adult} Adult  ${options.Children} Children  ${options.Room} Room`}</span>
                        {openOptions && <div className='app__options'>
                            <div className='app__options-item'>
                                <span className='options-text'>Adult</span>
                                <div className='options-container'>
                                    <button disabled={options.Adult <= 1} className='options-button' onClick={() => handleOption("Adult", "d")}>-</button>
                                    <span className='options-number'>{options.Adult}</span>
                                    <button className='options-button' onClick={() => handleOption("Adult", "i")}>+</button>
                                </div>
                            </div>

                            <div className='app__options-item'>
                                <span className='options-text'>Children</span>
                                <div className='options-container'>
                                    <button disabled={options.Children < 1} className='options-button' onClick={() => handleOption("Children", "d")}>-</button>
                                    <span className='options-number'>{options.Children}</span>
                                    <button className='options-button' onClick={() => handleOption("Children", "i")}>+</button>
                                </div>
                            </div>

                            <div className='app__options-item'>
                                <span className='options-text'>Room</span>
                                <div className='options-container'>
                                    <button disabled={options.Room <= 1} className='options-button' onClick={() => handleOption("Room", "d")}>-</button>
                                    <span className='options-number'>{options.Room}</span>
                                    <button className='options-button' onClick={() => handleOption("Room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>

                    <div className='line'></div>
                    <div className='app-inputtext'>
                        <button type="button" className="custom__button" onClick={handleSearch}>Search</button>
                    </div>

                </div> </>)}
            </div>

        </div>
    );
};

export default Header;