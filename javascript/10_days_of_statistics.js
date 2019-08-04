processData("10\n"+"1064630 11735 14216 99233 14470 4978 73429 38120 51135 67060");
function processData(input) {
    var regex = /\n/;
    var corte = input.split(regex);
    var dataset = corte[1].split(" ");;
    let media = 0;
    let mediana;
    let moda;
    let atual_moda = 0;
    let counter;
    dataset.sort((a, b) => a - b);
    for (let i = 0; i < dataset.length; i++) {
        counter = 1;
        media += parseFloat(dataset[i]);
        for (let j = i+1; j < dataset.length; j++) {
            if (dataset[i] == dataset[j]) {
                counter++
            }
        }
        if (counter > atual_moda) {
            atual_moda = counter;
            moda = i;
        }
    }
    media /= dataset.length;
    dataset.length % 2 == 0 ? mediana = (parseFloat((dataset[dataset.length / 2])) + (parseFloat(dataset[(dataset.length / 2) - 1]))) / 2 : mediana = dataset[parseInt(dataset.length / 2)];
    moda = dataset[moda];
    console.log(media.toFixed(1) + "\n" + mediana.toFixed(1) + "\n" + moda);
} 