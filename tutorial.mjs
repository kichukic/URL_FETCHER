    import fetch from 'node-fetch';
    import fs from 'fs/promises'
    import { error } from 'console';
    import * as dotenv from 'dotenv';
    dotenv.config()


    export const fetch_api =()=>{
        return new Promise(async(resolve,reject)=>{
            try {
                var fetchData = await fetch(process.env.URL)
                var to_json = await fetchData.json()
                resolve(to_json)
            } catch (error) {
                reject(error)
            }
        })
    }



    let fetcheddata
    fetch_api().then((data)=>{
        const toString = JSON.stringify(data)
        fetcheddata = toString
    fs.writeFile('new.txt',JSON.stringify(fetcheddata),(error)=>{
       
}) 
console.log("data >>>",fetcheddata)

        
    })


export{fetcheddata}


    

