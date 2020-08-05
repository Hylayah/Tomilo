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

let span1 = document.getElementById('section-span-1');
let span2 = document.getElementById('section-span-2');
let span3 = document.getElementById('section-span-3');
let span4 = document.getElementById('section-span-4');
let span5 = document.getElementById('section-span-5');

let img = document.getElementById('section-img');

let sections = [section1, section2, section3, section4, section5];

for(var i = 0; i < sections.length; i++){
    sections[i].addEventListener('click', function(){

        for(var j = 0; j < sections.length; j++){
            sections[j].classList.remove('active');
        }
        this.classList.add('active');

        if(this == section1) {
            title.innerHTML = span1.innerHTML;
            img.src = '../img/doctor.png';
            text.innerHTML = 'ECG monitors and writers should meet safety requirements in regards to electrical safety. Maintenance must be performed to ensure functionality and safety for the different modules and possible wearing. Additionally, electrical safety tests, including earth leakage and connectivity, are also needed to ensure patient safety. Maintenance will be aligned with service manuals from manufacturers and includes: Visual check of buttons, display, chassis, Test of ECG leads, Battery test, Electrical safety test, General cleaning of instrument, Technical aids.';
        } else if(this == section2){
            title.innerHTML = span2.innerHTML;
            img.src = '../img/scan.png';
            text.innerHTML = 'Patient monitor service is important to ensure patient and user safety. During maintenance, the patient monitor is functionally tested and an electrical safety test is performed according to standards. Medical Equipment Service Paweł Tomiłop is an authorized service organization for several patient monitor manufacturers. The B105 and B125 patient monitors deliver portable monitoring with multi-parameters featuring alarms and physiological data points for adult and pediatric patients. Used as a stand-alone device or interfaced to a network of devices, they give you the added versatility you need across the care continuum.';
        } else if(this == section3){
            title.innerHTML = span3.innerHTML;
            img.src = '../img/flask.png';
            text.innerHTML = 'Respirators needs to be serviced according to manufacturer recommendations to ensure patient safety. Medical Equipment Service Paweł Tomiłop is an authorized service organization for several Respirator manufacturers. Preventive maintenance of a respirator includes, for example: <ul><li>Visual inspection</li> <li>Central gas measurements</li> <li>Internal pressure regulation</li></ul>';
        } else if(this == section4){
            title.innerHTML = span4.innerHTML;
            img.src = '../img/rubber-gloves.png';
            text.innerHTML = 'Laser surgery equipment needs to be serviced annually according to manufacturer instructions. It is important to ensure that the laser unit is working as the manufacturer requires. Medical Equipment Service Paweł Tomiłop is an authorized service organization for several laser surgery equipment manufacturers. aser surgery is a type of surgery that uses a laser (in contrast to using a scalpel) to cut tissue. Examples include the use of a laser scalpel in otherwise conventional surgery, and soft-tissue laser surgery, in which the laser beam vaporizes soft tissue with high water content. Laser surgery is commonly used on the eye. Techniques used include LASIK, which is used to correct near and far-sightedness in vision, and photorefractive keratectomy, a procedure which permanently reshapes the cornea using an excimer laser to remove a small amount of the human tissue.';
        } else if(this == section5){
            title.innerHTML = span5.innerHTML;
            img.src = '../img/first-aid-kit.png';
            text.innerHTML = 'In regard to medical device safety and performance, it is important that infusion pumps are regularly tested. This ensures that they are functioning to the manufacturer’s specifications and are within clinical and environmental expectations. Medical Equipment Service Paweł Tomiłop is an authorized service organization for several infusion pump manufacturers. Preventive maintenance of infusion pump includes, for example:    Visual check – chassis, labels, etc., Internal check – plugs and liquid, Test of all buttons, Verify date & time, Test of hose to line, Check drop-counter, Open door alarm  , Delivered volume test, Occlusion test, Battery test, Electrical safety test, General cleaning of instrument';
        }
    })
}