import { FC, useState } from 'react';

interface FiltersProps {
    items: string[]
    type: string
}



const Filters: FC<FiltersProps> = ({ items, type }) => {
    const [isActive, setIsActive] = useState<boolean>(false);




    const listItems = items.map(item => {
        return (
            <li key={item} className="dropdown-item">
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="radio" />
                        {item}
                    </label>
                </div>
            </li>
        )
    })

    return (
        <div className="col-2">
            {type}
            <div className="dropdown">
                <button
                    className="btn mt-1 btn-outline-secondary dropdown-toggle"
                    type="button"
                    onClick={() => setIsActive(!isActive)}
                >
                    All
                </button>
                <ul className={`dropdown-menu ${isActive && `show`}`}>
                    <li key='all' className="dropdown-item">
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="radio" />
                                All
                            </label>
                        </div>
                    </li>
                    {listItems}
                </ul>
            </div>
        </div>
    );
};

export default Filters;
