interface IMission {
    mission_name: string,
    launch_date_local: number,
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: null,
        video_link: string
    },
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: [
                {
                    flight: number,
                    core: {
                        reuse_count: number,
                        status: string
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: string,
                    payload_mass_kg: number,
                    payload_mass_lbs: number
                }
            ]
        }
    }
}

const user: object = {
    name: string,
    age:number,
    gender:string
}
function sum(a: number, b: number){
    return Number(a+b)
}
function showSum(a: number, b: number){
    console.log(a + b);
}

function incAge(someUser: object, inc: number){
    someUser.age+=inc
    return someUser
}
