/** =====================
 *  Render contact cards 
 *  ===================== */

const names = ['Han Solo', 'Ellen Ripley', 'Malcolm Reynolds', 'Rick Deckard', 'Roy Batty', 'Kathryn Janeway', 'Dana Scully', 'Sarah Connor', 'Kara Thrace', 'John Sheridan', 'Susan Ivanova', 'Ben Kenobi', 'Luke Skywalker', 'Samantha Carter', 'Rose Tyler', 'Elim Garak', 'Gaius Baltar', 'Sarah-Jane Smith', 'Leia Organa', 'River Tam', 'Arthur Dent', 'Jeffrey Sinclair', 'Laura Roslin', 'Emmet Brown', 'Jean-Luc Picard', 'Londo Mollari', 'Donna Noble', 'Samantha Carter', 'Walter Bishop', 'Sam Bell', 'River Song', 'Marty McFly', 'Peter Weyland', 'Gwen Cooper', 'Ellie Arroway'],
    titles = ['UX Designer', 'Software Engineer', 'QA Analyst', 'Creative Director', 'Content', 'Account Manager', 'Program Director', 'Intern'],
    $cards = document.querySelector('.cards');


const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const get = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const getPhone = () => {
    return '(' + rand(201, 999) + ') ' + rand(100, 999) + '-' + rand(1000, 9999);
}


Array.from({ length: 41 }, (x, i) => {
    $card = document.createElement('div');
    $card.classList.add('card');

    const cardName = get(names),
        cardEmail = cardName.replace(' ', '.').toLowerCase() + '&#8203;@example.com';

    $card.innerHTML = `
        <div class="card-portrait">
            <img src="https://api.lorem.space/image/face?w=125&h=125&t=${i}" width="125" height="125" alt="" />
        </div>
        <div class="card-portrait-caption">
            <div class="card-name">${cardName}</div>
            <div class="card-title">${get(titles)}</div>
            
        </div>
        <div class="card-contact">
            <div class="card-phone">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M77.7,63.9l-6.2-5c-2.1-1.7-5.1-1.801-7.3-0.2L58.3,63c-0.8,0.6-1.899,0.5-2.6-0.2L46,54l-8.9-9.8 c-0.7-0.7-0.8-1.8-0.2-2.6l4.3-5.9c1.6-2.2,1.5-5.2-0.2-7.3l-5-6.2c-2.2-2.8-6.4-3-8.9-0.5l-5.4,5.4c-1.2,1.2-1.8,2.9-1.8,4.5 c0.7,12.7,6.5,24.8,15,33.3s20.5,14.3,33.3,15c1.7,0.1,3.3-0.601,4.5-1.801L78.1,72.7C80.8,70.3,80.5,66.1,77.7,63.9z"/></svg>
                <span>${getPhone()}</span>
            </div>
            <div class="card-fax">
                <svg class="icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="91.249px" height="91.25px" viewBox="0 0 91.249 91.25" style="enable-background:new 0 0 91.249 91.25;" xml:space="preserve"><g><g><path d="M19.667,14.833H1c-0.552,0-1,0.447-1,1v67.5c0,0.553,0.448,1,1,1h18.667c0.552,0,1-0.447,1-1v-67.5C20.667,15.28,20.219,14.833,19.667,14.833z"/><path d="M90.25,22.373h-2.167v-5.163l-9.59-11.001h-49.91c-1.654,0-3,1.346-3,3v13.164h-2.167c-0.552,0-1,0.447-1,1v60.668c0,0.553,0.448,1,1,1h66.833c0.552,0,1-0.447,1-1V23.373C91.25,22.819,90.802,22.373,90.25,22.373z M40.875,73.375h-9.75v-9.75h9.75V73.375z M40.875,58.375h-9.75v-9.75h9.75V58.375z M40.875,43.375h-9.75v-9.75h9.75V43.375z M55.875,73.375h-9.75v-9.75h9.75V73.375z M55.875,58.375h-9.75v-9.75h9.75V58.375z M55.875,43.375h-9.75v-9.75h9.75V43.375z M70.875,73.375h-9.75v-9.75h9.75V73.375z M70.875,58.375h-9.75v-9.75h9.75V58.375z M70.875,43.375h-9.75v-9.75h9.75V43.375z M84.083,22.373h-54.5V10.208h45.935v8.449h8.522l0.043,0.05V22.373z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                <span>${getPhone()}</span>
            </div>
            <div class="card-email">
                <svg class="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330.001 330.001" style="enable-background:new 0 0 330.001 330.001;" xml:space="preserve"><g id="XMLID_348_"><path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"/><polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 "/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                <span>${cardEmail}</span>
            </div>
        </div>
    `;

    $cards.appendChild($card);
})

/** =====================
 *  Flyout interaction 
 *  ===================== */

const $flyoutToggle = document.getElementById('flyout-toggle'),
    $aside = document.querySelector('body > aside'),
    $settingsButtons = document.querySelectorAll('.settings-buttons > button'),
    $root = document.querySelector(':root');

$flyoutToggle.addEventListener('click', () => {
    $aside.classList.toggle('open');
})

$settingsButtons.forEach($button => {
    $button.addEventListener('click', () => {
        if ($button.dataset.property && $button.dataset.value) {
            $root.style.setProperty('--' + $button.dataset.property, $button.dataset.value);
            $button.dataset.selected = 'true';
            $button.parentElement.querySelectorAll('button').forEach($innerButton => {
                if ($innerButton !== $button) {
                    $innerButton.removeAttribute('data-selected');
                }
            })
        }
        
    })
})
