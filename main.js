// Função para atualizar dinamicamente a hora com base no fuso horário selecionado
function atualizarHora() {

    // Obter o elemento de lista suspensa
    var lista = document.getElementById("fusosHorarios");

    // Obter o valor selecionado
    var fusoSelecionado = lista.options[lista.selectedIndex].value;

    // Obter a hora atual no fuso horário selecionado
    var d = new Date(); // Object of date()
    var horaAtual = new Date(d.toLocaleString("en-US", { timeZone: fusoSelecionado }));

    // Obter as horas, minutos e segundos
    var hr = horaAtual.getHours();
    var min = horaAtual.getMinutes();
    var sec = horaAtual.getSeconds();

    // Calcular rotação dos ponteiros
    var hr_rotation = 30 * hr + min / 2; // Converting current time
    var min_rotation = 6 * min;
    var sec_rotation = 6 * sec;

    // Selecionar elementos do relógio
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");

    // Atualizar a rotação dos ponteiros
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    // Relógio Digital
    var lista = document.getElementById("fusosHorarios");
    var fusoSelecionado = lista.options[lista.selectedIndex].value;
    var fusoSelecionadoTexto = lista.options[lista.selectedIndex].innerText;

    var options = { timeZone: fusoSelecionado, hour12: true };
    var horario = d.toLocaleTimeString('en-US', options);

    // Setar as variáveis de texto
    var digitalClock = document.getElementById("digital");
    var language = document.getElementById("language");
    var selectTimeZone = document.getElementById("selectTimeZone");

    // Página traduzida de acordo com o idioma selecionado
    switch (language.value) {
        case "en":
            selectTimeZone.innerHTML = "Select a Time Zone: ";
            digitalClock.innerHTML = "It is <span style='color: #FFB330;'>" + horario + "</span>" + " in <span style='color: #586FFF;'>" + fusoSelecionadoTexto + "</span>";
            break;

        case "pt":
            selectTimeZone.innerHTML = "Selecione um fuso horário: ";
            digitalClock.innerHTML = "São <span style='color: #FFB330;'>" + horario + "</span>" + " em <span style='color: #586FFF;'>" + fusoSelecionadoTexto + "</span>";
            break;

        case "es":
            selectTimeZone.innerHTML = "Seleccione una zona horaria: ";
            digitalClock.innerHTML = "Son las <span style='color: #FFB330;'>" + horario + "</span>" + " en <span style='color: #586FFF;'>" + fusoSelecionadoTexto + "</span>";
            break;

        default:

            break;
    }
}

// Chamar a função para exibir a hora inicial
atualizarHora();

// Atualizar a hora a cada segundo
setInterval(atualizarHora, 1000);