let samples = [];


function saveSample(samples) {
    localStorage.setItem('samples', JSON.stringify(samples));
}

const samplesApi = {
    add(sample) {
        this.getAll();
        console.log(samples);
        samples.push(sample);
        saveSample(samples);
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