const directoryUrl = "https://erubamigodstime.github.io/wdd230/chamber/directory.json"

getcompaniesData(directoryUrl );

async function getcompaniesData(directoryUrl ){
    const result  = await fetch(directoryUrl )
    const data = await result.json();
    displayCompanies(data.companies);
    
   
};



function displayCompanies(companies){
    let mainDiv  = document.querySelector("div.main-directory")
    companies.forEach(company => {
        
        let sect = document.createElement('section');
        sect.classList.add('patners','main-patners');
        let fig = document.createElement('figure');
        fig.classList.add('pat-img','patners-img');
        let name = document.createElement('h3');    
        let industry = document.createElement('p');
        let line = document.createElement('hr');
        let location = document.createElement('p');
        let domain = document.createElement('p');        
        let image = document.createElement('img');

        name.innerHTML = ` <strong class="name" ><strong/>${company.name}`;
        industry.innerHTML = ` <strong > Industry <strong/>:  ${company.industry} `;        
        location.innerHTML = `<strong > Business Location<strong/>: ${company.location} `;
        domain.innerHTML = `<strong > Domain  <strong/>:  ${company.domain} `;
        image.setAttribute( 'src', company.imageurl);
        image.setAttribute( 'alt', `image of ${company.name} }`);
        image.setAttribute( 'width', '250');
        image.setAttribute( 'height', '150');
        image.setAttribute( 'loading', 'lazy');

        fig.appendChild(image);

        sect.appendChild(name);
        sect.appendChild(fig);
        sect.appendChild(line);
        sect.appendChild(industry);        
        sect.appendChild(location);
        sect.appendChild(domain);        
        
        mainDiv.appendChild(sect)

        
    });

};
