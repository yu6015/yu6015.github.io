function quantumCalculation(data) {
    // 将输入数据转换为数字种子
    const seed = Array.from(JSON.stringify(data))
                     .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    // 使用混沌系统生成随机数
    let x = 0.5;
    const a = 3.9 + (seed % 100)/1000;
    for(let i = 0; i < 1000; i++) {
        x = a * x * (1 - x);
    }
    return Math.floor(x * 100);
}