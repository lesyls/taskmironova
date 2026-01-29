const showSuccessMessage = (message) => {
    console.log(message);
};

const showErrorMessage = (message) => {
    console.error(message);
};

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    let errorFound = false;
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === errorSymbol) {
            errorFound = true;
            errorCallback(`Найден запрещённый символ "${errorSymbol}" под индексом ${i}`);
        }
    }
    
    if (!errorFound) {
        successCallback("В данном тексте нет запрещенных символов");
    }
};

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);