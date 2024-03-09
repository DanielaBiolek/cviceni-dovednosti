

const boduHtml = Number(prompt('Jáká je tvá úroveň dovedností v HTML? Vyjádři číslem od 0 do 100.'));
const boduCss = Number(prompt('Jáká je tvá úroveň dovedností v CSS? Vyjádři číslem od 0 do 100.'));
const boduJavaScript = Number(prompt('Jáká je tvá úroveň dovedností v JavaScriptu? Vyjádři číslem od 0 do 100.'));


const updateSlills = (idElementu, dovednostniBody) => {
    const bodovyBar = document.getElementById(idElementu);
    bodovyBar.style.width = dovednostniBody + '%';
};

const zmenaBodu = (idElementu, dovednostniBody) => {
    const bodovyText = document.getElementById(idElementu);
    const novyText = bodovyText.textContent;
    bodovyText.textContent = dovednostniBody + " / 100";
};


if (boduHtml > 100 || boduHtml < 0 || Number.isNaN(boduHtml)) {
    alert('Nesprávně zadaná hodnota bodů dovedností v HTML.')
} else if (boduCss > 100 || boduCss < 0 || Number.isNaN(boduCss)) {
    alert('Nesprávně zadaná hodnota bodů dovednostní v CSS.')
} else if (boduJavaScript > 100 || boduJavaScript < 0 || Number.isNaN(boduJavaScript)) {
    alert('Nesprávně zadaná hodnota bodů dovedností v JavaScriptu.')
} else {
    updateSlills('skill_progress1', boduHtml);
    updateSlills('skill_progress2', boduCss);
    updateSlills('skill_progress3', boduJavaScript);

    zmenaBodu("skill_value1", boduHtml);
    zmenaBodu("skill_value2", boduCss);
    zmenaBodu("skill_value3", boduJavaScript);
}
