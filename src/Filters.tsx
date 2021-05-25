import { FC, useState } from 'react';

interface FiltersProps {
    items: string[]
    type: string
    onChange: (name: string) => void
}



const Filters: FC<FiltersProps> = ({ items, type, onChange }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [mainValue, setMainValue] = useState<string>('All');

    const onChangeHandler = (name: string) => {
        setMainValue(name)
        setIsActive(false)
        onChange(name)
    }


    const listItems = items.map(item => {
        return (
            <li key={item} className="dropdown-item">
                <div className="form-check">
                    <label className="form-check-label">
                        <input checked={mainValue === item} className="form-check-input" type="radio" name={item} onChange={() => onChangeHandler(item)} />
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
                    {mainValue}
                </button>
                <ul className={`dropdown-menu ${isActive && `show`}`}>
                    <li key='all' className="dropdown-item">
                        <div className="form-check">
                            <label className="form-check-label">
                                <input checked={mainValue === 'All'} className="form-check-input" type="radio" name={'All'} onChange={() => onChangeHandler('All')} />
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
