import { FC } from 'react';
import { ILaunch } from './types';

interface ListItemProps {
    launch: ILaunch
}

const ListItem: FC<ListItemProps> = ({ launch }) => {

    const { mission_name, details, links, launch_date_utc, flight_id } = launch;

    const formatDate = (dateUTC: Date) => {
        const normalize = (num: number) => num.toString().length > 1 ? num : `0${num}`
        const date = new Date(dateUTC);

        return `${normalize(date.getDate())}.${normalize(date.getMonth())}.${date.getFullYear()}`
    }

    return (
        <li key={flight_id} className="list-group-item border-0" style={{ maxWidth: "800px" }}>
            <div className="card mb-3 p-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={links.mission_patch_small}
                            alt="..."
                        />
                    </div>
                    <div className="col-md-6 ms-4">
                        <div className="card-header bg-white d-flex justify-content-between">
                            <h5 className="card-title">{mission_name}</h5>
                            <p className="card-text">
                                <small className="text-muted">{formatDate(launch_date_utc)}</small>
                            </p>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                {details || 'Upcomming'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ListItem;
