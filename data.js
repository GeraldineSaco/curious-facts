const dataFacts = async () => {
    let facts = `https://uselessfacts.jsph.pl`;
    let request = `${facts}/api/v2/facts/random`;
    
    let data = await fetch(request);
    console.log(data);
    let response = await data.json();

    console.log(facts);
    console.log(response);
    //console.log(response.text);
    //console.log(response.permalink);
}

dataFacts();

// response.text(es el título de la noticia)