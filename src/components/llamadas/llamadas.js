

export default async function getModels(){
    try {
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/modelos.json");
        const data = await res.json();
        return data
    }
    catch (error) {
        console.log("esto es un error en models: ", error);
        
    }
}

export async function getStreet(){
    try{
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/street.json");
        const data = await res.json();
        return data
    }
    catch(error){
        console.log("esto es un error en street", error);
        
    }
}
export async function getAdvertising(){
    try{
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/advertising.json");
        const data = await res.json();
        return data
    }
    catch(error){
        console.log("esto es un error en advertising", error);
        
    }
}

export async function getKids(){
    try{
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/kids.json");
        const data = await res.json();
        return data
    }
    catch(error){
        console.log("esto es un error en kids", error);
        
    }
}

export async function getWedding(){
    try{
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/bride.json");
        const data = await res.json();
        return data
    }
    catch(error){
        console.log("esto es un error en wedding", error);
        
    }
}