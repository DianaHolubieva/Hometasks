interface IMission {
    mission_name: string,
    launch_date_local: number,
    launch_site: ILaunchSite,
    links: ILinks,
    rocket: IRocket

}

interface ILaunchSite {
    site_name_long: string;
}

interface ILinks{
    article_link: null,
    video_link: string
}

interface IRocket  {
    rocket_name: string;
    first_stage: ICores;
    second_stage: IPlayloads;

}

interface ICores {
    flight: number;
    core: ICore;
}

interface ICore {
    reuse_count: number;
    status: string;
}

interface IPlayloads {
    payload_type: string;
    payload_mass_kg: numer;
    payload_mass_lbs: numer;
}

interface IUser {
    name:string;
    age:number;
    gender:string;
}

function sum(a:number, b:number):number{
    return a+b;
}

function showSum(a:number, b:number):void{
    console.log(a + b);


function incAge(someUser:IUser, inc:number):IUser{
    someUser.age+=inc;
    return someUser;
}
