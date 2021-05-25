export interface ILinks {
    mission_patch_small: string
}

export interface IRocket {
    rocket_name: string
}

export interface ISite {
    site_name: string
}

export interface ILaunch {
    launch_date_utc: Date,
    mission_name: string,
    rocket: IRocket,
    launch_site: ISite,
    details: string,
    links: ILinks
}

