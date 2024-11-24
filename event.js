// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// // Bubbling Phase (default behavior)
// grandparent.addEventListener('click', () => alert('Grandparent Div clicked - bubbling'), false);
// parent.addEventListener('click', () => alert('Parent Div clicked - bubbling'), false);
// child.addEventListener('click', () => alert('Child Div clicked - bubbling'), false);

// // Trickling Phase
// grandparent.addEventListener('click', () => alert('Grandparent Div clicked - capturing'), true);
// parent.addEventListener('click', () => alert('Parent Div clicked - capturing'), true);
// child.addEventListener('click', () => alert('Child Div clicked - capturing'), true);

const gP = document.querySelector(".grandparent");
const P = document.querySelector(".parent");
const c = document.querySelector(".child");


gP.addEventListener("click", () => {
    setTimeout(() => {
        console.log("Grandparent clicked (capturing phase)");
        gP.style.backgroundColor = "coral";
        setTimeout(() => {
            gP.style.backgroundColor = "white";
        }, 2000); 
    }, 2000); 
}, true);

P.addEventListener("click", () => {
    setTimeout(() => {
        console.log("Parent clicked (capturing phase)");
        P.style.backgroundColor = "yellow";
        setTimeout(() => {
            P.style.backgroundColor = "white";
        }, 2000); 
    }, 4000);
}, true); 

c.addEventListener("click", () => {
    setTimeout(() => {
        console.log("Child clicked (capturing phase)");
        c.style.backgroundColor = "green";
        setTimeout(() => {
            c.style.backgroundColor = "white";
        }, 2000); 
    }, 6000); 
}, true); 

