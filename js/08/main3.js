// створюю дів, ставлю в баді, додаю клас контейнер для зручності.
const Addcontainer = document.createElement('div');
document.body.append(Addcontainer);
Addcontainer.className='container';
// селектор контейнеру в змінну для зручності.
const container = document.querySelector('.container');

container.innerHTML= '<div></div><div></div><div></div>';

