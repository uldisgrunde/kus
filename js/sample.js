
async function iegutDarglietasNoApi()
{
    let datiNoApi = await fetch('https://fakestoreapi.com/products/category/jewelery')
    let datiJson = await datiNoApi.json();
    return datiJson;
}

async function iegutApgerbiNoApi()
{
    let datiNoApi = await fetch('https://fakestoreapi.com/products/category/men%20clothing')
    let datiJson = await datiNoApi.json();
    return datiJson;
}

async function iegutDarbaLaiksNoApi()
{
    let datiNoApi = await fetch('https://armandspucs.github.io/veikals/darbalaiks.json')
    let datiJson = await datiNoApi.json();
    return datiJson;
}


async function raditDatus()
{
    let darglietasJson = await iegutDarglietasNoApi();
    let apgerbiJson = await iegutApgerbiNoApi();

    let produktiKopa = darglietasJson.concat(apgerbiJson);

    

    for (let i = 0; i < produktiKopa.length; i++)
    {
        console.log( produktiKopa[i]['title'] );
    }
    
}

