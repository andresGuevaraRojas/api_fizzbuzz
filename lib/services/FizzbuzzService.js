class FizzbuzService {
    static applyValidationInExplorer(explorer) {
        const FIZZ = "FIZZ";
        const BUZZ = "BUZZ";
        const FIZZBUZZ = FIZZ + BUZZ;

        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = FIZZBUZZ;
        } else if (explorer.score % 3 === 0) {
            explorer.trick = FIZZ;
        } else if (explorer.score % 5 === 0) {
            explorer.trick = BUZZ;
        } else {
            explorer.trick = explorer.score;
        }

        return explorer;
    }
}

module.exports = FizzbuzService;
