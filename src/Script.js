let script = [];
const writeScript = () => {
    ////////////////////////////////////////////////
    //  ↓↓↓  ↓↓↓  把程式碼寫這條線以下唷  ↓↓↓  ↓↓↓  //
    ////////////////////////////////////////////////
    

    move();
    turnLeft();
    move();
    turnRight();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    turnRight();
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