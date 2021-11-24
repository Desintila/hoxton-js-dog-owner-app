console.log(data);

function createListOfDogs(dataElement){
    const liEl=document.createElement('li')
    liEl.setAttribute('class', 'dogs-list__button')
    liEl.textContent=dataElement.name
    liEl.addEventListener('click',function(){
        showDogsInfo(dataElement)
    })
    const card=document.querySelector('.dogs-list')
    card.append(liEl)
}

function showDogsInfo(dataElement){
    
    const sectionEl=document.createElement('section')
    sectionEl.setAttribute('class', 'main__dog-section')
    const h2El=document.createElement('h2')
    h2El.textContent=dataElement.name
    const imgEl=document.createElement('img')
    imgEl.setAttribute('src', dataElement.image)
    imgEl.setAttribute('alt', '')
    const divEl=document.createElement('div')
    divEl.setAttribute('class', 'main__dog-section__desc')
    const h3El=document.createElement('h3')
    h3El.textContent='Bio'
    const pEl=document.createElement('p')
    pEl.textContent=dataElement.bio
    const divBtnEl=document.createElement('div')
    divBtnEl.setAttribute('class', 'main__dog-section__btn')
    const pBtnEl=document.createElement('p')
    pBtnEl.textContent='Yes!'
    const emEl=document.createElement('em')
    emEl.textContent='Is naughty?'
    pBtnEl.prepend(emEl)
    const buttonEl=document.createElement('button')
    buttonEl.textContent='Good Dog'
    buttonEl.addEventListener("click", function(event){
        if (buttonEl.textContent == 'Good Dog') {
            buttonEl.textContent = 'Bad Doog'
            pBtnEl.textContent='Is naughty? No!'
        }
        else {
           buttonEl.textContent = 'Good Dog'
           pBtnEl.textContent='Is naughty? Yes!'
        }
     })
    
    divEl.append(h3El,pEl)
    divBtnEl.append(pBtnEl,buttonEl)
    sectionEl.append(h2El,imgEl,divEl,divBtnEl)
    const dogCard=document.querySelector('.main__dog-section')
    dogCard.innerHTML=''
    dogCard.append(sectionEl)
}
for(const dataElement of data){
    createListOfDogs(dataElement)
}
