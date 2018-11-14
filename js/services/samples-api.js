let samples = [];


function saveSample(sample) {
    localStorage.setItem('samples', JSON.stringify(sample));
}

const samplesApi = {
    add(sample) {
        // 1. add to our array
        samples.push(sample);
        // 2. save array to localStorage
        saveSample(sample);
    },
    getAll() {
        const json = localStorage.getItem('samples');
        if(json) {
            samples = JSON.parse(json);
        }
        return samples;
    }
};

export default samplesApi;