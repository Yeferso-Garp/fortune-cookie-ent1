const getRandomElemArray = (arr) => {
    const indexRamdon = Math.floor(Math.random() * arr.length);
    return arr[indexRamdon];
}

export default getRandomElemArray