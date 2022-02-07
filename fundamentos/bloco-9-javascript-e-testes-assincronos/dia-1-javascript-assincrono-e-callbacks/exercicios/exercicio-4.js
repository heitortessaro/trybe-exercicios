const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
    setTimeout(() => {
        const marsTemperature = getMarsTemperature();
        console.log(`Mars temperature is: ${marsTemperature} degree Celsius`)
    }, Math.random() * 5000);
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo