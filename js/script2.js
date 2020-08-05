document.getElementById('nav__menu').addEventListener('click', function(){
    document.getElementsByClassName('nav__open')[0].classList.toggle('none');
})


let text = document.getElementById('section-text');
let title = document.getElementById('section-title');

let section1 = document.getElementById('section-1');
let section2 = document.getElementById('section-2');
let section3 = document.getElementById('section-3');
let section4 = document.getElementById('section-4');
let section5 = document.getElementById('section-5');

let sections = [section1, section2, section3, section4, section5];

for(var i = 0; i < sections.length; i++){
    sections[i].addEventListener('click', function(){

        for(var j = 0; j < sections.length; j++){
            sections[j].classList.remove('active');
        }
        this.classList.add('active');

        if(this == section1) {
            title.innerHTML = 'Sekcja 1';
            text.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aspernatur maiores tenetur, obcaecati corrupti nostrum eius. Nostrum possimus recusandae molestias illum temporibus dolorem suscipit, id accusantium animi quasi iste facere deleniti adipisci cumque beatae delectus numquam voluptate eum. Libero quae perspiciatis ab obcaecati culpa rerum minus fugiat recusandae ducimus rem! Id accusantium animi quasi iste facere deleniti adipisci cumque beatae delectus numquam voluptate eum. Libero quae perspiciatis ab obcaecati culpa rerum minus fugiat recusandae ducimus rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere eum accusantium non harum ex ducimus, libero nihil animi optio maxime';
        } else if(this == section2){
            title.innerHTML = 'Sekcja 2';
            text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        } else if(this == section3){
            title.innerHTML = 'Sekcja 3';
            text.innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.';
        } else if(this == section4){
            title.innerHTML = 'Sekcja 4';
            text.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example.';
        } else if(this == section5){
            title.innerHTML = 'Sekcja 5';
            text.innerHTML = 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will.';
        }
    })
}