let script = [];
const writeScript = () => {
    // 教學：
    // 輸入 move(); 就會往前走一步
    // 輸入 turnLeft(); 就會往左轉
    // 輸入 turnRight(); 就會往右轉
    // 請使用這三個指令來操控小車！

    ////////////////////////////////////////////////
    //  ↓↓↓  ↓↓↓  把程式碼寫這條線以下唷  ↓↓↓  ↓↓↓  //
    ////////////////////////////////////////////////
    

    turnLeft();
    move();
    turnRight();
    move();
    move();


    ////////////////////////////////////////////////
    //  ↑↑↑  ↑↑↑  把程式碼寫這條線以上唷  ↑↑↑  ↑↑↑  //
    ////////////////////////////////////////////////
};

const move = () => {
    script.push('move');
}

const turnLeft = () => {
    script.push('turnLeft');
}

const turnRight = () => {
    script.push('turnRight')
}

const getScript = () => {
    writeScript();
    return script;
};

export default getScript;