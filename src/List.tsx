import { FC } from 'react'
import ListItem from './ListItem';
import { ILaunch } from './types';

interface ListProps {
    launches: ILaunch[]
    rocketsFilterValue: string
    sitesFilterValue: string
}

const List: FC<ListProps> = ({ launches, rocketsFilterValue, sitesFilterValue }) => {

    const rocketFilter = (rocketName: string) => {
        return (item: ILaunch) => {
            return item.rocket.rocket_name === rocketName || rocketName === 'All'
        }
    }

    const siteFilter = (siteName: string) => {
        return (item: ILaunch) => {
            return item.launch_site.site_name === siteName || siteName === 'All'
        }
    }

    return (
        <ul className="list-group">
            {launches
                .filter(rocketFilter(rocketsFilterValue))
                .filter(siteFilter(sitesFilterValue))
                .map(launch => <ListItem key={launch.mission_name} launch={launch} />)}
        </ul>
    );
};

export default List;
