import Filters from './Filters';
import List from './List';
import { useEffect, useState } from "react";
import { ILaunch } from './types';

export default function App() {

  const [launches, setLaunches] = useState<ILaunch[]>([]);
  const [siteNames, setSiteNames] = useState<string[]>([]);
  const [rocketNames, setRocketNames] = useState<string[]>([]);

  const [rocketsFilterValue, setRocketsFilterValue] = useState<string>('All');
  const [sitesFilterValue, setSitesFilterValue] = useState<string>('All');

  const getValues = (launches: ILaunch[]) => {
    const sites = launches.reduce((acc: string[], launch: ILaunch) => {
      !acc.some(item => item === launch.launch_site.site_name) && acc.push(launch.launch_site.site_name)
      return acc;
    }, [])

    const rockets = launches.reduce((acc: string[], launch: ILaunch) => {
      !acc.some(item => item === launch.rocket.rocket_name) && acc.push(launch.rocket.rocket_name)
      return acc;
    }, [])

    return [sites, rockets];
  };


  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://api.spacexdata.com/v3/launches');
      const launches = await res.json();
      const [siteNames, rocketNames] = getValues(launches);
      setLaunches(launches);
      setSiteNames(siteNames);
      setRocketNames(rocketNames);
    }

    getData()
  }, [])


  return (
    <div className="App">
      <div className="container">
        <h1>Launches</h1>
        <div className="row justify-content-start">
          <Filters items={rocketNames} type={'Rocket'} onChange={setRocketsFilterValue} />
          <Filters items={siteNames} type={'Launch Site'} onChange={setSitesFilterValue} />
        </div>
        <div className='row mt-4 ml-4'>
          {launches && <List launches={launches} rocketsFilterValue={rocketsFilterValue} sitesFilterValue={sitesFilterValue} />}
        </div>
      </div>
    </div>
  );
}
