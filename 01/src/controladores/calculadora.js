const somar = (req, res) => {
    const { num1, num2 } = req.query
    if (!isNaN(Number(num1)) && !isNan(Number(num2))) {
        return res.send('${Number(num1) + Number(num2)}');
        //não pode passar uma expressão para dentro do den
    } else {
        return res.send("Números Inválidos");
    }
};

const subtrair = (req, res) => {
    const { num1, num2 } = req.query
    if (!isNaN(Number(num1)) && !isNan(Number(num2))) {
        return res.send('${Number(num1) - Number(num2)}');
        //não pode passar uma expressão para dentro do den
    } else {
        return res.send("Números Inválidos");
    }
};

const multiplicar = (req, res) => {
    const { num1, num2 } = req.query
    if (!isNaN(Number(num1)) && !isNan(Number(num2))) {
        return res.send('${Number(num1) * Number(num2)}');
        //não pode passar uma expressão para dentro do den
    } else {
        return res.send("Números Inválidos");
    }
};

const dividir = (req, res) => {
    const { num1, num2 } = req.query
    if (!isNaN(Number(num1)) && !isNan(number(num2))) {
        return res.send('${Number(num1) / Number(num2)}');
        //não pode passar uma expressão para dentro do den
    } else {
        return res.send("Números Inválidos");
    }
};

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}