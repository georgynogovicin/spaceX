import { FC } from 'react'
import ListItem from './ListItem';
import { ILaunch } from './types';

interface ListProps {
    launches: ILaunch[]
}

const List: FC<ListProps> = ({ launches }) => {
    return (
        <ul className="list-group">
            {launches.map(launch => <ListItem key={launch.flight_id} launch={launch} />)}
        </ul>
    );
};

export default List;
