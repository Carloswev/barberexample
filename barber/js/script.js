document.getElementById('agendar-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Horário agendado com sucesso!');
});
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showCurrentItem() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
    currentIndex = (currentIndex + 1) % totalItems;
}

setInterval(showCurrentItem, 3000); // Trocar a cada 3 segundos
document.getElementById('agendar-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo valores dos campos
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    // Verificando se os campos estão preenchidos
    if (nome && data && horario) {
        document.getElementById('feedback').innerText = `Agendamento confirmado para ${nome} em ${data} às ${horario}!`;
        document.getElementById('agendar-form').reset(); // Limpa o formulário
    } else {
        document.getElementById('feedback').innerText = 'Por favor, preencha todos os campos.';
    }
});
