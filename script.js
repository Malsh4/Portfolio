document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
  function addNewColors() {
    document.getElementById('cc1').classList.add('npp1');
    document.getElementById('cc2').classList.add('npp2');
    document.getElementById('cc3').classList.add('npp3');
}

function removeNewColors() {
    document.getElementById('cc1').classList.remove('npp1');
    document.getElementById('cc2').classList.remove('npp2');
    document.getElementById('cc3').classList.remove('npp3');
}

document.getElementById('cc1').addEventListener('mouseover', addNewColors);
document.getElementById('cc2').addEventListener('mouseover', addNewColors);
document.getElementById('cc3').addEventListener('mouseover', addNewColors);

document.getElementById('cc1').addEventListener('mouseout', removeNewColors);
document.getElementById('cc2').addEventListener('mouseout', removeNewColors);
document.getElementById('cc3').addEventListener('mouseout', removeNewColors);

